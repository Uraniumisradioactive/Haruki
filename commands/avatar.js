const Discord = require("discord.js");
module.exports = {
    name: "avatar",
    aliases: ['icon', 'pfp', 'profilepic', 'av'],
    description: "Displays users avatar",
     async execute (Client, message, args, client) {
         const user = message.mentions.users.first() || message.author;
         message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(`Avatar`)
            .setFooter(`${user.tag}'s avatar!`)
            .setColor(message.guild.me.displayHexColor)
            .setImage(user.displayAvatarURL({size: 4096, dynamic: true}))
            

                )
         
             }
}