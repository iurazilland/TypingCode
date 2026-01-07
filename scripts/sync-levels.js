require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const { SEED_DATA } = require('./python-seed');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase URL or Key in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
    console.log(`Starting to seed ${SEED_DATA.length} levels...`);

    for (const level of SEED_DATA) {
        const { id, ...dataToUpsert } = level;

        // Try to update first, if not found, it won't do anything (Supabase update is by filters)
        // But upsert with onConflict is better. If onConflict isn't working, let's try a simpler approach.
        // First, check if it exists:
        const { data: existing } = await supabase
            .from('levels')
            .select('id')
            .eq('language', level.language)
            .eq('course_id', level.course_id)
            .eq('list_order', level.list_order)
            .single();

        if (existing) {
            // Update
            const { error: updateError } = await supabase
                .from('levels')
                .update(dataToUpsert)
                .eq('id', existing.id);

            if (updateError) {
                console.error(`Error updating level ${level.list_order}:`, updateError.message);
            } else {
                console.log(`Updated list_order ${level.list_order}: ${level.title_en}`);
            }
        } else {
            // Insert
            const { error: insertError } = await supabase
                .from('levels')
                .insert(dataToUpsert);

            if (insertError) {
                console.error(`Error inserting level ${level.list_order}:`, insertError.message);
            } else {
                console.log(`Inserted list_order ${level.list_order}: ${level.title_en}`);
            }
        }
    }

    console.log('Seeding completed!');
}

seed();
