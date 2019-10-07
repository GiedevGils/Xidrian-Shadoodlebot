import { ExternalCommand } from '../externalCommand';
import settings from '../../../config/settings.json';

export class FollowAgeCommand extends ExternalCommand {
    public commandName: string = 'followage';
    public commandDescription: string = 'This command lists the amount of time a user has been following.';

    public run(client: any, args: any) {
        let url = settings["2gbe_api"] + 'following.php?user=$' + args.info.user['display-name'] + '&channel=$xidrian&format=mwdhms';

        this.sendGetRequest(url)
            .then( (res: any) => {
                client.say(args.info.channel, "@" + res + ".");
            })
            .catch(err => console.log(err));
    }
}