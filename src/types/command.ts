interface Command {
  name: string | undefined;
  description: string | undefined;
  execute(message: any, args: any): void;
}

export default Command;
