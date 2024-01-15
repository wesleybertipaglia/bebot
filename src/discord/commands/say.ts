import { Command } from "../../types/Command";

export const say: Command = {
  name: "say",
  description: "Repeat what you say",
  execute(message, args) {
    const text = args.join(" ");
    message.channel.send(text);
  },
};
