const Discord = require('discord.js');
const frames = [
	'(-°□°)-  ┬─┬',
	'(╯°□°)╯    ]',
	'(╯°□°)╯  ︵  ┻━┻',
	'(╯°□°)╯       [',
	'(╯°□°)╯           ┬─┬'
];
module.exports = {
    name: 'animtableflip',
    description: 'Server info',


    async execute(client, message, args) {

        const msg = await message.channel.send('(\\\\°□°)\\\\  ┬─┬');
    for (const frame of frames) {
        setTimeout(() => {}, 4000);
        await msg.edit(frame);
    }
    return message;

    
    }
}