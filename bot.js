const Discord = require('discord.js');
const client = new Discord.Client();
//var prefix = "#"
const fs = require("fs"); 
const moment = require("moment");  
const pretty = require("pretty-ms");
const ms = require("ms");
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
var x = client.channels.get("599118836679049240");
if (x) x.join();
});

client.on("ready", () => {
client.user.setStatus('offline');
client.user.setGame("~", "https://www.twitch.tv/idk");
  console.log(`Logged in as ${client.user.tag}!`);
  //client.user.setActivity("Voltes System",{type: 'LISTENING'});
});

client.on("message", message => {
//if(message.content.startsWith(prefix + "avatar")){
if (message.content === 'av') {
//if(!message.guild.member(message.author).hasPermission("8")) return message.reply("You don't have Permission").then(msg => msg.delete(1000));
if(message.author.bot || message.channel.type == "dm") return;
var args = message.content.split(" ")[1];
var avt = args || message.author.id;
client.fetchUser(avt)
.then((user) => {
avt = user
let avtEmbed = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
.setImage(avt.avatarURL)
.setFooter(message.guild.iconURL, '0001.')
.setTimestamp()
message.channel.send(avtEmbed);
})
.catch(() => message.channel.send(`Error`));
} 
});

client.login(process.env.BOT_TOKEN);
