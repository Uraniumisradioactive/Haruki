const Discord = require('discord.js');
const { get } = require("snekfetch");

module.exports = {
    name: 'cat',
    description: 'cat cmd',


    execute(message, args) {

        get('https://aws.random.cat/meow') .then(res => {
        const Embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setTitle(`${message.author.tag} here's a random cat image/gif`)
        .setImage(res.body.file)


    message.channel.send(Embed);

    })
}};