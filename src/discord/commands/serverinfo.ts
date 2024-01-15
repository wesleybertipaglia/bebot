import { Command } from "../../types/Command";

export const serverInfo: Command = {
  name: "serverinfo",
  description: "Display server information",
  execute(message) {
    const serverInfo = `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`;
    message.channel.send(serverInfo);
  },
};
