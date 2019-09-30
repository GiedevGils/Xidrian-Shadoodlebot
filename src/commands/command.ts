export interface Command {
    commandName: string,
    commandDescription: string,
    run(client: any, args: string[]): void;
}