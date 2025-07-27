const { exec } = require('../lib');
const axios = require('axios');

exec({
    command: 'cal',
    react: '🧮',
    category: 'other',
    desc: 'Calculate an expression (e.g. 8-7)'
}, async (darknero, match, me, { from, text }) => {
    if (!text) return match.reply('🔍 Please provide a query.\n\nExample: .cal 8-7');

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/tools/calculate?expr=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (data?.success && typeof data.result !== "undefined") {
            match.reply(`🧮 *${data.expression}* = *${data.result}*`);
        } else {
            match.reply('⚠️ Failed to calculate the expression.');
        }
    } catch (err) {
        console.error('Calculation Error:', err);
        match.reply('⚠️ An error occurred while calculating.');
    }
});