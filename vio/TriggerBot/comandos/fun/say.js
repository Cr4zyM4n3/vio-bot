const Discord = require('discord.js');

module.exports = {
  name: "say", 
  alias: ["di"], 

execute (client, message, args){

var perms = message.member.permissions.has("ADMINISTRATOR")
if(!perms) return message.channel.send("`You don't have admin permissions!`")

  const texto = args.join(" ")
if(!texto) return message.channel.send("You must write a message!")
  message.channel.send(texto)
message.delete()
}

} 
