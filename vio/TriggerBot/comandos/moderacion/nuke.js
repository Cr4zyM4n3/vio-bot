const Discord = require('discord.js');

module.exports = {
  name: "nuke", 
  alias: [], 

execute(client, message, args){


const nukeChannel = message.channel;

///VARIABLES///
  if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("you cannot use this command.");

  if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send("I don't have permissions to manage channels. :(");

const valor = message.member

//Executing
nukeChannel.clone().then((ch) => {
setTimeout(function(){ 
ch.setPosition(message.channel.position);
}, 500);


setTimeout(function(){ 
    message.channel.delete()
}, 2000);

          const embed = new Discord.MessageEmbed()
            .setTitle(`This channel was nuked!`)
            .setDescription(`por ${valor}.`)
            .setColor('#992D22')
            .setImage('https://c.tenor.com/giN2CZ60D70AAAAC/explosion-mushroom-cloud.gif')
            .setTimestamp();

          ch.send({ embeds: [embed] });



}) 
} 

} 