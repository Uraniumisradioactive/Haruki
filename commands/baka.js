const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();


module.exports = {
    name: 'baka',
    description: "Baaaaka",
    

    execute(message, args) {

        if (!message.guild) return;
            async function baka() {
            const GIF = await neko.sfw.baka();
            const embed = new Discord.MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setTitle(`${message.author.tag} here's a random baka image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            baka();
    }
}