const { exec } = require('../lib');
const axios = require('axios');

exec({
  command: 'fetch',
  react: '📡',
  category: 'other',
  desc: 'Fetch and show full JSON result from any API'
}, async (darknero, match, me, { text }) => {
  if (!text || !text.startsWith('http')) {
    return match.reply('❗ Please provide a valid API URL.\n\nExample:\n.fetch https://home.lazacktech.biz.id/api/tahukahkamu');
  }

  try {
    const res = await axios.get(text);
    const json = res.data;

    let formatted = '📦 *API Response:*\n\n';
    formatted += '```json\n' + JSON.stringify(json, null, 2).slice(0, 3000) + '\n```';

    await darknero.sendMessage(match.chat, {
      text: formatted
    }, { quoted: match });

  } catch (err) {
    console.error('[FETCH ERROR]', err);
    match.reply('❌ Failed to fetch data from the API.');
  }
});