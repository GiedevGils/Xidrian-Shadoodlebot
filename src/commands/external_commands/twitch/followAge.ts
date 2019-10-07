import { ExternalCommand } from '../externalCommand';

export class FollowAgeCommand extends ExternalCommand {
    public commandName: string = 'followage';
    public commandDescription: string = 'This command lists the amount of time a user has been following.';

    public run(client: any,args: any) {

        let url = 
        
        
        this.sendGetRequest()

        client.say(args.info.channel, '');

    }
}