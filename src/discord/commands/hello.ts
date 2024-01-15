import { Command } from "../../types/Command";

export const hello: Command = {
  name: "hello",
  description: "Say hello!",
  execute(message) {
    message.reply(`Hello!, ${message.author}!`);
  },
};
