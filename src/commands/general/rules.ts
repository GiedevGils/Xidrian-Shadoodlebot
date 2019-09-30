import { Command } from '../command';

export class RulesCommand implements Command {
    public commandName: string = 'rules';
    public commandDescription: string = 'This command lists the base rules.';
    public run(client: any,args: any) {

        client.say(args.info.channel, 'Welcome to the Shadoodle! No amount of retardation is off limits, show us your best :)');

    }
}