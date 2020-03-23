

const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "Prefix!"
client.on('reconnecting', () => console.log('I am reconnecting now!'));
client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(' ');

	const command = args.shift().toLowerCase();
    try {

        let commandFile = require(`./commands/${command}.js`);

        commandFile.run(client, message, args)

    } catch (err) {

        return;

	}


});
client.login('Token')
