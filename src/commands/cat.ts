module.exports = {
  name: "cat",
  description: "Get a cute cat picture!",
  async execute(message, args) {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );

      const data = await response.json();
      if (!data || !data[0] || !data[0].url) {
        throw new Error("Failed to fetch cat image.");
      }

      message.reply(`Here's a cute cat picture!`);
      message.reply({ files: [data[0].url] });
    } catch (error) {
      console.error(error);
      message.reply(
        `Failed to fetch a cute cat picture. Please try again later :(, ${error}`
      );
    }
  },
};
