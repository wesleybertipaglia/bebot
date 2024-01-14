module.exports = {
  name: "ping",
  description: "Respond with pong",
  execute(message, args) {
    message.reply("Pong!");
  },
};
