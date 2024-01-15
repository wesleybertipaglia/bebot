export interface Command {
  name: string | undefined;
  description: string | undefined;
  execute(message: any, args: any, commands: any): void;
}
