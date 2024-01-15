import { Command } from "../../types/Command";

export const help: Command = {
  name: "help",
  description: "Show all available commands.",
  execute(message, commands) {
    if (!commands) {
      return message.reply("Error: Unable to access commands.");
    }

    const commandList = commands
      .map(
        (command: any) => "- `!" + command.name + "`: " + command.description
      )
      .join("\n");

    message.channel.send(`Here are the available commands:\n${commandList}`);
  },
};
