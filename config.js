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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,2348122446412";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_57_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc2LFxuICAgICAgICA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDgwLFxuICAgICAgICA4MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgODcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRPcTY2dlpORUZ3Vll0YkYyZlhYcW51QVZJMmhUaVF2UFlOUkZrVFJWbm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpELUt2T2kzVGhHTTQ3azV3ZE96QlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTYyZjc4NTYtODZhMS00MmI2LTk2MDctMTk4OGM2NDljZDA3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMTcsXG4gICAgICAyMyxcbiAgICAgIDc1LFxuICAgICAgMjUwLFxuICAgICAgMTUxLFxuICAgICAgMjAwLFxuICAgICAgMTQ4LFxuICAgICAgMTc4LFxuICAgICAgMTQ3LFxuICAgICAgMTUzLFxuICAgICAgNTQsXG4gICAgICAzMSxcbiAgICAgIDI0OCxcbiAgICAgIDI0OCxcbiAgICAgIDEwNSxcbiAgICAgIDI1MCxcbiAgICAgIDYyLFxuICAgICAgMTE1LFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDE4MixcbiAgICAgIDE2MyxcbiAgICAgIDE0NixcbiAgICAgIDIxNCxcbiAgICAgIDEzLFxuICAgICAgMTU0LFxuICAgICAgMTQxLFxuICAgICAgMTQ2LFxuICAgICAgMTU2LFxuICAgICAgMTg2LFxuICAgICAgMjMyLFxuICAgICAgMjQzLFxuICAgICAgMTAxLFxuICAgICAgMzMsXG4gICAgICA1OSxcbiAgICAgIDE3OSxcbiAgICAgIDEwMCxcbiAgICAgIDMyLFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0tRNUg4S0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjI0NDY0MTI6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzOTI5NDUwNTYxMTQ5MTozM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQV1hrSVlGRU5yNTRyUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImR6UDdMK3ltTVQ5U2VMSVEzaVNFamxxT3ZBQWhUZVJwdDAzOXc1eEVzRWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSG1NR1M2cm9PS1NiS0J4VEpMWDN3blJyTWNRSFFzK1BGbkhndENOaC9PTVhjUVJhRnVHODFOYkVDVWd3RzNwOERidlcrem1UZXVBTjBDZENQWXdRQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYTlRNnAvSVlCSnVKbmdjS2h5ZlNrRERRR0p6RHE1dkV6ZktYckFUT1lsZ1NybnZqVkNOUmZ5VXVzMGhGSVpFMk16VE9Icms4aUlOajFrTmZrWEVJQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyMjQ0NjQxMjozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI4NTg1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1hd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWF3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVlVYWjIzam1xWFdkaXpDMm5Wa004bWNDWFlHQkNGcUtJVXBaUGpSV0lwcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzU1MDI1Mzk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
