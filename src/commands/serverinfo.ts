module.exports = {
  name: "serverinfo",
  description: "Display server information",
  execute(message, args) {
    const serverInfo = `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`;
    message.channel.send(serverInfo);
  },
};
