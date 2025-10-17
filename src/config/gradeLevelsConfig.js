// src/config/gradeLevelsConfig.js - Israeli Curriculum
/**
 * ✅ תצורת כיתות ונושאים - תכנית לימודים ישראלית
 */

const topicsByGrade = {
    '7': ['מספרים טבעיים ושלמים', 'חזקות ושורשים', 'ביטויים אלגבריים', 'משוואות פשוטות', 'אחוזים ויחסים', 'גאומטריה בסיסית'],
    '8': ['משוואות ואי-שוויונות', 'ביטויים אלגבריים מורכבים', 'פרופורציה ויחסים', 'דמיון ומשולשים', 'מעגל', 'גרפים של פונקציות'],
    '9': ['חזקות ושורשים ריבועיים', 'משוואות ריבועיות', 'גאומטריה מתקדמת', 'פונקציות קוויות וריבועיות', 'הסתברות'],
    '10-3': ['אלגברה בסיסית', 'משוואות ריבועיות', 'פונקציות', 'גאומטריה אנליטית', 'טריגונומטריה בסיסית'],
    '10-4': ['משוואות מעריכיות', 'פונקציות מעריכיות ולוגריתמיות', 'טריגונומטריה', 'גאומטריה אנליטית', 'סדרות'],
    '10-5': ['פונקציות מתקדמות', 'טריגונומטריה מתקדמת', 'גאומטריה אנליטית', 'סדרות', 'נגזרות בסיסיות'],
    '11-3': ['פונקציות ריבועיות ומעריכיות', 'בעיות קיצון', 'טריגונומטריה במרחב', 'הסתברות'],
    '11-4': ['חשבון דיפרנציאלי', 'פונקציות מעריכיות', 'גאומטריה במרחב', 'טריגונומטריה מתקדמת', 'הסתברות מותנית'],
    '11-5': ['חשבון דיפרנציאלי מתקדם', 'גאומטריה במרחב', 'פונקציות מתקדמות', 'טריגונומטריה במרחב', 'הסתברות בינומית'],
    '12-3': ['חזרה כללית', 'פונקציות מעריכיות בסיסיות', 'גרפים', 'הכנה לבגרות'],
    '12-4': ['אינטגרלים', 'נגזרות ואופטימיזציה', 'בעיות קיצון', 'הסתברות מתקדמת'],
    '12-5': ['אינטגרלים מתקדמים', 'אופטימיזציה', 'סדרות אינסופיות', 'הסתברות רציפה']
};

const topicIcons = {
    // Grade 7-9
    'מספרים טבעיים ושלמים': '🔢',
    'חזקות ושורשים': '📐',
    'ביטויים אלגבריים': '🧮',
    'משוואות פשוטות': '⚖️',
    'אחוזים ויחסים': '💯',
    'גאומטריה בסיסית': '📏',
    'משוואות ואי-שוויונות': '⚖️',
    'ביטויים אלגבריים מורכבים': '🧮',
    'פרופורציה ויחסים': '📊',
    'דמיון ומשולשים': '🔺',
    'מעגל': '⭕',
    'גרפים של פונקציות': '📈',
    'חזקות ושורשים ריבועיים': '√',
    'משוואות ריבועיות': 'x²',
    'גאומטריה מתקדמת': '📐',
    'פונקציות קוויות וריבועיות': '📈',
    'הסתברות': '🎲',

    // High School
    'אלגברה בסיסית': '🧮',
    'משוואות ריבועיות': 'x²',
    'פונקציות': '📈',
    'גאומטריה אנליטית': '📐',
    'טריגונומטריה בסיסית': '📐',
    'משוואות מעריכיות': 'eˣ',
    'פונקציות מעריכיות ולוגריתמיות': 'log',
    'טריגונומטריה': 'sin',
    'סדרות': '∑',
    'פונקציות מתקדמות': '∫',
    'טריגונומטריה מתקדמת': 'cos',
    'נגזרות בסיסיות': "f'",
    'פונקציות ריבועיות ומעריכיות': '📊',
    'בעיות קיצון': '⛰️',
    'טריגונומטריה במרחב': '🌐',
    'חשבון דיפרנציאלי': "∂",
    'גאומטריה במרחב': '📦',
    'הסתברות מותנית': 'P(A|B)',
    'חשבון דיפרנציאלי מתקדם': '∇',
    'הסתברות בינומית': '🎲',
    'חזרה כללית': '📚',
    'פונקציות מעריכיות בסיסיות': 'eˣ',
    'גרפים': '📈',
    'הכנה לבגרות': '🎓',
    'אינטגרלים': '∫',
    'נגזרות ואופטימיזציה': "f'",
    'אינטגרלים מתקדמים': '∫∫',
    'אופטימיזציה': '📊',
    'סדרות אינסופיות': '∞',
    'הסתברות רציפה': '📈'
};

