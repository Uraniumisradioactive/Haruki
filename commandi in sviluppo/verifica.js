const Discord = require('discord.js');

module.exports = {
	name: 'verifica',
	description: 'verificare gli account',

	
	async execute(client, message, args) {

                let target = message.mentions.members.first();

                if(!target) return message.reply('Devi mensionare un mebro');
                
                let role = message.mentions.roles.first();

                if(!role) return message.reply('Devi mentionare un ruolo!');


                return message.channel.send(
                        new Discord.MessageEmbed()
                         .setColor(message.guild.me.displayHexColor)
                         .setDescription('`${target.user.username} è stato verificato!`')
 
                )
 
                 .then(target.roles.add(role));

                 

        

        }
        
};