import dotenv from "dotenv";
import client from "./discord/handlers/client";
import bot from "./config/bot";

// dotenv
dotenv.config();

// login
client.login(bot.token);
