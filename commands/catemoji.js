
const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'catemoji',
    execute(client, message, args){
        if (!message.guild) return;
            async function cattext() {
                const catTEXT = await neko.sfw.catText();
                message.channel.send(catTEXT.cat);
            }
            cattext();
    }
}