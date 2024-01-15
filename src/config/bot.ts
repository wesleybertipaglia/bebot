import { Bot } from "../types/Bot";

const bot: Bot = {
  id: process.env.BOT_ID ?? "",
  token: process.env.BOT_TOKEN ?? "",
  prefix: process.env.BOT_PREFIX ?? "!",
};

if (bot.id != "" && bot.token != "") {
  if (bot.id != "") {
    console.error("Bot id not found!");
    process.exit(1);
  }
  if (bot.token != "") {
    console.error("Bot token not found!");
    process.exit(1);
  }
}

export default bot;
