import client from "./client";
import bot from "../../config/bot";

function getCommand(message: any) {
  return message.content.split(" ")[0].slice(1);
}

function getArgs(message: any) {
  return message
    .slice(bot.prefix?.length ?? 0)
    .trim()
    .split(/ +/);
}

function getCommandHandler(command: any) {
  return client.commands.get(command);
}

function executeCommand(commandHandler: any, message: any) {
  commandHandler.execute(message);
}

function isCommand(command: any) {
  return client.commands.has(command);
}

function messageHandler(message: any) {
  const command = getCommand(message);
  const args = getArgs(message);
  const commandHandler = getCommandHandler(command);

  if (isCommand(command)) {
    executeCommand(commandHandler, message);
  }
}

export default messageHandler;
