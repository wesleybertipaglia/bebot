import { Command } from "../../types/Command";

export const userInfo: Command = {
  name: "userinfo",
  description: "Display user information",
  execute(message) {
    const userInfo = `Your username: ${message.author.username}\nYour ID: ${message.author.id}`;
    message.channel.send(userInfo);
  },
};
