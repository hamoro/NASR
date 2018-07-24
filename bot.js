const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**

السلام عليكم
:earth_asia: طلب صغير تنورنه حياك كلان سحق:heart:  ,   https://discord.gg/4prW5HA

حلمنه نوصل 1000 عضو**


 ${member} .... الدعوه خاصه لك يا قلبي .
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**
السلام عليكم
:earth_asia: طلب صغير تنورنه حياك كلان سحق:heart:  ,   https://discord.gg/4prW5HA

حلمنه نوصل 1000 عضو**


 ${member} .... الدعوه خاصه لك يا قلبي .
**`) 
}).catch(console.error)
})
client.login ("NDU1NTU5NzMxODEwMDA5MDk5.Di8bng.Ajgioghj04eszjJn_JCkyHPIhp8")


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
