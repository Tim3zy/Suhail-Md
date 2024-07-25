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

global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_41_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM5LFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDMzLFxuICAgICAgICAxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0LFxuICAgICAgICA2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICA5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICA5NixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtYcW8xc0xvOWtYVGRhQ1dIY2Z0ZUJNcjdsblZIcWVobkU4NzJCNEErRWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9CQVdfRDNKU3VxYVU4NlJqZlV0V3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTQzYmRjY2ItMGJiYy00ZDE0LTg1OGItYTkwMDBlZWE0Yjk1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDEyNCxcbiAgICAgIDYyLFxuICAgICAgMjAsXG4gICAgICAxNTYsXG4gICAgICAyMTcsXG4gICAgICAzMSxcbiAgICAgIDkyLFxuICAgICAgNTMsXG4gICAgICA2MCxcbiAgICAgIDEyMCxcbiAgICAgIDE4LFxuICAgICAgNjMsXG4gICAgICAxNTksXG4gICAgICA5MCxcbiAgICAgIDIxOCxcbiAgICAgIDE0NCxcbiAgICAgIDY3LFxuICAgICAgMjM0LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgOTksXG4gICAgICAyMTAsXG4gICAgICAxMyxcbiAgICAgIDEyLFxuICAgICAgNyxcbiAgICAgIDgzLFxuICAgICAgNDEsXG4gICAgICA2OSxcbiAgICAgIDIyNyxcbiAgICAgIDc5LFxuICAgICAgMTE1LFxuICAgICAgMjcsXG4gICAgICA0MCxcbiAgICAgIDE4OCxcbiAgICAgIDEzNCxcbiAgICAgIDE3NCxcbiAgICAgIDQzLFxuICAgICAgMjMzLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkcxTjkyODFRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTIyNDQ2NDEyOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzkyOTQ1MDU2MTE0OTE6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEdSOU8wRkVQM3dpclVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBZTZySXhLNXZoVFBTcy9DVGJYSm5WbVhhVzM1L3JYaE96Qng3Wkc5akJFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldEVEZVbVNlb2NTNUdRcHRMNkJCZ0haRkFBbWRCZHNHTy81WXFGOEY0QjZ5T0lIdmNDMExKWERTNytQN0VsUVBkVVlsR3ZRYXJXcnRxUmNUVTFwZkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlluNHpwOFFpejM1bmJvV3RjRUp6U1ljOUV3ZDFyRUZBWUdpbVUreTcvd3JmUWcrNUY0SEE0REllNXJMZkY1L2ZqanlJbnJqUElENnE5TURHZHpkbkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjI0NDY0MTI6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTQwMTAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2JXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPYlcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnMi9uT1Z4Rm50UjhGWlhiMFRGZFNmUEI2VVlUVnkzNTZ0endzbVF1bHdrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NzI2Njk2ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ="  // PUT your SESSION_ID 


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
