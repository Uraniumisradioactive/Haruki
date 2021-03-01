const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Server info',


    execute(message, args) {
        let embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setTitle("Server Info")
        .setThumbnail(`${message.guild.iconURL()}`)
        .setDescription(`${message.guild.name}'s information`)
        .addField("Name", `${message.guild.name}`)
        .addField("Owner", `${message.guild.owner}`)
        .addField("ID", `${message.guild.id}`)
        .addField("Regine", `${message.guild.region}`)
        .addField('Creato Il', message.guild.createdAt.toLocaleString())
        .addField("Membri", `${message.guild.memberCount} members`)
        .addField("Emojit", `${message.guild.emojis.cache.size} emojis`)
        .addField("Ruoli", `${message.guild.roles.cache.size} roles`)
        .addField("Channels", `${message.guild.channels.cache.size} channels`)

    message.channel.send(embed);

    }
}