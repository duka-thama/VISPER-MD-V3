const { exec } = require('../lib');
const axios = require('axios');

exec({
  command: 'shorturl',
  react: '🔗',
  category: 'convert',
  desc: 'Shorten any URL using Bitly'
}, async (darknero, match, me, { from, text }) => {
  if (!text || !text.trim().startsWith('http')) {
    return match.reply('🔗 Please provide a valid URL.\n\nExample: .shorturl https://example.com');
  }

  try {
    const apiUrl = `https://api.vreden.my.id/api/tools/shortlink/bitly?url=${encodeURIComponent(text)}`;
    const { data } = await axios.get(apiUrl);

    if (data?.status === 200 && data.result) {
      const link = `> 🔗 *Shortened by Bitly:*\n\n${data.result}`;
      match.reply(link);
    } else {
      match.reply('⚠️ Could not shorten the URL. Try again.');
    }
  } catch (err) {
    console.error('ShortURL Error:', err);
    match.reply('⚠️ Failed to shorten the URL. Please try again later.');
  }
});