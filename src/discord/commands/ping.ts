import { Command } from "../../types/Command";

export const ping: Command = {
  name: "ping",
  description: "Respond with pong",
  execute(message) {
    message.reply("🏓 > Pong!");
  },
};
