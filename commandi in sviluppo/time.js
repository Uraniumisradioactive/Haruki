const Discord = require('discord.js');

module.exports = {
    name: 'time',
    description: 'time cmd',


    execute(message, args) {

    var data = new Date();
    var ora = data.getHours();
    var minuto = data.getMinutes();

    const Embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setTitle('Time')
        .setDescription('Time \n' + ora + ":" + minuto + ' <a:AY_timer:801777139380650004> ');
    

        message.channel.send(Embed);

    }
};