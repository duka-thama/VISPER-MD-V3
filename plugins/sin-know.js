const { exec } = require('../lib');
const axios = require('axios');

exec({
  command: 'know',
  react: '💡',
  category: 'convert',
  desc: 'Get a Did You Know fact and translate it to Sinhala'
}, async (darknero, match, me) => {
  try {
    // Step 1: Fetch English fact
    const factRes = await axios.get('https://home.lazacktech.biz.id/api/tahukahkamu');
    const englishFact = factRes.data?.result;

    if (!englishFact) return match.reply('❌ Failed to fetch fact.');

    // Step 2: Translate using your API
    const translateUrl = `https://home.lazacktech.biz.id/api/translate?text=${encodeURIComponent(englishFact)}&to=si`;
    const transRes = await axios.get(translateUrl);
    const sinhalaText = transRes.data?.translated_text;

    if (!sinhalaText) return match.reply('❌ Failed to translate the fact.');

    // Step 3: Send result
    await darknero.sendMessage(match.chat, {
      text: `💡${sinhalaText}`
    }, { quoted: match });

  } catch (err) {
    console.error(' ERROR:');
    match.reply('⚠️ Something went wrong while fetching or translating.');
  }
});