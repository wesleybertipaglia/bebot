module.exports = {
  name: "hello",
  description: "Say hello!",
  execute(message, args) {
    message.reply(`Hello!, ${message.author}!`);
  },
};
