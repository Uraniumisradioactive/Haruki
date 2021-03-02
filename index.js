const fs = require('fs');
const Discord = require('discord.js');
const { get } = require("snekfetch");

const config = require('./botconfing.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}



client.on('ready', () => {
  console.log(`${client.user.tag} is on :3!`);
  client.user.setActivity('+1k Membri', { type: 'WATCHING'});
});

client.on('message', message => {
	if(!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();


	//8ball cmd

	if(command === '8ball') {
		client.commands.get('8ball').execute(client, message, args);
	}

	//Anal cmd (nsfw cmd)

	if(command === 'anal') {
		client.commands.get('anal').execute(message, args);
	}

	//Animtableflip cmd

	if(command === 'animtableflip') {
		client.commands.get('animtableflip').execute(client, message, args);
	}

	//Ascii cmd

	if(command === 'ascii') {
		client.commands.get('ascii').execute(message, args);
	}

	//Avatar cmd 

	if(command === 'avatar') {
		client.commands.get('avatar').execute(Client, message, args, client);
	}

	//Baka cmd

	if(command === 'baka') {
		client.commands.get('baka').execute(message, args);
	}

	//Blowjob cmd

	if(command === 'blowjob') {
		client.commands.get('blowjob').execute(message, args);
	}


	//Botinfo cmd

	if(command === 'botinfo') {
		client.commands.get('botinfo').execute(message, args);
	}

	//Botinfo cmd

	if(command === 'cat') {
		client.commands.get('cat').execute(message, args);
	}

	//Clear cmd

	if(command === 'clear'){
		client.commands.get('clear').execute(message, args);
	}

	//Covid cmd

	if(command === 'covid') {
		client.commands.get('covid').execute(client, message, args);
	}

	//Cuddle cmd

	if(command === 'cuddle') {
		client.commands.get('cuddle').execute(message, args);
	}

	//Dog cmd

	if(command === 'dog') {
		client.commands.get('dog').execute(client, message, args);
	}

	//Emebed cmd

	if(command === 'embed'){
		client.commands.get('embed').execute(client, message, args);
	}

	//Help cmd

	if(command === 'help'){
		client.commands.get('help').execute(message, args);
	}

	//Hentai cmd (nsfw cmd)

	if(command === 'hentai') {
		client.commands.get('hentai').execute(message, args);
	}

	//Hentaigif cmd (nsfw cmd)

	if(command === 'hentaigif') {
		client.commands.get('hentaigif').execute(message, args);
	}

	//Hug cmd

	if(command === 'hug') {
		client.commands.get('hug').execute(message, args);
	}

	//Invite cmd

	if(command === 'invite'){
		client.commands.get('invite').execute(message, args);
	}

	//Join cmd

	if(command === 'join') {
		client.commands.get('join').execute(message, args);
	}


	//Kiss cmd

	if(command === 'kiss') {
		client.commands.get('kiss').execute(message, args);
	}

	//Leave cmd

	if(command === 'leave') {
		client.commands.get('leave').execute(message, args);
	}

	//Meme cmd

	if(command === 'meme') {
		client.commands.get('meme').execute(message, args);
	}

	//Pat cmd

	if(command === 'pat') {
		client.commands.get('pat').execute(message, args);
	}

	//Ping cmd
	
	if(command === 'ping'){
		client.commands.get('ping').execute(message, args);
	}

	//Play cmd

	if(command === 'play') {
		client.commands.get('play').execute(message,args, command, client, Discord);
	}

	//Poke cmd

	if(command === 'poke') {
		client.commands.get('poke').execute(message, args);
	}

	//Say cmd

	if(command === 'say') {
		client.commands.get('say').execute(message, args);
	}

	//Serverinfo cmd

	if(command === 'serverinfo') {
		client.commands.get('serverinfo').execute(message, args);
	}

	//Ship cmd

	if(command === 'ship') {
		client.commands.get('ship').execute(client, message, args);
	}

	//Slap cmd

	if(command === 'slap') {
		client.commands.get('slap').execute(message, args);
	}

	//Spank cmd (nsfw cmd)

	if(command === 'spank') {
		client.commands.get('spank').execute(message, args);
	}

	//Spoiler cmd

	if(command === 'spoiler') {
		client.commands.get('spoiler').execute(client, message, args);
	}

	//Textflip cmd

	if(command === 'textflip') {
		client.commands.get('textflip').execute(client, message, args);
	}

	//Verifica cmd

	if(command === 'verifica') {
		client.commands.get('verifica').execute(client, message, args);
	}


	//Time cmd

	if(command === 'time') {
		client.commands.get('time').execute(message, args);
	}

	//Userinfo cmd

	if(command === 'userinfo') {
		client.commands.get('userinfo').execute(client, message, args);
	}

	//Wallpaper cmd

	if(command === 'wallpaper') {
		client.commands.get('wallpaper').execute(client, message, args);
	}

	//Weather cmd

	if(command === 'weather') {
		client.commands.get('weather').execute(message, args);
	}

	//Why cmd

	if(command === 'why') {
		client.commands.get('why').execute(client, message, args);
	}


});


client.login(config.token);

