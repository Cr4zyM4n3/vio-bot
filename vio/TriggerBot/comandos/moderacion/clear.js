const Discord = require('discord.js');

module.exports = {
  name: "clear", 
  alias: ["purge"], 

execute (client, message, args){


  try{
    const botperms = message.guild.me.permissions.has("MANAGE_MESSAGES")

    if(!botperms) return message.channel.send("I don't have permission to delete messages")
    
    var perms = message.member.permissions.has("MANAGE_MESSAGES")
    if(!perms) return message.channel.send("You do not have permissions to delete messages")
    
      const valor = parseInt(args[0]);
    
      if(!valor) return message.channel.send("You must write a number of messages to delete.")
    if(valor >= 100) return message.channel.send("I can't delete more than 99 messages at once!")
    
    message.channel.bulkDelete(valor + 1); 
    
    
    setTimeout(function(){ 
      
    
    message.channel.send(`have been removed **${valor}** messages correctly!`).then(msg => {
        setTimeout(function(){ 
                msg.delete()
            }, 10000)
    })
    
     }, 2000);
  } catch (e) {
    console.log(e)
  }

  }

}
