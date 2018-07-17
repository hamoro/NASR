const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**

:earth_asia: welcome TO S7Q CLAN :heart:  ,   https://discord.gg/4prW5HA


7LMN NWSL 1000 ADW**


 ${member}  
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
**

:earth_asia: welcome TO S7Q CLAN DAOY 5SA:heart:  ,   https://discord.gg/4prW5HA

7LMN NWSL 1000 ADW**


 ${member}  
**`) 
}).catch(console.error)
})


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
