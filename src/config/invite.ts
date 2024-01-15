import { Api } from "../types/Api";
import bot from "./bot";

export const inviteConfig: Api = {
  baseUrl: "https://discord.com/oauth2/authorize",
  parameters: {
    client_id: bot.id,
    scope: "bot+identify+guilds+email+applications.commands",
    permission: "8",
  },
  key: undefined,
};
