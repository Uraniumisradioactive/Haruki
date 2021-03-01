const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'hentai',
    description: "Hentai",
    

    execute(message, args) {
        if(!message.channel.nsfw){ message.channel.send("<a:Nope:799231638604218419> Questo commando si può solo usare su <#798897222065586226>"); return; }
        if (!message.guild) return;
            async function hentai() {
            const GIF = await neko.nsfw.hentai();
            const embed = new Discord.MessageEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setTitle(`${message.author.tag} here's a random hentai image`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            hentai();
    }
}