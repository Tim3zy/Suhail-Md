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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348122446412";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348122446412";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,2348122446412";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_40_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDc1LFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA5LFxuICAgICAgICAzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NixcbiAgICAgICAgNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICA1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDkwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDksXG4gICAgICAgIDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NCxcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODgsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgMTczLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtSkQ3c2tXK3o4QWFwNnVReG0yVnVxd3pqV0Erbnk4YzBnRTNmbm9JNWg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSR25GY1hwOVJuNlYyR0Q3QlR3eF93XCIsXG4gIFwicGhvbmVJZFwiOiBcImI4ZWQxZmRlLTBkY2QtNGM2Yi1hOWRhLWUxMzA1NDM4OTllNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDI1MCxcbiAgICAgIDIzOSxcbiAgICAgIDIwNixcbiAgICAgIDI0MSxcbiAgICAgIDE0NixcbiAgICAgIDE0OSxcbiAgICAgIDEwMCxcbiAgICAgIDY3LFxuICAgICAgMCxcbiAgICAgIDY3LFxuICAgICAgMTIwLFxuICAgICAgOTIsXG4gICAgICAxNzksXG4gICAgICA0OSxcbiAgICAgIDExMyxcbiAgICAgIDE3OCxcbiAgICAgIDUsXG4gICAgICA3NyxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDEzMyxcbiAgICAgIDE4MCxcbiAgICAgIDExMSxcbiAgICAgIDIzNixcbiAgICAgIDkwLFxuICAgICAgODAsXG4gICAgICAxMTIsXG4gICAgICAyMDcsXG4gICAgICAxMjUsXG4gICAgICAyMjcsXG4gICAgICAxNTIsXG4gICAgICAxOTQsXG4gICAgICA3MyxcbiAgICAgIDk5LFxuICAgICAgMTY2LFxuICAgICAgMjMxLFxuICAgICAgMjA1LFxuICAgICAgNjgsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVhaOFozSFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjI0NDY0MTI6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzOTI5NDUwNTYxMTQ5MTozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQV1hrSVlGRUxMWTRMUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImR6UDdMK3ltTVQ5U2VMSVEzaVNFamxxT3ZBQWhUZVJwdDAzOXc1eEVzRWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSlpqRUg4d3hFakpuQThLYXAra1RBbVduNXFkVmxjMFg4MVAwOGdTK1pWR1B0YmhCOXB6NjdCRHF6YVZyWHNNb0s5REZMeEFVYzRCNWVuTThWQzJvRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidHpZaVRMMkZtdjQzSmNiSFNYcDNtNlVKRGhwOWRhZXlVV1ZGTFpsRnJpODNEQU5GOE9pMGg3VFJRRlhNWWZmL3JiUGlKMDhjQTBEUkFDdXJ5aWdBaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyMjQ0NjQxMjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI0ODgyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1hd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWF3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVlVYWjIzam1xWFdkaXpDMm5Wa004bWNDWFlHQkNGcUtJVXBaUGpSV0lwcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzU1MDI1Mzk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "TimmyFk",
  packname: process.env.PACK_NAME || "TimmyFk",
  botname : process.env.BOT_NAME  || "TIMMY-FK",
  ownername:process.env.OWNER_NAME|| "TimmyFk",


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
