const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    execute(message, args) {

    

        const help = new Discord.MessageEmbed()
        .setTitle('Help Command')
        .setColor(message.guild.me.displayHexColor)
        .setDescription('Ecco tutti i comandi ')
        .addField('Fun Commands', '``````')
        .setTimestamp()

        message.channel.send({help})


    }
}