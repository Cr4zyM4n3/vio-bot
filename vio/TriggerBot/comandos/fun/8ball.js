const Discord = require("discord.js")
const superagent = require('superagent');

module.exports = {
    name: "8ball",
    alias: ["8ball"],

    async execute (client, message, args){
      
        try
    {

        const question = args.join(" ");
        if(!question) message.channel.send("`You must ask me a question!`")
        const replies = [
            "And.",
            "No.",
            "Never.",
            "definitely.",
            "ask me later.",
            "imagine.", 
            "Obviously not.",
            "Obvious.",
            "ask your mom."
        ];
        const result = Math.floor(Math.random() * replies.length); 

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: "🎱 The 8 ball says..." })
            .setColor("ORANGE")
            .addField("Ask:", question)
            .addField("Response:", replies[result]);

        await message.reply({ embeds: [embed], ephemeral: false });
        return;
    }
    catch (err)
    {
        return Promise.reject(err);
    }

         }
  }