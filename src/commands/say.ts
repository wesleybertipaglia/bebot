module.exports = {
  name: "say",
  description: "Repeat what you say",
  execute(message, args) {
    const text = args.join(" ");
    message.channel.send(text);
  },
};
