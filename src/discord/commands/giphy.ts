import { Command } from "../../types/Command";
import { giphyApi } from "../../config/apis/giphy";

const parameters: { tag?: string; rating?: string } = giphyApi.parameters ?? {
  tag: "",
  rating: "",
};

export const randomGiphy: Command = {
  name: "gif",
  description: "Get a random GIF!",
  async execute(message) {
    try {
      if (!giphyApi.key) throw new Error("The Giphy API key is missing.");

      const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApi.key}&tag=${parameters.tag}&rating=${parameters.rating}`;
      const response = await fetch(giphyUrl);
      const data = await response.json();
      const gifUrl = data.data.images.downsized.url;

      message.reply({ files: [gifUrl] });
    } catch (error) {
      console.error(error);
      message.reply(
        `Failed to fetch a random GIF, please try again later. Error: ${error}`
      );
    }
  },
};
