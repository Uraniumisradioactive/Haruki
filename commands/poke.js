const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'poke',
    description: "Poke!",

    execute(message, args) {
        if (!message.guild) return;
        if (message.mentions.members.size === 0) {
        async function no_ping() {
            const GIF = await neko.sfw.poke();
            const embed = new Discord.MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setTitle(`${message.author.tag} poked themselves`)
            .setImage(GIF.url)
            message.channel.send(embed);
        }
        no_ping();
        }
        if (message.mentions.members.size !== 0) {
        async function ping() {
        const member = message.mentions.members.first();
        const GIF = await neko.sfw.poke();
        const embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setTitle(`${message.author.tag} poked ${member.user.tag}`)
        .setImage(GIF.url)
        message.channel.send(embed);
        }
        ping();
    }
}
}