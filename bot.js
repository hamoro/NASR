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


client.on('message', message => { 
        var prefix = "ا";                     
if(!message.channel.guild) return;
   if(message.content.startsWith(prefix + 'لوان')) {
   if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
   message.channel.sendFile(`https://i.imgur.com/T5WN89n.png`).then(msg => {
   msg.react('❤')
   .then(() => msg.react('💚'))
   .then(() => msg.react('💜'))
   .then(() => msg.react('💛'))
   .then(() => msg.react('🖤'))
   .then(() => msg.react('💙'))
   .then(() => msg.react('❌'))
 
 
   let redFilter = (reaction, user) => reaction.emoji.name === '❤' && user.id === message.author.id;
   let greenFilter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
   let purpleFilter = (reaction, user) => reaction.emoji.name === '💜' && user.id === message.author.id;
   let yellowFilter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
   let blackFilter = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
   let blueFilter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
   let nooneFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
   let red = msg.createReactionCollector(redFilter, { time: 15000 });
   let green = msg.createReactionCollector(greenFilter, { time: 15000 });
   let purple = msg.createReactionCollector(purpleFilter, { time: 15000 });
   let yellow = msg.createReactionCollector(yellowFilter, { time: 15000 });
   let black = msg.createReactionCollector(blackFilter, { time: 15000 });
   let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
   let noone = msg.createReactionCollector(nooneFilter, { time: 15000 });
 
   red.on("collect", r => {
       message.member.addRole(message.guild.roles.find("name", "Red"));
       message.member.removeRole(message.guild.roles.find("name", "Black"));
       message.member.removeRole(message.guild.roles.find("name", "Yellow"));
       message.member.removeRole(message.guild.roles.find("name", "Purple"));
       message.member.removeRole(message.guild.roles.find("name", "Green"));
       message.member.removeRole(message.guild.roles.find("name", "Blue"));
       msg.delete();
       message.channel.send(`**تم اعطائك اللون __الاحمر__.**`).then(m => m.delete(5000));
 
       })
     
       green.on("collect", r => {
           message.member.addRole(message.guild.roles.find("name", "Green"));
           message.member.removeRole(message.guild.roles.find("name", "Black"));
           message.member.removeRole(message.guild.roles.find("name", "Yellow"));
           message.member.removeRole(message.guild.roles.find("name", "Purple"));
           message.member.removeRole(message.guild.roles.find("name", "Red"));
           message.member.removeRole(message.guild.roles.find("name", "Blue"));
           msg.delete();
           message.channel.send(`**تم اعطائك اللون __الاخضر__.**`).then(m => m.delete(5000));
 
           })
         
           purple.on("collect", r => {
               message.member.addRole(message.guild.roles.find("name", "Purple"));
               message.member.removeRole(message.guild.roles.find("name", "Black"));
               message.member.removeRole(message.guild.roles.find("name", "Yellow"));
               message.member.removeRole(message.guild.roles.find("name", "Green"));
               message.member.removeRole(message.guild.roles.find("name", "Red"));
               message.member.removeRole(message.guild.roles.find("name", "Blue"));
               msg.delete();
               message.channel.send(`**تم اعطائك اللون __البنفسجي__.**`).then(m => m.delete(1000));
 
               })
             
               yellow.on("collect", r => {
                   message.member.addRole(message.guild.roles.find("name", "Yellow"));
                   message.member.removeRole(message.guild.roles.find("name", "Black"));
                   message.member.removeRole(message.guild.roles.find("name", "Purple"));
                   message.member.removeRole(message.guild.roles.find("name", "Green"));
                   message.member.removeRole(message.guild.roles.find("name", "Red"));
                   message.member.removeRole(message.guild.roles.find("name", "Blue"));
                   msg.delete();
                   message.channel.send(`**تم اعطائك اللون __الاصفر__.**`).then(m => m.delete(1000));
 
                   })
                 
                   black.on("collect", r => {
                       message.member.addRole(message.guild.roles.find("name", "Black"));
                       message.member.removeRole(message.guild.roles.find("name", "Yellow"));
                       message.member.removeRole(message.guild.roles.find("name", "Purple"));
                       message.member.removeRole(message.guild.roles.find("name", "Green"));
                       message.member.removeRole(message.guild.roles.find("name", "Red"));
                       message.member.removeRole(message.guild.roles.find("name", "Blue"));
                       msg.delete();
                       message.channel.send(`**تم اعطائك اللون __الاسود__.**`).then(m => m.delete(1000));
 
                       })
                       noone.on("collect", r => {
                           message.member.removeRole(message.guild.roles.find("name", "Yellow"));
                           message.member.removeRole(message.guild.roles.find("name", "Purple"));
                           message.member.removeRole(message.guild.roles.find("name", "Green"));
                           message.member.removeRole(message.guild.roles.find("name", "Red"));
                           message.member.removeRole(message.guild.roles.find("name", "Blue"));
                           message.member.removeRole(message.guild.roles.find("name", "Black"));
                           msg.delete();
                           message.channel.send(`**تم ازالة جميع الالوان منك.**`).then(m => m.delete(1000));
 
                           })                                                          
                           blue.on("collect", r => {
                               message.member.addRole(message.guild.roles.find("name", "Blue"));
                               message.member.removeRole(message.guild.roles.find("name", "Yellow"));
                               message.member.removeRole(message.guild.roles.find("name", "Purple"));
                               message.member.removeRole(message.guild.roles.find("name", "Green"));
                               message.member.removeRole(message.guild.roles.find("name", "Red"));
                               message.member.removeRole(message.guild.roles.find("name", "Black"));
                               msg.delete();
                               message.channel.send(`**تم اعطائك اللون __الازرق__.**`).then(m => m.delete(1000));
 
 
                               })
                               })
                               }
                               });

client.login(process.env.BOT_TOKEN);
