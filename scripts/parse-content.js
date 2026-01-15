const fs = require('fs');
const path = require('path');

/**
 * Parses the human-friendly level content format.
 * Format:
 * LV[Number]. [Title EN] / [Title KO]
 * Description: [Desc EN] / [Desc KO]
 * 
 * [Set Number]. [Guide EN] / [Guide KO]
 * [Code line 1]
 * [Code line 2]
 */
function parseLevelFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    const levels = [];
    let currentLevel = null;
    let currentSet = null;
    let codeBuffer = [];

    const flushSet = () => {
        if (currentSet && codeBuffer.length > 0) {
            // Remove \r and normalize to \n, then trim trailing empty lines
            currentSet.code = codeBuffer.join('\n').replace(/\r/g, '').trim();
            currentLevel.target_code.push(currentSet);
        }
        currentSet = null;
        codeBuffer = [];
    };

    const flushLevel = () => {
        flushSet();
        if (currentLevel) {
            levels.push(currentLevel);
        }
        currentLevel = null;
    };

    let currentLanguage = 'python';
    let currentCourse = 'basic';
    let currentDifficulty = 'Basic';

    for (let line of lines) {
        const trimmed = line.trim();

        // Match Metadata Headers
        const langMatch = trimmed.match(/^Language:\s*(.+)$/i);
        if (langMatch) {
            currentLanguage = langMatch[1].toLowerCase();
            continue;
        }
        const courseMatch = trimmed.match(/^Course:\s*(.+)$/i);
        if (courseMatch) {
            currentCourse = courseMatch[1].toLowerCase();
            continue;
        }
        const diffMatch = trimmed.match(/^Difficulty:\s*(.+)$/i);
        if (diffMatch) {
            currentDifficulty = diffMatch[1];
            continue;
        }

        // Match Lv[N]. Title EN / Title KO
        const lvMatch = trimmed.match(/^Lv(\d+)\.\s*(.+?)\s*\/\s*(.+)$/i);
        if (lvMatch) {
            flushLevel();
            currentLevel = {
                list_order: parseInt(lvMatch[1]),
                title_en: lvMatch[2],
                title_ko: lvMatch[3],
                target_code: [],
                language: currentLanguage,
                course_id: currentCourse,
                difficulty: currentDifficulty
            };
            continue;
        }

        if (!currentLevel) continue;

        // Match Description: Desc KO / Desc EN
        const descMatch = trimmed.match(/^Description:\s*(.+?)\s*\/\s*(.+)$/i);
        if (descMatch) {
            currentLevel.desc_ko = descMatch[1];
            currentLevel.desc_en = descMatch[2];
            continue;
        }

        // Match [N]. Guide EN / Guide KO
        const setMatch = trimmed.match(/^(\d+)\.\s*(.+?)\s*\/\s*(.+)$/);
        if (setMatch) {
            flushSet();
            currentSet = {
                guide_en: setMatch[2],
                guide_ko: setMatch[3],
            };
            continue;
        }

        // Horizontal rule breaks levels
        if (trimmed === '---') {
            flushLevel();
            continue;
        }

        // Everything else in a set is code
        if (currentSet) {
            // Only add if not an empty line at the very beginning of the set
            if (trimmed !== '' || codeBuffer.length > 0) {
                codeBuffer.push(line);
            }
        }
    }

    flushLevel();
    return levels;
}

// Example usage to generate SEED_DATA
function generateSeedData() {
    const levelsDir = path.join(__dirname, '../docs/content/levels');
    const files = fs.readdirSync(levelsDir).filter(f => f.endsWith('.md'));

    let allLevels = [];
    for (const file of files) {
        const levels = parseLevelFile(path.join(levelsDir, file));
        allLevels = allLevels.concat(levels);
    }

    // Sort by list_order
    allLevels.sort((a, b) => a.list_order - b.list_order);

    // Output as JSON for sync script
    console.log(JSON.stringify(allLevels, null, 2));
}

if (require.main === module) {
    const args = process.argv.slice(2);
    if (args[0] === 'sync') {
        // Here we could directly integrate with supabase
        console.log('Syncing not yet implemented in this snippet');
    } else {
        generateSeedData();
    }
}

module.exports = { parseLevelFile };
