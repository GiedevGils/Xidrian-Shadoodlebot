import { ExternalCommand } from '../externalCommand';
import settings from '../../../config/settings.json';
import secrets from '../../../config/secrets.json';

export class ScheduleCommand extends ExternalCommand {
    public commandName: string = 'schedule';
    public commandDescription: string = 'Retrieve the schedule from Twitter.';

    public run(client: any, args: any) {
        let url = 

        this.sendGetRequest(url)
            .then( (res: any) => {
                client.say(args.info.channel, "@" + res + ".");
            })
            .catch(err => console.log(err));
    }
}