import { ExternalCommand } from '../externalCommand';
import settings from '../../../config/settings.json';
import secrets from '../../../config/secrets.json';

export class ScheduleCommand extends ExternalCommand {
    public commandName: string = 'schedule';
    public commandDescription: string = 'Retrieve the schedule from Twitter.';

    public run(client: any, args: any) {
        let url = settings.twitter_api + 'stasus/user_timeline.json?screen_name=xidrian';

        let header = {'Authorization': 'OAuth oauth_consumer_key="' + secrets.twitter_consumer_key + '",oauth_token="' + secrets.twitter_consumer_secret + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1570553036",oauth_nonce="SyEEBlyTKIE",oauth_version="1.0",oauth_signature="dsK85MjlPtOkJqZG9c3o9kbtZi4%3D"'}

        this.sendGetRequest(url)
            .then( (res: any) => {
                client.say(args.info.channel, "@" + res + ".");
            })
            .catch(err => console.log(err));
    }
}