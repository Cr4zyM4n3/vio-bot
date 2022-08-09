const Discord = require("discord.js")
const intents = new Discord.Intents();
const client = new Discord.Client({ intents: 131071 })
const cooldown = new Set()

client.on("ready", () => {
    console.log("bot encendido")

    let state = 0;
    const presences = [
        { type: 'PLAYING',  message: 'v1.0'  },
        { type: 'WATCHING',  message: `${client.guilds.cache.size} Vio server!`  },
        { type: 'WATCHING',  message:`${client.users.cache.size} lol`  },
        { type: 'WATCHING',  message: 'bot!'  },
        { type: 'PLAYING',  message: 'Roblox'  },
        { type: 'WATCHING', message: 'v!help' }
    ];

    setInterval(() => {
        state = (state + 1) % presences.length;
        const presence = presences[state];
    
        client.user.setActivity(presence.message, { type: presence.type });
    }, 5000);
    });


    const fs = require('fs');
    const fsPromises = fs.promises;
    
    const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

    module.exports.getAllFiles = function 
    getAllFiles(dirPath, arrayOfFiles)
    {
        const files = fs.readdirSync(dirPath);
    
        arrayOfFiles = arrayOfFiles || [];
        files.forEach(function (file)
        {
            if (fs.statSync(dirPath + "/" + file).isDirectory())
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
            else arrayOfFiles.push(path.join(dirPath, "/", file));
        });
    
        return arrayOfFiles;
    
    };

    client.commands = new Discord.Collection();

    const { getAllFiles } = require("./main.js");


    /* Load commands. */
    console.log(("Loading Commands . . ."));
    /* Get an array of all files in the commands folder. */
    const commands = getAllFiles(path.join(__dirname, "./comands"));
    if (commands.length <= 0) console.log("NO COMMANDS FOUND");
    else {
      /* Iterate every file in the array and require it. Also map it to the commands collection. */
      commands.forEach((file, i) => {
        const props = require(`${file}`);
        console.log((
          
            `${++i}. Command: ${file.split("\\").pop().split("/").pop()} loaded!`
        )
        );
        client.commands.set(props.name, props)
      });
    }

    

client.on("messageCreate", async message => {
    const prefix = "v!"
    if(!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    
    let usuario = message.mentions.members.first() || message.member;
    const args = message.content.slice(prefix.length).trim().split(` `); 
    const command = args.shift().toLowerCase();

    //Handler











    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if (cmd) {
        cmd.execute(client, message, args)
   
    
    }
    if(!cmd){

        const embed2 = new Discord.MessageEmbed()
        .setTitle("`❌ | Error!`")
        .setDescription(`try again.`)
        .setColor("RED")
        .setTimestamp();


        if(message.content === prefix) return message.reply({ embeds: [embed2] });

        const embed1 = new Discord.MessageEmbed()
        .setTitle("`❌ | Error!`")
        .setDescription(`El comando **${command}** no existe.\n usa **v!help** para ver los comandos!`)
        .setColor("RED")
        .setTimestamp();
        message.reply({ embeds: [embed1] });
        }
});


client.login("MTAwNTIzNzQ0MDIwNzkyOTQwNQ.GYRbwj.-lHtf2dLsiuQQfxVOOEUUXae9AZtxdWF-VYlcg")