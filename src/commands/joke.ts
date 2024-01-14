module.exports = {
  name: "joke",
  description: "Get a random joke!",
  execute(message, args) {
    const jokes = [
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why don't scientists trust atoms? Because they make up everything!",
      "What do you call fake spaghetti? An impasta!",
    ];

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    message.reply(randomJoke);
  },
};
