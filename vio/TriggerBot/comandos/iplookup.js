const Discord = require("discord.js")
const superagent = require('superagent');

module.exports = {
    name: "iplookup",
    alias: ["ip"],

    async execute (client, message, args){
  


      var ip = args[0];
      if(!ip) return await message.channel.send("Necesito una IP para scanear")
  
      async function lookup(add){
  
        const address = await superagent.get(`http://ip-api.com/json/${add}`);
        const proxy = await superagent.get(`https://vpnapi.io/api/${add}?key=b559570b6e1f494e800ddd9e93571534`)
 

        const embed = new Discord.MessageEmbed()
        .setTitle("Ip lookup")
        .setDescription(`IP = ${address.body.query}\nStatus = ${address.body.status}\n
        Country = ${address.body.country}\nCountry Code = ${address.body.countryCode}\nRegion name = ${address.body.regionName}\nRegion = ${address.body.region}
        City = ${address.body.city}\nZIP code = ${address.body.zip}\nLatitude / Longitude = ${address.body.lat} / ${address.body.lon}\n
        Timzone = ${address.body.timezone}\n
        ISP = ${address.body.isp}\nORG = ${address.body.org}\nAS = ${address.body.as}\n\n**Proxy/VPN  Detector**\nVPN = ${proxy.body.security.vpn}\nProxy = ${proxy.body.security.proxy}\nTor node = ${proxy.body.security.tor}`)
        .setThumbnail("https://creazilla-store.fra1.digitaloceanspaces.com/emojis/47298/check-mark-button-emoji-clipart-xl.png")
  

        const embed2 = new Discord.MessageEmbed()
        .setTitle("`❌ | Error!`")
        .setDescription(`La IP **${ip}** esta bloqueada o es invalida!`)
        .setColor("RED")
        .setTimestamp();

        if(address.body.status === 'fail') return message.reply({ embeds: [embed2] });
  
        await  message.channel.send({ embeds: [embed] })
  
      }
  
      lookup(ip);
    }
  }


