import { Command } from "../../types/Command";
import bot from "../../config/bot";

export const invite: Command = {
  name: "invite",
  description: "Get an invite link for the bot",
  execute(message) {
    const inviteLink = `https://discord.com/oauth2/authorize?client_id=${bot.id}&scope=bot+identify+guilds+email+applications.commands&permissions=8`;
    message.reply(
      `Invite me to your server using this link: [invite link](${inviteLink})`
    );
  },
};
