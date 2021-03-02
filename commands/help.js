const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    execute(message, args) {

        const help = new Discord.MessageEmbed()
        .setTitle('Help Command')
        .setColor(message.guild.me.displayHexColor)
        .setDescription('Ecco tutti i comandi ')
        .addField('Fun Commands', '```h/8bell {domanda} \nh/animtableflip \nh/ascii {text} \nh/avatar {user_mention} \nh/cat \nh/catemoji \nh/covid {paese} \nh/dog \nh/embed {titolo (one word)} {colore in CAPS} {descrizione (more words)} \nh/meme \nh/ping \nh/say {testo} \nh/ship {two_users_mention} / {two_words} \nh/spoiler {testo} \nh/textflip {testo} \nh/weather {città}```')
        .addField('Roleplay Commands', ```h/baka \nh/cuddle \nh/hug \nh/kiss \nh/pat \nh/poke \nh/slap ```)
        .addField('NSFW Commands', ```h/anal \nh/blowjob \nh/hentai \nh/hentaigif \nh/spank \nh/wallpaper```)
        .addField('General Commands', ```h/botinfo \nh/news incomming...```)
        .setTimestamp()

        message.channel.send({help})


    }
}