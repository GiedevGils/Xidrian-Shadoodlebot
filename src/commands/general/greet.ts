import { Command } from '../command';

export class GreetCommand implements Command {
    public commandName: string = 'greet';
    public commandDescription: string = '';
    public run(client: any, channel: any, args: string[]) {

        client.say(channel, "The bot is working!");

    }
}