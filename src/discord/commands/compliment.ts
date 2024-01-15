import { Command } from "../../types/Command";
import { compliments } from "../../data/compliments";

const randomCompliment =
  compliments[Math.floor(Math.random() * compliments.length)];

export const compliment: Command = {
  name: "compliment",
  description: "Receive a compliment!",
  execute(message) {
    message.reply(randomCompliment);
  },
};
