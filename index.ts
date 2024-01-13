const dotenv = require('dotenv');
dotenv.config();
let botPrefix = process.env.BOT_PREFIX;
let botToken = process.env.BOT_TOKEN;


const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

// bot online / offline
client.once('ready', () => {
    console.log('Bot is ready!');
});
client.once('disconnect', () => {
    console.log('Bot is offline!');
});

// server creation / delete
client.on('guildCreate', (guild) => {
    console.log(`Bot entrou no servidor ${guild.name}`);
});
client.on('guildDelete', (guild) => {
    console.log(`Bot saiu do servidor ${guild.name}`);
});

// message
client.on('messageCreate', (message) => {
    if (!message.content.startsWith(botPrefix) || message.author.bot) return;

    const args = message.content.slice(botPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'ping':
            message.reply('Pong!');
            break;
        case 'eae':
            message.reply(`Eae, ${message.author.username}! Churras?`);
            break;
        default:
            message.reply('Quando eu souber o que fazer, te aviso!');
            break;
    }
});

// login
client.login(botToken);
