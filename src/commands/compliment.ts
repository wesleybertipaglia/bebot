const compliments = require("../data/compliments.json");

module.exports = {
  name: "compliment",
  description: "Receive a compliment!",
  compliments: compliments,
  execute(message, args) {
    const randomCompliment =
      compliments[Math.floor(Math.random() * this.compliments.length)];
    message.reply(randomCompliment);
  },
};
