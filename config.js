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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '2348122446412') : "923184474176";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348122446412,2348122446412";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348122446412,2348122446412";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,2348122446412";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_03_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMjM3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDY0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQzLFxuICAgICAgICA0NSxcbiAgICAgICAgNixcbiAgICAgICAgMCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgODQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnb3R4Q2VIb2htOUNjSS9ZOXpxVUVPQ3BDK0RRZ1NxUWUwTmJaUW9IZUZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWVmhhU2Zyb1FISzh3ZXhfWWYxd2pRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRlYzk0OTA1LTdjOTktNDA3OS04OGUzLWM1NDNiMzA5ZjRkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICAxMDcsXG4gICAgICAyNTQsXG4gICAgICAxMzksXG4gICAgICAxNixcbiAgICAgIDMzLFxuICAgICAgMjMyLFxuICAgICAgMjA3LFxuICAgICAgNzgsXG4gICAgICAyMzIsXG4gICAgICA0OCxcbiAgICAgIDg1LFxuICAgICAgMTUyLFxuICAgICAgNTUsXG4gICAgICAxMjEsXG4gICAgICA3NixcbiAgICAgIDMxLFxuICAgICAgMTg0LFxuICAgICAgMTczLFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDEwMyxcbiAgICAgIDE3NSxcbiAgICAgIDI4LFxuICAgICAgMTIsXG4gICAgICAxMTEsXG4gICAgICAyMDAsXG4gICAgICA1NSxcbiAgICAgIDEyOSxcbiAgICAgIDY0LFxuICAgICAgMTg1LFxuICAgICAgMjA4LFxuICAgICAgNjcsXG4gICAgICAxNDcsXG4gICAgICAxMDgsXG4gICAgICAxOTQsXG4gICAgICA2MyxcbiAgICAgIDIzMCxcbiAgICAgIDIyMCxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDNkpLVzY1NVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyMjQ0NjQxMjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM5Mjk0NTA1NjExNDkxOjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BHUjlPMEZFS1M4aGJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQWU2ckl4SzV2aFRQU3MvQ1RiWEpuVm1YYVczNS9yWGhPekJ4N1pHOWpCRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvOG56TUxjTU9HTXhjTDIwRkYySTllcDEvNGZxNjNPb2JXa1E2TGVDbk02VVBuYnhEd2pDSHhzZkl0ZlBYbnlhc1ZIKzZpK0ZPY0JVZ2VsNElwZjREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpY0ZoMHFaR3RrRG5LTjNJNHEraVM0Rjd1UUtjWExRQjRIb3lhenhNWjJnZUUxRjREOE5FUEozNDc5L2NOV2hRYTExZ1BHeWw5S2wxcUQrWDF3ZU9DZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTIyNDQ2NDEyOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTg1MTQzMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "TIMMYFK",
  packname: process.env.PACK_NAME || "TIMMY-FK",
  botname : process.env.BOT_NAME  || "TIMMY-FK",
  ownername:process.env.OWNER_NAME|| "Timmyfk",


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
