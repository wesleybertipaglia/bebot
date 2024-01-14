module.exports = {
  name: "number",
  description: "Generate a random number",
  execute(message, args) {
    const min = parseInt(args[0]) || 1;
    const max = parseInt(args[1]) || 100;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    message.reply(`Your random number: ${randomNum}`);
  },
};
