import { Command } from "../../types/Command";

export const joke: Command = {
  name: "joke",
  description: "Get a random joke!",
  async execute(message) {
    try {
      const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&safeSearch=true&lang=en&type=single`;
      const response = await fetch(url);
      const data = await response.json();
      message.reply(data.joke);
    } catch (error) {
      console.error(error);
      message.reply(
        `Failed to fetch a random joke, please try again later. Error: ${error}`
      );
    }
  },
};
