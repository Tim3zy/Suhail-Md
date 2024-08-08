const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '2348122446412') : "2348122446412";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '2348122446412') : "2348122446412";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 6
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348122446412";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348122446412";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348122446412,2348122446412";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_12_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICA2MyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjExLFxuICAgICAgICA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3LFxuICAgICAgICA5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlnSUF6NmFzT1dqeHNjWG5Ca2RRQmFoQ0lnNlAzazR3NUc5cHEyam9JVUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEyMjQ0NjQxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0I2QzE3MjM5Qjc2MTE2OTM1M0IwMDc2NkVFQzQ4OEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMTU1MTQ2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJETDBKMk1PUXg2UGxGVTVhd1Y3YWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWE4ODY0ODYtZjM5MS00NDU2LWJjZTctYTBlYmEwNjE2YmNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDU4LFxuICAgICAgMjYsXG4gICAgICAxNjYsXG4gICAgICAyMTgsXG4gICAgICAyMTcsXG4gICAgICAxMjgsXG4gICAgICAyNDgsXG4gICAgICA2MixcbiAgICAgIDIwLFxuICAgICAgNTUsXG4gICAgICAyMSxcbiAgICAgIDE3NixcbiAgICAgIDE4NSxcbiAgICAgIDE1MyxcbiAgICAgIDEyMCxcbiAgICAgIDk4LFxuICAgICAgOTAsXG4gICAgICA5MSxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDI0LFxuICAgICAgODQsXG4gICAgICAyMzksXG4gICAgICAyNDIsXG4gICAgICAxNTEsXG4gICAgICA2OSxcbiAgICAgIDI3LFxuICAgICAgMTU4LFxuICAgICAgMTQyLFxuICAgICAgMTExLFxuICAgICAgMjA3LFxuICAgICAgMTU2LFxuICAgICAgMTgsXG4gICAgICAyMDksXG4gICAgICAyNCxcbiAgICAgIDE1OSxcbiAgICAgIDg0LFxuICAgICAgMTM1LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1cxSDlSQjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjI0NDY0MTI6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzOTI5NDUwNTYxMTQ5MTo0NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRDhySTBIRUw2RjFiVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVheS85ZHVYTFF1U0I4RUVVNVUyS1BEUlZMUVlRWjVNMDFhZTM0VGpOaGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ3hEN1E3YTBSOWFtb2VrQ0tJNmhnbkJ3RUhneGdmRnBmczZmMndmeUlnbjkyTDVqbW9vYkc0MGNSbG51Z3M2cU8wa29ESk5OQkhDei9VcGtJNk1VQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidWcvbEt4eFBOaUhTUWREem81Wm5KeU56MVRQWDBNd3ZwTzRqOXpKamJFeC9oTTBYNXpoV0JiUlFndWpibVV4ZXRYTElYcEI5YnVzWFVpRE9qeDJpaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyMjQ0NjQxMjo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMTU1MTM4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWxBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFbEEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2UjM0WkV1K0hSdkxNRHFTdEppTi9pOWdxZ1YvOWp1Vm5hYzdxRzljU0FvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MDcwNDgwNDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzExNDAxNzA3OVwifSIKfQ="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "TimmyFk👌🤧",
  packname: process.env.PACK_NAME || "TimmyFk👌🤧",
  botname : process.env.BOT_NAME  || "TIMMY-FK👌🤧",
  ownername:process.env.OWNER_NAME|| "TimmyFk👌🤧",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
