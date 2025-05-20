const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With Sani-X" 


global.devs = "Sani-X" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94710365812";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0710365812";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_51_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDcwLFxuICAgICAgICA5NixcbiAgICAgICAgMTU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICA3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1LFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMixcbiAgICAgICAgODcsXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldJUS9haGRQVmVZVTdVdEF0VVR2c3BqUFNpSi9kQlh4WUIvRU9rbE05RmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxvd1ItNGxMU0FTa1hsdTBUMjVKSkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWIxNDA2YmQtMzNmNC00NTRhLWFkYTQtMjEzOWNjZDVjMjc1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgODQsXG4gICAgICAxOTUsXG4gICAgICAxNzYsXG4gICAgICAxODQsXG4gICAgICA3MSxcbiAgICAgIDIwNCxcbiAgICAgIDIwNCxcbiAgICAgIDE1NCxcbiAgICAgIDEzMixcbiAgICAgIDE0MyxcbiAgICAgIDIzMSxcbiAgICAgIDc4LFxuICAgICAgMjMxLFxuICAgICAgMjA3LFxuICAgICAgMzMsXG4gICAgICAxNjIsXG4gICAgICAxMDAsXG4gICAgICAxMDYsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDEwOCxcbiAgICAgIDE0NSxcbiAgICAgIDE3NixcbiAgICAgIDE2LFxuICAgICAgMjEyLFxuICAgICAgNDAsXG4gICAgICAxNTQsXG4gICAgICAxNjAsXG4gICAgICAxODUsXG4gICAgICAxNDQsXG4gICAgICAxNTcsXG4gICAgICAxMjIsXG4gICAgICAyNDksXG4gICAgICAyMDMsXG4gICAgICAxNyxcbiAgICAgIDEwNyxcbiAgICAgIDE2MSxcbiAgICAgIDE4OSxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0krazBkc0JFSitoc2NFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ3p6N1hlTHpVQXQ4Q3dGS0pGM3BxeXd0OXZ4dWdNMFI4T0ExVDRlWUQwaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIK3JRUi84enFTdklHUjg1SlNiMG95U3ZSdk5nQVMvd3Q0MEdMYlQ4SFlWZy9tMUo1N0FYN3dWNTVzWWc3VXpzRUlpSTIxenpLdDQ5SmtZR1RFNllDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKZ25zMVU4MlRkRHpYZFJmZHJpZUtlVzNJNHJLT3BhSzY4dWJWTTdMWElzOW1HLzMzZGcyWlFQeUFhNGpPQTBLMFJpck5qTVdJQzFoZ0Z4VGxpNnFDUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY0Nzk2NzUwOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjAwMDAyMDczOTI5OTE6NjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NDc5Njc1MDo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDc3MzQ2OTFcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "```Sani-X```" , 
 
  author : process.env.PACK_AUTHER|| "SaNiYa",
  packname: process.env.PACK_NAME || "Sani-X",
  botname : process.env.BOT_NAME  || "Sani-X",
  ownername:process.env.OWNER_NAME|| "SaNiYa",


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
