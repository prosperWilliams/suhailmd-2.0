const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348156823750";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_45_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzLFxuICAgICAgICAxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcyLFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA4MixcbiAgICAgICAgMjAyLFxuICAgICAgICA2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MixcbiAgICAgICAgMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMzLFxuICAgICAgICA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCaGNRWnhCRi8wTnBUUWprTE9Zek5SQXNKNGV6OWNXT2RKbmE2U05QVllZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCMnNoY3RTeFNuT0o5VFdQY1I3ZlBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ2Yjc1Mjc4LTFlMjItNGU5Mi1iODcwLTE0NzU1ZjY2N2NhZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAzMyxcbiAgICAgIDEwMyxcbiAgICAgIDgsXG4gICAgICAxOTAsXG4gICAgICAyMTQsXG4gICAgICAzMyxcbiAgICAgIDEwNSxcbiAgICAgIDI3LFxuICAgICAgMTcyLFxuICAgICAgOTksXG4gICAgICA1NixcbiAgICAgIDk1LFxuICAgICAgOTAsXG4gICAgICA0OSxcbiAgICAgIDEzMCxcbiAgICAgIDU1LFxuICAgICAgMjQzLFxuICAgICAgNyxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDY0LFxuICAgICAgNixcbiAgICAgIDI0OSxcbiAgICAgIDE5NCxcbiAgICAgIDExOSxcbiAgICAgIDE2MCxcbiAgICAgIDE0NyxcbiAgICAgIDMwLFxuICAgICAgMTIzLFxuICAgICAgMjA1LFxuICAgICAgMzQsXG4gICAgICAxNDIsXG4gICAgICAxMzAsXG4gICAgICAyMzEsXG4gICAgICA3MSxcbiAgICAgIDI0MixcbiAgICAgIDkzLFxuICAgICAgMTIzLFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZLMjQ1NTc4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTU2ODIzNzUwOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT2tvbGkgcHJvc3BlclwiLFxuICAgIFwibGlkXCI6IFwiMzgxNTY3NTc5NDYzNzg6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTNPb1JVUXBPUE11UVlZRUNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpd2dRelJXYUFVQWdsbk9JQy9peU5ZOFpNaFpiWVowM2UvTWVCNldRZVJBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpma1lWTnJLaXZVeXNDZmFvV1kzd3FHWGk2M2ZZMzVlS3E2RnY0enl4MjVUekJ1U3dQVU01U3VQZTJKc29keGJKOWxVS002OUtaZVdrSkRYQW1laUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNFUGpINjlWZFZYSWFWdnBOUHU0SllUK2RhTnNPUWhlbERGNXRFYk5Od2VNMXhOekk2eWdiR0JGR0laTGtXL0NqKzlQakhEeXMzM0NIMGdNMXZHZGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTY4MjM3NTA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNDA4Mjk3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
