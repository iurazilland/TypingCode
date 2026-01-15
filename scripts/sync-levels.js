require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const { parseLevelFile } = require('./parse-content');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase URL or Key in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function sync() {
    const levelsDir = path.join(__dirname, '../docs/content/levels');
    const files = fs.readdirSync(levelsDir).filter(f => f.endsWith('.md'));

    let allLevels = [];
    for (const file of files) {
        console.log(`Parsing ${file}...`);
        const levels = parseLevelFile(path.join(levelsDir, file));
        allLevels = allLevels.concat(levels);
    }

    console.log(`Starting to sync ${allLevels.length} levels from documents...`);

    for (const level of allLevels) {
        // Prepare data for upsert
        const { list_order, language, course_id, ...rest } = level;

        // Find existing level by language, course_id, and list_order
        const { data: existing } = await supabase
            .from('levels')
            .select('id')
            .eq('language', language)
            .eq('course_id', course_id)
            .eq('list_order', list_order)
            .single();

        if (existing) {
            // Update
            const { error: updateError } = await supabase
                .from('levels')
                .update(rest)
                .eq('id', existing.id);

            if (updateError) {
                console.error(`Error updating Level ${list_order}:`, updateError.message);
            } else {
                console.log(`Updated Level ${list_order}: ${level.title_en}`);
            }
        } else {
            // Insert
            const { error: insertError } = await supabase
                .from('levels')
                .insert(level);

            if (insertError) {
                console.error(`Error inserting Level ${list_order}:`, insertError.message);
            } else {
                console.log(`Inserted Level ${list_order}: ${level.title_en}`);
            }
        }
    }

    console.log('Sync completed!');
}

sync();
