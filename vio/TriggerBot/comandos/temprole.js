const Discord = require("discord.js")
const superagent = require('superagent');
const cooldown = new Set()
const ms = require("ms")

module.exports = {
    name: "temprole",
    alias: [],

    async execute (client, message, args){



    if(cooldown.has(message.author.id)){
        message.reply("`Please wait you are executing commands very fast!`")
    } else {

//////////////////// COMANDO AQUI //////////////////

const MessageEmbed = Discord.MessageEmbed

const miembro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
const tiempo = args[2]

if(!miembro)
return message.reply({ embeds: [ new MessageEmbed().setDescription("mention a member").setColor("RED")]})

if(!rol)
return message.reply({ embeds: [ new MessageEmbed().setDescription("mention a role").setColor("RED")]})


if(!tiempo || isNaN(ms(tiempo))) return message.reply({ embeds: [ new MessageEmbed().setDescription("tiempo invalido").setColor("RED")]})
    miembro.roles.add(rol).then( () => {
         message.reply({ embeds: [ new MessageEmbed().setDescription("role given correctly").setColor("GREEN")]})
})
setTimeout(() => {
    
    miembro.roles.remove(rol).then( () => {
         message.reply({ embeds: [ new MessageEmbed().setDescription("I removed the role").setColor("GREEN")]})
})
}, ms(tiempo))























////////////// FINAL DEL COMANDO ////////////////

        cooldown.add(message.author.id)
        setTimeout(function(){ 
    cooldown.delete(message.author.id)
        }, 5000);
    }
  ////////// FINAL DEL COOLDOWN//////////  
      
         }
  }
