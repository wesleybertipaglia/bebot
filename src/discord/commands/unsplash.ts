import { Command } from "../../types/Command";

export const cat: Command = {
  name: "unsplash",
  description: "Get a random picture from unsplash!",
  async execute(message) {
    try {
      const image = await fetch("https://source.unsplash.com/random/");
      if (!image) throw new Error("Failed to fetch the image.");

      message.reply(`Here's your picture!`);
      message.reply({ files: image });
    } catch (error) {
      console.error(error);
      message.reply(
        `Failed to fetch the picture, please try again later. Error: ${error}`
      );
    }
  },
};
