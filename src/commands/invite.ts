const botId = process.env.BOT_ID;
if (!botId) {
  throw new Error("The bot ID is missing.");
}

module.exports = {
  name: "invite",
  description: "Get an invite link for the bot",
  botId: botId,
  execute(message, args) {
    const inviteLink = `https://discord.com/oauth2/authorize?client_id=${this.botId}&scope=bot+identify+guilds+email+applications.commands&permissions=8`;
    message.reply(`Invite me to your server using this link: ${inviteLink}`);
  },
};
