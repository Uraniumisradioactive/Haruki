module.exports = {
    name: 'join',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");
        await voiceChannel.join();
        await message.channel.send(`Join in channel **${voiceChannel}**`)
 
    }
}