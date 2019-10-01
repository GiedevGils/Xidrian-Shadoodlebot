import { Command } from '../command';

export class SocialCommand implements Command {
    public commandName: string = 'social';
    public commandDescription: string = 'This command lists the social media channels of Xidrian.';
    public run(client: any,args: any) {

        client.say(args.info.channel, 'These are Xidrian\'s social media channels: \nTwitter: https://twitter.com/xidrian\nInstagram: https://instagram.com/xidrian\n');

    }
}