// Question templates by topic
const topicTemplates = {
    'משוואות פשוטות': [
        { type: 'equation', difficulty: 'easy', maxCoef: 5 },
        { type: 'equation', difficulty: 'medium', maxCoef: 10 }
    ],
    'אחוזים ויחסים': [
        { type: 'percentage', difficulty: 'easy' }
    ],
    'משוואות ריבועיות': [
        { type: 'quadratic', difficulty: 'medium' }
    ],
    // Default template for all topics
    'default': [
        { type: 'equation', difficulty: 'easy', maxCoef: 10 }
    ]
};

/**
 * Get grade configuration for a student
 */
export const getGradeConfig = (nexonProfile) => {
    if (!nexonProfile || !nexonProfile.grade) {
        return null;
    }

    const grade = nexonProfile.grade;
    const track = nexonProfile.track;

    // Build grade key
    let gradeKey = grade;
    if (parseInt(grade) >= 10 && track) {
        const trackNum = track.includes('3') ? '3' : track.includes('4') ? '4' : track.includes('5') ? '5' : '';
        gradeKey = `${grade}-${trackNum}`;
    }

    const topics = topicsByGrade[gradeKey] || [];

    return {
        id: gradeKey,
        name: `כיתה ${grade}` + (track ? ` (${track})` : ''),
        emoji: grade === '7' ? '7️⃣' : grade === '8' ? '8️⃣' : grade === '9' ? '9️⃣' :
            grade === '10' ? '🔟' : grade === '11' ? '1️⃣1️⃣' : '1️⃣2️⃣',
        range: [1, 100],
        topics: topics.map(topicName => ({
            id: topicName.replace(/\s+/g, '-'),
            name: topicName,
            icon: topicIcons[topicName] || '📚',
            mastery: nexonProfile.topicMastery?.[topicName] || 'unknown',
            templates: topicTemplates[topicName] || topicTemplates.default
        }))
    };
};

/**
 * Get prioritized topics (weak topics first)
 */
export const getPrioritizedTopics = (nexonProfile) => {
    const gradeConfig = getGradeConfig(nexonProfile);
    if (!gradeConfig) return [];

    const topics = gradeConfig.topics;

    // Sort by mastery level: struggle -> needs-work -> good -> unknown
    const priorityOrder = { 'struggle': 0, 'needs-work': 1, 'unknown': 2, 'good': 3 };

    return topics.sort((a, b) => {
        const aPriority = priorityOrder[a.mastery] ?? 2;
        const bPriority = priorityOrder[b.mastery] ?? 2;
        return aPriority - bPriority;
    });
};

/**
 * Get all grades (for selection screen)
 */
export const getAllGrades = () => {
    return [
        { id: '7', name: 'כיתה ז׳', emoji: '7️⃣', range: [1, 100] },
        { id: '8', name: 'כיתה ח׳', emoji: '8️⃣', range: [1, 100] },
        { id: '9', name: 'כיתה ט׳', emoji: '9️⃣', range: [1, 100] },
        { id: '10', name: 'כיתה י׳', emoji: '🔟', range: [1, 100] },
        { id: '11', name: 'כיתה יא׳', emoji: '1️⃣1️⃣', range: [1, 100] },
        { id: '12', name: 'כיתה יב׳', emoji: '1️⃣2️⃣', range: [1, 100] }
    ];
};

/**
 * Get topics for a specific grade
 */
export const getTopicsForGrade = (gradeId) => {
    const topics = topicsByGrade[gradeId] || [];
    return topics.map(topicName => ({
        id: topicName.replace(/\s+/g, '-'),
        name: topicName,
        icon: topicIcons[topicName] || '📚',
        templates: topicTemplates[topicName] || topicTemplates.default
    }));
};

export default {
    getAllGrades,
    getTopicsForGrade,
    getGradeConfig,
    getPrioritizedTopics
};