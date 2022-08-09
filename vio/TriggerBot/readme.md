const Discord = require("discord.js")
const superagent = require('superagent');
const cooldown = new Set()

module.exports = {
    name: "",
    alias: [],

    async execute (client, message, args){



    if(cooldown.has(message.author.id)){
        message.reply("`Please wait you are executing commands very fast!`")
    } else {

//////////////////// COMANDO AQUI //////////////////

































////////////// FINAL DEL COMANDO ////////////////

        cooldown.add(message.author.id)
        setTimeout(function(){ 
    cooldown.delete(message.author.id)
        }, 5000);
    }
  ////////// FINAL DEL COOLDOWN//////////  
      
         }
  }
