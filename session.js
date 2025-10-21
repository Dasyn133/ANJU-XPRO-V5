//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xQbC95QktmVElUczdLNDNzQ0NhTW5WVDBWQnl0RHRtMG1qYmtsSDRWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3pmQkhvbkFGM0o4eWJKdHNYTGZsQktncURJN2txL0tUS0xHVWZLcnNqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDUERHdUwrYTcyZlZmcXRKeldjQUJ5RnZxUnVvRWdWTzJxbWpwdWFoTDBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6UGxnaTZtcnRrWGJxVXRsWGk0T2lMdzFJbkpBMm1CZUxBQStqZHltOFhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDSWxmUmJHcjFJUHlJR2h0NFp6SHZJUGhacUdyd05kY2VCa05KR0FlVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIzcEJJU1AvWFh4clJJWVVYaDNJL2NiNVBOMG11OUorVVBvMVNENXZ3Z2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0s5MkduWHo4dmhhdTlZRm5zTmJuUjlWNDBCMlFKNld4QjI4RElBenIxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3NDM3BtclVxMHRjK1FyNTAwRXc1bXRrTnZIT0Nxc3dSbnhIdndXYzhrdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVrdklPQWIxS1d4WXhuNmV4aXFQTk0xWW5zenROaklDalpTWnFQZnczQ0trTytiOHVnMjArSnMzTGwvTWY3a2l2NVdKYnA0cnNhR3hMdThNbUkzSGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6ImIrcmJTQUJXdUluWWdNM0RINjJiWUxmTjZLTFJ6TllYT1ByYjZyanNLdzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJhZVRibjF3VEZpY0F4N3ptTUJhT3ciLCJwaG9uZUlkIjoiZGJmYjc4YTctN2VlNC00NmVjLTlkMDMtODVjOWQyN2NmODkxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN0UCtBdXl2T0tTd2lKMW1Qbkh3VDNnd1hGaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWeW5lelJ2dVk4dWl4WjRxRWEvZW04MElxZTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQlBUSlpMTVYiLCJtZSI6eyJpZCI6Ijk0NzY2OTUyODI3OjI0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiODc5MDEzMjA3ODE5MzM6MjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMVDV3amdRdnYvZHh3WVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvN1REd01OUS8weGFMYnJ1bTlNTXRJT2ZWWlJqNUZLUWg5cXJXUjQxVnc0PSIsImFjY291bnRTaWduYXR1cmUiOiJVcVdWLzI2TE56dUV0bUt2MFRmUXRTcyt5Z0lWaHY4cnFNNUphL2RkemZacE5UcCsxK1c3NzNvRFB6cTgxVnVYY3ZMSG5ORlB3aWVWKzlOOWNBeTZEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSTIwbTF1V1liWmVEWHJmVzhqZFgvRkhrbFcrZ3h3UUJaaVVSQUxzTVhNVElNZDcxTjYrZURWdExWcXJ6dmhoMktlZXNyTjVKelhRWUFaT3IzVzY2Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2Njk1MjgyNzoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhTzB3OEREVVA5TVdpMjY3cHZURExTRG4xV1VZK1JTa0lmYXExa2VOVmNPIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjEwNTA1NzEsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
