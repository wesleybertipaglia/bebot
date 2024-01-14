module.exports = {
  name: "userinfo",
  description: "Display user information",
  execute(message, args) {
    const userInfo = `Your username: ${message.author.username}\nYour ID: ${message.author.id}`;
    message.channel.send(userInfo);
  },
};
