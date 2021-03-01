const Discord = require('discord.js');

module.exports = {
	name: 'invite',
    description: 'invite cmd',


	execute(message, args) {
        const Embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setTitle('Invite')
        .setURL('https://discord.com/oauth2/authorize?client_id=805829591242768444&scope=bot&permissions=2147483391')
        .setDescription('Ecco il link per invitare il bot \nEnjoy <a:REEEEEEEEEEEEEEEEEEE:799205370198753311>')
        .setThumbnail('https://cdn.discordapp.com/attachments/771426584653070356/815950875692367872/TikTok.jpg')

        message.channel.send(Embed);
	},
};
