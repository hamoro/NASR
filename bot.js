const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require('moment');
const ytdl = require('ytdl-core');
const request = require('request');
var Canvas = require('canvas')
const prettyMs = require('pretty-ms');
const fkkRecently = new Set();
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const fs = require('fs');
const ms = require("ms");
const dateFormat = require('dateformat');
const config = require("./config.json")


var user = {};
var warn = {};


client.on("message", message => {
    var prefix = "ا";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix +"مسح")) {
                if (!message.member.hasPermission("MANAGE_CHANNELS"))  return message.reply("**للأسف ليس لديك صلاحية `MANAGE_CHANNELS` Permission**");
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**للأسف البوت يحتاج صلاحية`MANAGE_CHANNELS`**");
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription("امسح <number>")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let embed4 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                              .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("3000");
                                message.channel.sendEmbed(embed4) .then(msg => msg.delete(3000));
                            }
                          }
});  


client.login(process.env.BOT_TOKEN);
