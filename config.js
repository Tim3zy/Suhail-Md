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

global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_48_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM1LFxuICAgICAgICA4NixcbiAgICAgICAgMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM3LFxuICAgICAgICA5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDI3LFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxODksXG4gICAgICAgIDU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MixcbiAgICAgICAgMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIklWc3ZoM0lHMkVYdnFGVW12VnpydlRGb2VKdlVJM3JiOGFXOFAyQmFvcXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm80RjNhRlctVDFDQm5jTHQ4M2xuYlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjNjOThjMWUtNDgzYy00ZDM0LWJhZWItODYxZmEzNDQ5OGRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDEwMixcbiAgICAgIDI0NyxcbiAgICAgIDkyLFxuICAgICAgMjIxLFxuICAgICAgMTA3LFxuICAgICAgOTcsXG4gICAgICA5NixcbiAgICAgIDM2LFxuICAgICAgMTcsXG4gICAgICAxOTcsXG4gICAgICAyMDAsXG4gICAgICAzMyxcbiAgICAgIDY3LFxuICAgICAgMTQ0LFxuICAgICAgMTc1LFxuICAgICAgOCxcbiAgICAgIDIyNyxcbiAgICAgIDEyOCxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAxNjEsXG4gICAgICA3NixcbiAgICAgIDE4MixcbiAgICAgIDMwLFxuICAgICAgODUsXG4gICAgICAyMDUsXG4gICAgICAyMixcbiAgICAgIDI0NCxcbiAgICAgIDEwOSxcbiAgICAgIDEyNyxcbiAgICAgIDI0NSxcbiAgICAgIDE0NSxcbiAgICAgIDIyOSxcbiAgICAgIDI4LFxuICAgICAgMTc5LFxuICAgICAgMzIsXG4gICAgICA0OCxcbiAgICAgIDIxMSxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZQjhHTlNYUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyMjQ0NjQxMjo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM5Mjk0NTA1NjExNDkxOjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wzMHVnWVEvN1cvdFFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieVlMcCt0MmQ1Wm41cnpNQ0N0YnM0QnZSNlNyR3pvMU8xVXUwRi9hU1lDUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpUStXb2N5eWVTUVFUQmZEcjBEcW50WWdscng4b1U1cTNudmJoSmlLdkVDbHFNQ3l0b1R4RkIxbEdEQUhSNkp1Y1g5b3dRZGdnVDdJR2ZhcFJQcE9EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyVDJnQm42eEZoOWxiY3Q1bFh5bkFOYVlOYnp4TldDRWUvSE5jMzRyNURRZG1Za1Z5RjlRZGdOU3IwdEtSTitTaEdtQURBc3R3VkhLdVpkSmMvTjJnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTIyNDQ2NDEyOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjgwMDg5OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
