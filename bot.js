const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(**
سلام عليكم ي بعد عيني ممكن نخطفك عندنا الليلة :rose: :P 
نتشرف فيك ي عسل نورنا <3 :D 
[ https://discord.gg/4prW5HA ]
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(**
سلام عليكم ي بعد عيني ممكن نخطفك عندنا الليلة :rose: :P 
نتشرف فيك ي عسل نورنا <3 :D 
[ https://discord.gg/4prW5HA ]
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**) 
}).catch(console.error)
})


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
