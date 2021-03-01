const Discord = require('discord.js');


module.exports = {
    name: '8ball',
    description: "Baaaaka",
    

    execute(client, message, args) {

        let reason = args.join(' ');
        if (reason.length < 1) return message.channel.send('<a:Nope:799231638604218419> Non è una domanda');
        var ball = ['Si fra','Il karma','AHHAHAHAHHAHAHAH no.','No.','Forse','SI', 'Mi dispiace ma no', 'I pianeti mi dicono di farti una vita e di non sare su discord'];
        const embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .addField("Domanda", reason)
        .addField("Risposta", ball[Math.floor(Math.random () * ball.length)])
        .setThumbnail("http://www.pngmart.com/files/3/8-Ball-Pool-Transparent-PNG.png")
        message.channel.send({embed})
    
    }
}