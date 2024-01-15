import fs from "fs";
import client from "./client";

function commandsHandler() {
  const commandFiles = fs
    .readdirSync("../commands")
    .filter((file) => file.endsWith(".ts"));

  for (const file of commandFiles) {
    const command = require(`./src/commands/${file}`);
    client.commands.set(command.name, command);
  }
}

export default commandsHandler;
