import { Command } from "../../types/Command";

export const quote: Command = {
  name: "joke",
  description: "Get a random joke!",
  async execute(message) {
    try {
      const url = `https://api.quotable.io/quotes/random`;
      const response = await fetch(url);
      const data = await response.json();
      message.reply(`Here's your quote! \n\n${data.content} - ${data.author}`);
    } catch (error) {
      console.error(error);
      message.reply(
        `Failed to fetch your quote, please try again later. Error: ${error}`
      );
    }
  },
};
