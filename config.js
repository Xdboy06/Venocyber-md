//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/915d08675cb62bf1eb1ca.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "263 78 962 2747";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhLUjlXaXd0dUEzRjBPZ3ZhT0lSU0lYZEZUZDBzbTlnbVJGL00rTVYwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzR1SVpINHFBU0FTaUZOTTdaOUJRZnE5WUQxNkNGWmxTU3g0U2c4RHdWND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpREhkNFdiSVVja0d1bkxYVDRBM1l3ZlIzMGRWcHB0YUdiYjNUNjlOUkU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaMUhpREJpdDNLQWZQS1BJZTFHNTkyOHg4YnRIMjBick5RUVpqMVJmbWdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNFcElZNVRzQkdnR21taVN1UG1vaTh5VTNGcTRMSkZrTWp3UFVpc0xCRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV4VmdscG5DeDR1cmMrTWVJNGQwNjF6b3N1VUVZK3JIdk44Wi9RWEhLRU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RBV1I3RFpRQTJrSzNkMXJTZ096NFoyaTJhSkhRTmFlU3hPYmJqUS8yRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmRqazd4RzZtdkNSVUtNSW83MVhsSGk2VUNMb2JIZzM3ZjB3aDhmV2Z4cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1ZbXZXZ0RHeUZQSkhkamVWQnh0QjJQek9LM2tyVWhuMEIyR2d1MU5hY1FaaUEwOTlyK0kreFZ5bDZYWUxWdWp6RmkwVnRBajJLeGVRNE9JZ1hpdWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJpcTJQTytzOVpwZExFQlk4eDVjL1dNOXhzdHJIOTFrMEFDN2NYSG5mQ1M0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2dDNneF81ZFJXR0phak92YjVxZ2lnIiwicGhvbmVJZCI6ImI0NDZlMDg2LTQ3M2YtNDFiZC05ODE0LTQyZWU5ZTc5ZjhiNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXemc2ZFRBR0c5WlV6VFQwNEtKMHk3YStlSG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5WQmhtcFFlSVl5eTU0Q0lFSTlzcEZvSTRvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFYWEVQWUZMIiwibWUiOnsiaWQiOiIyNjM3ODk2MjI3NDc6NTBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0puZStiSUJFTy91MnJNR0dCRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBFVVBOWEJJOW5xQld6M3A4bkpYNE1QRmFZQSs1UGdldVh0Wk1XNmJIQmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJqMGpta0g3ejNBc0IydFordytISitpaldpbGR3THAxTnBvZ2JSdGFuNy9CMVhtZGFoMzByblQwOS9JRUg2djA0M05ab0d0UTYxNHFoeE1YMEU3U0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSMUs5cnVEa3VJcFluV1hRMURJUVRsam9oS0l5TUxkN3dKRytuYlJ1aW9SWVdGQXRGbzhLTHFva2VsTHBxQXVKaE84ajgzajFNSDhTRGt3SmgzQkpnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4OTYyMjc0Nzo1MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUeEZEelZ3U1BaNmdWczk2Zkp5VitERHhXbUFQdVQ0SHJsN1dURnVteHdYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5MDU2MjUzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5lSCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝘨𝘳𝘦𝘢𝘵 𝘥𝘢𝘺 | ✪⏤͟͞★⃝ꪶ‎𝑊𝞓𝙏𝙎𝞗𝞜-𝞦𝘿𖥘✪͜͡➺",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "✪⏤͟͞★⃝ꪶ‎𝑊𝞓𝙏𝙎𝞗𝞜-𝞦𝘿𖥘✪͜͡➺",
  ownername: process.env.OWNER_NAME || "✪⏤͟͞★⃝ꪶ‎𝑊𝞓𝙏𝙎𝞗𝞜-𝞦𝘿𖥘✪͜͡➺",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
