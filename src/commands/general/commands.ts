import { Command } from '../command';

export class CommandsCommand implements Command {
    public commandName: string = 'commands';
    public commandDescription: string = 'With this command, you can get all the other commands, and what they do.';
    public run(client: any,  args: any) {

        console.log(args.info);

        // Ideally do this with a whisper, but due to not being  a verified bot it has to be done this way.
        client.say(args.info.channel, "Check out the commands here: http://bit.ly/shadoodle-commands.");

    }
}