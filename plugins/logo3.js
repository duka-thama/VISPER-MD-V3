const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const effects = ["sweetheart", "flutter", "pinkglow", "volcano", "petalprint", "giftwrap", "mrfrosty", "littlehelper", "sprinklesparkle", "seasonsgreetings", "heartbeat", "valentine", "sapphireheart", "signature", "lollipop", "handbag", "tiptoe", "sketchy", "ghostship", "oldenglish", "dragonscale", "magicdust", "substance", "piratescove", "backstreet", "funkyzeit", "airman", "foolsgold", "zephyr", "paintbrush", "lokum", "insignia", "cottoncandy", "fairygarden", "neonlights", "glowstick", "lavender", "ohhai", "bluegecko", "moderno", "petalprint", "rhizome", "devana", "cupcake", "fame", "ionize", "volcano", "broadway", "sweetheart", "starshine", "flowerpower", "gobstopper", "discodiva", "medieval", "fruityfresh", "letterboard", "greenstone", "alieninvasion", "pinkglow", "pinkcandy", "losttales", "glowtxt", "purple", "yourstruly", "electricblue", "greek", "cyrillic", "cyrillic2", "cyrillic3", "korean", "arabic", "arabic2", "arabic3", "hindi", "chinese", "japanese", "hebrew", "hebrew2", "hebrew3", "ethiopic", "ethiopic2", "ethiopic3", "vietnamese", "icelandic", "bengali", "yoruba", "igbo", "armenian", "armenian2", "georgian", "georgian2", "thai", "euro", "euro2", "euro3", "allstars", "dearest", "metropol", "ransom", "bronco", "platformtwo", "fictional", "typeface", "stardate", "beachfront", "arthouse", "sterling", "jukebox", "bubbles", "invitation", "frontier", "surprise", "firstedition", "republika", "jumble", "warehouse", "orientexpress", "orbitron", "starlight", "jet", "tamil", "kannada", "telugu", "punjabi", "malayalam", "odia", "thai2", "thai3", "thai4", "hindi2", "hindi3", "hindi4", "hindi5", "hindi6", "hindi7", "hindi8", "euro4", "arabic4", "arabic5", "arabic6", "hebrew4", "hebrew5", "hebrew6", "cyrillic4", "japanese2", "japanese3", "japanese4", "japanese5", "japanese6", "japanese7", "japanese8", "japanese9", "japanese10", "japanese11", "japanese12", "japanese13", "chinese_tc"];
const _0x2e1464 = {
  pattern: "logo5",
  alias: ["lo3"],
  use: ".logo2",
  react: "🎯",
  desc: "Search and DOWNLOAD VIDEOS from xvideos.",
  category: "logo",
  filename: __filename
};
cmd(_0x2e1464, async (_0x45559c, _0x349626, _0x6ea1ae, {
  from: _0x47a929,
  prefix: _0x1db14c,
  l: _0x466a93,
  quoted: _0x584e60,
  body: _0x20aaaf,
  isCmd: _0x273d44,
  command: _0x32157b,
  args: _0x2af579,
  q: _0x5ec991,
  isGroup: _0x24bffd,
  sender: _0x4cf319,
  senderNumber: _0x48c200,
  botNumber2: _0x5e86bf,
  botNumber: _0x1727d8,
  pushname: _0x5c1360,
  isMe: _0x56fe50,
  isOwner: _0x1fafa6,
  groupMetadata: _0x4ef1b4,
  participants: _0x2a676d,
  groupAdmins: _0x35d34e,
  isBotAdmins: _0x1581eb,
  isAdmins: _0x718976,
  reply: _0x40ba2b
}) => {
  const _0x42ae28 = {
    YjDbC: function (_0x299a2e, _0x34255e) {
      return _0x299a2e < _0x34255e;
    }
  };
  _0x42ae28.QmJdv = function (_0x2dfcb7, _0x301415) {
    return _0x2dfcb7 + _0x301415;
  };
  _0x42ae28.MTCzR = function (_0x49506a, _0x48a371) {
    return _0x49506a + _0x48a371;
  };
  _0x42ae28.MKTvm = "*[Result from logo2.com]*";
  _0x42ae28.SbQpk = "https://files.catbox.moe/0ldcuy.jpg";
  _0x42ae28.OKhaK = "*`🎯NADEEN-MD🎯`*";
  _0x42ae28.xLgch = "*🔢 Reply below number*\n";
  try {
    var _0x48fab1 = [];
    for (var _0x33ccc1 = 0; _0x33ccc1 < effects.length; _0x33ccc1++) {
      _0x48fab1.push({
        "title": _0x42ae28.QmJdv(_0x33ccc1, 1),
        "description": _0x42ae28.MTCzR('' + effects[_0x33ccc1], "\n"),
        "rowId": _0x1db14c + "ssdl " + effects[_0x33ccc1] + " & " + _0x5ec991
      });
    }
    const _0x55ccf5 = [{
      "title": _0x42ae28.QmJdv(_0x42ae28.MKTvm, "\n"),
      "rows": _0x48fab1
    }];
    const _0x49fc36 = {
      image: _0x42ae28.SbQpk,
      text: "*NADEEN MD LOGO*",
      footer: _0x42ae28.OKhaK,
      buttonText: _0x42ae28.xLgch,
      sections: _0x55ccf5
    };
    const _0x1be596 = {
      quoted: _0x349626
    };
    return await _0x45559c.replyList(_0x47a929, _0x49fc36, _0x1be596);
  } catch (_0x566e9d) {
    console.log(_0x566e9d);
    const _0x5e1410 = {
      text: _0x566e9d
    };
    const _0xf9685d = {
      quoted: _0x349626
    };
    await _0x45559c.sendMessage(_0x47a929, _0x5e1410, _0xf9685d);
  }
});
const _0x1ba684 = {
  pattern: "ssdl",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x1ba684, async (_0x46007d, _0x330823, _0x26926c, {
  from: _0x12114f,
  l: _0x307f26,
  quoted: _0x238c05,
  body: _0x57c6a4,
  isCmd: _0x4b58c6,
  command: _0x5e9089,
  args: _0x5a5eef,
  q: _0x3d8243,
  isGroup: _0x2e78ea,
  sender: _0x1c12f8,
  senderNumber: _0x2eada9,
  botNumber2: _0x2eb5eb,
  botNumber: _0x46dd5c,
  pushname: _0x1d23e3,
  isMe: _0x33f099,
  isOwner: _0x1fa50a,
  groupMetadata: _0x33c2fd,
  groupName: _0x43ccee,
  participants: _0x2f70e1,
  groupAdmins: _0x13ef49,
  isBotAdmins: _0x2b6344,
  isAdmins: _0x27a105,
  reply: _0x3cc9ec
}) => {
  try {
    const _0x45d84f = {
      text: "📥",
      key: _0x330823.key
    };
    const _0xe75610 = {
      react: _0x45d84f
    };
    await _0x46007d.sendMessage(_0x12114f, _0xe75610);
    const _0x35b163 = _0x3d8243.split(" & ")[0];
    const _0x1d0a4a = _0x3d8243.split(" & ")[1];
    const _0x58d337 = await createGlowText(_0x35b163, _0x1d0a4a);
    const _0x2f4ae5 = {
      url: _0x58d337
    };
    const _0x365026 = {
      image: _0x2f4ae5,
      caption: "*`🎯NADEEN-MD🎯`*"
    };
    const _0x3f28d4 = {
      quoted: _0x330823
    };
    _0x46007d.sendMessage(_0x12114f, _0x365026, _0x3f28d4);
  } catch (_0x2572e2) {
    _0x3cc9ec(_0x2572e2);
    console.log(_0x2572e2);
  }
});
cmd(
  {
 pattern: "funemoji",
  alias: ["emojianime"],
  use: ".logo2",
  react: "😁",
  desc: "fun emoji animation",
  category: "other",
  filename: __filename
  },
 async (_0x253ffc, _0x3e7f9b, _0x2297c2, {
  from: _0x41f386,
  q: _0x593742,
  sender: _0x11c449,
  reply: _0x4d903d
}) => {
  try {
    var _0x4bd72d = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚", "😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😶‍🌫️", "😏", "😒", "🙄", "😬", "😮‍💨", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "😵‍💫", "🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"];
    const _0x4720d9 = {
      text: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙽𝙰𝙳𝙴𝙴𝙽 〽️𝙳*"
    };
    const _0x403e73 = {
      quoted: _0x3e7f9b
    };
    let {
      key: _0x7116c1
    } = await _0x253ffc.sendMessage(_0x41f386, _0x4720d9, _0x403e73);
    for (let _0x1e6324 = 0; _0x1e6324 < _0x4bd72d.length; _0x1e6324++) {
      await new Promise(_0x4b63be => setTimeout(_0x4b63be, 1000));
      const _0x56ba36 = {
        text: _0x4bd72d[_0x1e6324],
        edit: _0x7116c1
      };
      await _0x253ffc.sendMessage(_0x41f386, _0x56ba36);
    }
  } catch (_0x57cfb0) {
    _0x4d903d("❗ Error: " + _0x57cfb0);
  }
});
