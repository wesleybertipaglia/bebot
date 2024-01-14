module.exports = {
  name: "gif",
  description: "Get a random GIF!",
  async execute(message, args) {
    try {
      const apiKey = process.env.GIPHY_API_KEY;
      if (!apiKey) {
        throw new Error("The Giphy API key is missing.");
      }

      const giphyUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=fail&rating=pg-13`;
      const response = await fetch(giphyUrl);
      const data = await response.json();

      if (!data || !data.data) {
        throw new Error("Failed to fetch random GIF.");
      }

      const gifUrl = data.data.images.downsized.url;
      message.reply({ files: [gifUrl] });
    } catch (error) {
      console.error(error);
      message.reply(
        `Failed to fetch a random GIF. Please try again later :(, ${error}`
      );
    }
  },
};
