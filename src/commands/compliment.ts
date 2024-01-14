module.exports = {
  name: "compliment",
  description: "Receive a compliment!",
  execute(message, args) {
    const compliments = [
      "You are amazing!",
      "Your positivity is infectious.",
      "You make a difference in the world.",
    ];

    const randomCompliment =
      compliments[Math.floor(Math.random() * compliments.length)];
    message.reply(randomCompliment);
  },
};
