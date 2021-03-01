const Discord = require('discord.js');

module.exports = {
	name: 'botinfo',
	description: 'bot info cmd!',

	
	execute(message, args) {
        const Embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setTitle('Bot Info!')
        .setThumbnail('https://cdn.discordapp.com/attachments/771426584653070356/815950875692367872/TikTok.jpg')
        .setDescription('Programatore => Uraniumisradioactive#2005')
        .addField('Owner 👑', '<@803217630613733396>', true)
        .addField('Prefix ⁉', 'h/', true)
        .addField('Mention 🔌', '<@805829591242768444>', true)
        .addField('Tag 📯', 'Haruki#1462', true)
        .addField('ID 🆔', '805829591242768444', true)

        message.channel.send(Embed);
	},
};