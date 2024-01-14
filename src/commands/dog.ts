module.exports = {
  name: "dog",
  description: "Get a cute dog picture!",
  async execute(message, args) {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();

      if (!data || !data.message) {
        throw new Error("Failed to fetch dog image.");
      }

      const dogImageUrl = data.message;
      message.reply(`Here's a cute dog picture!`);
      message.reply({ files: [dogImageUrl] });
    } catch (error) {
      console.error(error);
      message.reply(
        `Failed to fetch a cute dog picture. Please try again later :(, ${error}`
      );
    }
  },
};
