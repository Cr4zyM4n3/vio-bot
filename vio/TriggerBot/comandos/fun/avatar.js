const Discord = require('discord.js');

module.exports = {
  name: "avatar", 
  alias: [], 

execute (client, message, args){

const usuario = message.mentions.members.first() || message.member

  const embed = new Discord.MessageEmbed()

  .setTitle(`avatar of ${usuario.user.username}`)
  .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true}))
  .setDescription(`Requested by: ${message.author}`)
  .setColor("RANDOM")
.setTimestamp();
  message.channel.send({ embeds: [embed] });
  

 }

} 
