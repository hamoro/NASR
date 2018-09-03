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


var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "- S7Q SERVER")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'chat');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "- S7Q SERVER")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(` :hearts: **تم دعوته من قبل ${Invite.inviter} :hearts: 
:hearts: رابط الدعوه --> https://discord.gg/${Invite.code} :hearts:
:hearts: عضو رقم --> ${member.guild.memberCount} :hearts: **`)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});
let points = JSON.parse(fs.readFileSync('./fkk/3wasmPTS.json', 'utf8'));

client.login(process.env.BOT_TOKEN);
