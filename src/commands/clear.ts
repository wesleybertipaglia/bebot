module.exports = {
  name: "clear",
  description: "Clear a specified number of messages",
  async execute(message, args) {
    const amount = parseInt(args[0]) || 1;

    if (isNaN(amount) || amount <= 0 || amount > 100) {
      return message.reply("Please provide a valid number between 1 and 100.");
    }

    const messages = await message.channel.messages
      .fetch({ limit: amount + 1 })
      .catch(console.error);

    if (!messages || messages.size === 0) {
      console.error("No messages found to clear.");
      return;
    }

    await message.channel.bulkDelete(messages, true);

    message
      .reply(`Cleared ${amount} messages.`)
      .then((msg) => msg.delete({ timeout: 3000 }));
  },
};
