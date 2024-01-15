import { User } from "discord.js";

function sendBirthdayMessage(user: User) {
  const birthdayMessage = `Happy birthday, ${user.username}! 🎉🎂🎈`;
}

export default sendBirthdayMessage;
