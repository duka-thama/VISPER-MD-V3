const { exec } = require('../lib');
const axios = require('axios');

exec({
    command: 'ip',
    react: '🌐',
    category: 'other',
    desc: 'Get the IP address of a domain (e.g. .ip zone.id)'
}, async (darknero, match, me, { from, text }) => {
    if (!text) return match.reply('🔍 Please enter a domain.\n\nExample: .ip zone.id');

    try {
        const apiUrl = `https://apis-sandarux.zone.id/api/tools/domain-to-ip?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);

        if (data?.status && data?.result) {
            match.reply(`🌐 *Domain:* ${text}\n📡 *IP:* ${data.result}`);
        } else {
            match.reply('⚠️ Unable to find IP for the provided domain.');
        }
    } catch (err) {
        console.error('IP Lookup Error:', err);
        match.reply('⚠️ An error occurred while fetching IP.');
    }
});