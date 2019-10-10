import { Command } from '../command';

export class GreetCommand implements Command {
    public commandName: string = 'outro';
    public commandDescription: string = 'This command writes a simple outro message to the chat.';
    public run(client: any, args: any) {

        client.say(args.info.channel, 'Thank you for joining in today! We hope to see you next time!');

    }
}