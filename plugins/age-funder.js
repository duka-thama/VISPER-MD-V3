const { exec } = require('../lib');

exec({
    command: 'age',
    react: '📅',
    category: 'other',
    desc: 'Calculate age from birthdate (YYYY-MM-DD)'
}, async (darknero, match, me, { from, text }) => {
    if (!text || !/^\d{4}-\d{2}-\d{2}$/.test(text.trim())) {
        return match.reply('📅 *Please enter your birthdate in format YYYY-MM-DD*\n\nExample: `.age 2000-08-15`');
    }

    const birthDate = new Date(text.trim());
    const currentDate = new Date();

    if (isNaN(birthDate)) return match.reply('❌ Invalid date. Please use format: YYYY-MM-DD');

    // Age calculation
    const ageInMilliseconds = currentDate - birthDate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;

    const years = Math.floor(ageInDays / 365);
    const months = Math.floor((ageInDays % 365) / 30);
    const days = Math.floor(ageInDays % 30);
    const hours = Math.floor(ageInHours % 24);
    const minutes = Math.floor(ageInMinutes % 60);
    const seconds = Math.floor(ageInSeconds % 60);

    const result = `
📅 *Your Age Details:*

• *Years:* ${years}
• *Months:* ${months}
• *Days:* ${days}
• *Hours:* ${hours}
• *Minutes:* ${minutes}
• *Seconds:* ${seconds}
`.trim();

    match.reply(result);
});