import { Command } from '../command';

export class GreetCommand implements Command {
    public commandName: string = 'greet';
    public commandDescription: string = 'This is a simple test command to see if the bot is working.';
    public run(client: any, args: any) {

        client.say(args.info.channel, 'The bot is working!');

    }
}