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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_47_04_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDg1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIxLFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJucHJWbXNUSUJSNDQ2dnU3RnJyRU1lTDRmWGE5NU82a00rRXgrbWJtYU44PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnODZpYUNFVFNtaUNXMmhvVFBoWHBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjViOTgzNDUzLTMwYzUtNDYxNi1iZTlhLWU1MThlYWI2OTFhNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAxODAsXG4gICAgICAxODYsXG4gICAgICAyMDAsXG4gICAgICAxODQsXG4gICAgICAxODgsXG4gICAgICA1MixcbiAgICAgIDEwMixcbiAgICAgIDY1LFxuICAgICAgMzUsXG4gICAgICA4OSxcbiAgICAgIDI1NSxcbiAgICAgIDE2MSxcbiAgICAgIDM2LFxuICAgICAgMTU5LFxuICAgICAgMTI1LFxuICAgICAgMTE1LFxuICAgICAgOTMsXG4gICAgICAyMTUsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMTEyLFxuICAgICAgNDMsXG4gICAgICA0NixcbiAgICAgIDE1OSxcbiAgICAgIDMsXG4gICAgICAxODUsXG4gICAgICAyMyxcbiAgICAgIDg4LFxuICAgICAgODUsXG4gICAgICAyMjEsXG4gICAgICAyNDcsXG4gICAgICA0MixcbiAgICAgIDI0MCxcbiAgICAgIDksXG4gICAgICAxMzksXG4gICAgICAxNjgsXG4gICAgICAyMTEsXG4gICAgICAxMDksXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTRHNFJFRENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY0Nzk2NzUwOjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjAwMDAyMDczOTI5OTE6NjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXlrMGRzQkVPSDRyNzhHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJneno3WGVMelVBdDhDd0ZLSkYzcHF5d3Q5dnh1Z00wUjhPQTFUNGVZRDBrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5BRVdJaXpYS1IyczY5ejRXVm1xU2xIellXZVM2ZHMyMzJTSlZrT3ZRenVJZHk4OHB5dkFJbHFJS09Lb0pmaWpzL3BZV09PcU1QM2NoL2owSDI5aEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhNU2pHTE9DaUp6dW1BVmVzbmdzbmNteCtwbEg1dmlPTkxvNjNoMEhPZkhmS3NXdXh1a1puVFY4ZW1vczdSWkhuM3FaYjZKZjROdE1Zb3d6SDFMWGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY0Nzk2NzUwOjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MzUxODgyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBHTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEdNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQVdGd1JCd0U0RnppMW1EYWkrYTUvZUNKV3NXQktWT2EwakxNVGZWKzIvTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjA2MDgwMDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
