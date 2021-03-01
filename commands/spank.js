const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'spank',
    description: "Spank",

    execute(message, args) {
        if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
        if (!message.guild) return;
        async function spank() {
        const GIF = await neko.nsfw.spank();
        const embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setTitle(`${message.author.tag} here's a random spanking image/gif`)
        .setImage(GIF.url)
        message.channel.send(embed);
        }
        spank();
}
}