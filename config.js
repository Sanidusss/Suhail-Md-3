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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_52_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI5LFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MyxcbiAgICAgICAgNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDczLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyLFxuICAgICAgICA1MixcbiAgICAgICAgMTMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcwLFxuICAgICAgICA3MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDQ1LFxuICAgICAgICA3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQwLFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhiZGNuWU84Mkg3dVhGUmQ2WVF2Q3F6VEZZK09GTzJDK0hUOTBsOUZORVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllQbDhKTG04VGN5cEpXamhkRGxadHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjBhZDJmNjQtNmE3MC00NzM4LTlhMjgtMGJhNDI0MWNjMTY4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAyMzQsXG4gICAgICAyMDQsXG4gICAgICAyNTIsXG4gICAgICA3NSxcbiAgICAgIDM1LFxuICAgICAgMTkwLFxuICAgICAgMTA4LFxuICAgICAgMzMsXG4gICAgICAyNDIsXG4gICAgICAxNjIsXG4gICAgICA0NyxcbiAgICAgIDI0OCxcbiAgICAgIDgsXG4gICAgICAxODksXG4gICAgICA2MSxcbiAgICAgIDEyNyxcbiAgICAgIDE4MSxcbiAgICAgIDIxMyxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAxNTAsXG4gICAgICA1MCxcbiAgICAgIDE5LFxuICAgICAgOTEsXG4gICAgICAyMTIsXG4gICAgICAzMyxcbiAgICAgIDE2NyxcbiAgICAgIDEwLFxuICAgICAgNyxcbiAgICAgIDYyLFxuICAgICAgMjIsXG4gICAgICAyMjAsXG4gICAgICA5NyxcbiAgICAgIDgzLFxuICAgICAgNSxcbiAgICAgIDExOSxcbiAgICAgIDExMyxcbiAgICAgIDQzLFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNDWjlaV1FXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NDc5Njc1MDo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYwMDAwMjA3MzkyOTkxOjY1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l5azBkc0JFTGZsK01BR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ3p6N1hlTHpVQXQ4Q3dGS0pGM3BxeXd0OXZ4dWdNMFI4T0ExVDRlWUQwaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVdldXb29kYStXb1RVdzBQbkJNTm41QnJ1d3dZRWg3eGlJY1ppME9PejJvWTlDNVdOWDM2YUJuaTB3QS9INkpObC82aFpZZWZsc1ZzRk5qMTY5dVBCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwYXoxQnhNdzdwUkp5RkNiVERJRVh0Uy9YRjVmVFJickZBZ3VUbUhRemwwa1ltdmNnSjQ4ZzhGSTZJVVExL05CMjUwbmZsYXBjR1BZR2pYMjhzZHFDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NDc5Njc1MDo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY4MDk1MzBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9p"  // PUT your SESSION_ID 


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
