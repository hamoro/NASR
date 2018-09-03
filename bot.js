const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : hamo`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : hamo ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`I LOVE YOU,S7Q,`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
