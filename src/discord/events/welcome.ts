import { User } from "discord.js";

function welcomeMessage(user: User): string {
  return `Welcome, ${user.username}, to our server! We're glad to have you here.`;
}
