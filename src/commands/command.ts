export interface Command {
    commandName: string,
    commandDescription: string,
    run(client: any, channel: any, args: string[]): void;
}