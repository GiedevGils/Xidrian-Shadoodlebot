import { Command } from './command';
import { enabledCommands } from './enabledCommands';

export class CommandHandler {

    private commands: Command[];

    constructor() {
        this.commands = enabledCommands;
    }

    public async handleMessage(client: any, args: any): Promise<void> {
        
        const command = this.commands.find(cmd => cmd.commandName === args.info.command);

        if (!command) return;

        command.run(client, args.info.channel, args);

    }
}