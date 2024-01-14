const fs = require("fs");
const dotenv = require("dotenv");
const { Client, GatewayIntentBits, Collection } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// bot prefix and token
dotenv.config();
const defaultPrefix = "!";
let botToken = process.env.BOT_TOKEN;
let botPrefix = process.env.BOT_PREFIX || defaultPrefix;

// check if bot prefix and token exists
if (!botPrefix && !botToken) {
  if (!botPrefix) {
    console.error("Bot prefix not found!");
    process.exit(1);
  }
  if (!botToken) {
    console.error("Bot token not found!");
    process.exit(1);
  }
} else {
  client.once("ready", () => {
    console.log("Bot is ready!");
  });
}

// server creation / delete
client.on("guildCreate", (guild) => {
  console.log(`Bot joined to ${guild.name} server.`);
});
client.on("guildDelete", (guild) => {
  console.log(`Bot get out from ${guild.name} server.`);
});

// commands
client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./src/commands")
  .filter((file) => file.endsWith(".ts"));

for (const file of commandFiles) {
  const command = require(`./src/commands/${file}`);
  client.commands.set(command.name, command);
}

// message
client.on("messageCreate", (message) => {
  if (!message.content.startsWith(botPrefix ?? "") || message.author.bot)
    return;

  const args = message.content
    .slice(botPrefix?.length ?? 0)
    .trim()
    .split(/ +/);

  const command = client.commands.get(args.shift()?.toLowerCase());
  if (!command) {
    message.reply("Command not found!");
    return;
  } else {
    try {
      command.execute(message, args, client.commands);
    } catch (error) {
      console.error(error);
      message.reply(`Error: ${error}`);
    }
  }
});

// login
client.login(botToken);
