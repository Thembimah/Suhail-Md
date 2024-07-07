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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27672416823";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_14_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk1LFxuICAgICAgICA4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDMwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNixcbiAgICAgICAgODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEzLFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMixcbiAgICAgICAgMTg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTc0LFxuICAgICAgICA1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMCxcbiAgICAgICAgNixcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTUyLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImV3WXN1b2tsVy9ib1dDb1VZU2l1Rk9CZWtrMWNzK3VTTStxZ0xUS1N5YlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkliMXFfeDl0UVY2eERWbGZSRk90MndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjYyN2JlYmItYWEyNC00MjIwLWI3YjEtZWFhMDM1NDhiZDhlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDI0NSxcbiAgICAgIDI5LFxuICAgICAgMjI1LFxuICAgICAgMTg3LFxuICAgICAgMTE5LFxuICAgICAgMTksXG4gICAgICAxNDEsXG4gICAgICAxNDksXG4gICAgICA0NCxcbiAgICAgIDIyNyxcbiAgICAgIDE2OSxcbiAgICAgIDE2NixcbiAgICAgIDExMyxcbiAgICAgIDIzNixcbiAgICAgIDEsXG4gICAgICAxMDcsXG4gICAgICA1OSxcbiAgICAgIDIzNyxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDE2MixcbiAgICAgIDEyMixcbiAgICAgIDExMSxcbiAgICAgIDIwNSxcbiAgICAgIDk0LFxuICAgICAgMjQwLFxuICAgICAgMTU2LFxuICAgICAgMTA2LFxuICAgICAgMTY1LFxuICAgICAgMTY1LFxuICAgICAgMTQ5LFxuICAgICAgMTQ5LFxuICAgICAgMyxcbiAgICAgIDE5OCxcbiAgICAgIDI5LFxuICAgICAgMTEzLFxuICAgICAgMjA0LFxuICAgICAgMTgzLFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxOODFCREM0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY3MjQxNjgyMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NDUxODExODg0MjQwNDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tiMmxZNEtFTGVLckxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQlV3d2E4NHBGd2RnQUdJbmh2Rm0rYW9DeTk0djRnemVLNjFmbFJHUWVqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4cnVMTDFtRUNaT3lCRFhsUXNtQUl5Q0FsMTRxRE40K3VLZWdSTFdqUU9tdXBHeU9nb2tiOGVuY0lJRzg3cTFiaVdkK2oyZDJPK3BySDlKOVloM1pnQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkeXk3WUlyWjd2aTUxdnBkSlRacENSb2JyQisxSjh4elpSNlB4K0ZIK2xGaTBaRDR0RkYzbUJudmE4cG56cldzZXVCcG00M0UyU1FLaVVlRkdlNGtpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzY3MjQxNjgyMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzODY4NzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
