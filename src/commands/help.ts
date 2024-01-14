module.exports = {
  name: "help",
  description: "List all available commands",
  execute(message, args, commands) {
    if (!commands) {
      return message.reply("Error: Unable to access commands.");
    }

    const commandList = commands
      .map((command) => "- `!" + command.name + "`: " + command.description)
      .join("\n");

    message.channel.send(`Here are the available commands:\n${commandList}`);
  },
};
