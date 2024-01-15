import { Client, GatewayIntentBits, Collection } from "discord.js";
import fs from "fs";
import messageHandler from "./message";
import commandsHandler from "./commands";

interface CustomClient extends Client {
  commands: Collection<any, any>;
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
}) as CustomClient;

// commands
client.commands = new Collection();
commandsHandler();

// guild
client.on("guildCreate", (guild: any) => {
  console.log(`Bot joined to ${guild.name} server.`);
});
client.on("guildDelete", (guild: any) => {
  console.log(`Bot get out from ${guild.name} server.`);
});

// ready
client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

// message
client.on("message", (message) => messageHandler(message));

export default client;
