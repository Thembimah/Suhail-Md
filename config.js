const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+27672416823";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_19_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICA4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc1LFxuICAgICAgICA4MixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNSxcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQyLFxuICAgICAgICA1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyLFxuICAgICAgICAxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICA3MSxcbiAgICAgICAgODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9ZZVZmRm1FeE9oSUxDNXJhZ1FYUnAzUXkvLy9vWC9Ndy9ENGtMZ1ZKdW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpYdmIxY0cyVFRlVVdoNFRQV2ZualFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTYwZTA5MWUtYmEyYS00MTgyLWI1MDctYjM2YmZjYjA0Yzk3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDE0NixcbiAgICAgIDE3NCxcbiAgICAgIDIyNSxcbiAgICAgIDE0OCxcbiAgICAgIDQ2LFxuICAgICAgMTY4LFxuICAgICAgODQsXG4gICAgICAxMjAsXG4gICAgICAyMjgsXG4gICAgICAxNzgsXG4gICAgICAxNjgsXG4gICAgICA1MCxcbiAgICAgIDg2LFxuICAgICAgMjIzLFxuICAgICAgMjgsXG4gICAgICAxOTcsXG4gICAgICA2MSxcbiAgICAgIDI1MixcbiAgICAgIDI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDIwMSxcbiAgICAgIDE3OCxcbiAgICAgIDIyNSxcbiAgICAgIDE1MyxcbiAgICAgIDMsXG4gICAgICA2NSxcbiAgICAgIDEwOSxcbiAgICAgIDIxMixcbiAgICAgIDEwMixcbiAgICAgIDM2LFxuICAgICAgMzgsXG4gICAgICA2MixcbiAgICAgIDQwLFxuICAgICAgMTM1LFxuICAgICAgMTQ5LFxuICAgICAgMjMsXG4gICAgICAzMyxcbiAgICAgIDE3OSxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ5VjU4Vk01XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY3MjQxNjgyMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NDUxODExODg0MjQwNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tUNWdKZ0JFTkdRZ3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSXZCeGZud0IxcUJQN2IxRjN4SXVIT0NSekYwOHBBdFkxQUlrQURlb3AzYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTb1VKT05tbmtYcDFCdmNsdnk3UVdzTThnUUNzUEREb2U0ZkxPdERUdC9TMzlYS1lrUCsraDM3T1lBRGd4REZlaTF6dDNVRUJtd3hpcjZqYXRRRk1EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxTWlPMzdVaTdJM0w4ZDI3M3Y2dVV2NkJSSGRmd0ZvcEJaZUh2U0MxaTVJT0R1dklkMzNQUTFVaGc3Ynptb1lwZWxPV0pvcmRSdkMvNnBjdm5sdldCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzY3MjQxNjgyMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk2OTk1NDBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
