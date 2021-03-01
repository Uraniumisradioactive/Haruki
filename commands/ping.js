const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'ping cmd',

	
	execute(message, args) {
        const Embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setTitle('Pong!')
        .setDescription(`${Date.now() - message.createdTimestamp}ms <a:Ping:800298769987797002>`)
    

        message.channel.send(Embed);
	},
};