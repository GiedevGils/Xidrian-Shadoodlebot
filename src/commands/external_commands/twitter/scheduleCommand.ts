import { ExternalCommand } from '../externalCommand';
import settings from '../../../config/settings.json';
import secrets from '../../../config/secrets.json';

export class ScheduleCommand extends ExternalCommand {
    public commandName: string = 'schedule';
    public commandDescription: string = 'Retrieve the schedule from Twitter.';

    public run(client: any, args: any) {
        let url = settings.twitter_api + 'statuses/user_timeline.json'+
        '?screen_name=xidrian' +        // We want feed from the user @xidrian
        '&exclude_replies=true' +       // We don't want replies
        '&include_rts=false' +          // We don't want retweets
        '&trim_user=true' +             // We don't need additional user info 
        '&tweet_mode=extended';         // We do the whole tweet

        let header = {
            'Authorization': 'Bearer ' + secrets.twitter_acccess_token 
        }

        this.sendGetRequest(url, header)
            .then( (res: any) => {

                let tweetsWithSchedules: any[] = [];

                // If the tweet has a schedule, add it to the array
                res.forEach((tweet: any ) => {
                    if (tweet.full_text.includes('schedule')) {
                        tweetsWithSchedules.push(tweet);
                    }
                });

                // The latest schedule will be the first in the list, because they are ordered by time
                let latestScheduleText: string = tweetsWithSchedules[0].full_text;


                let schedule = "This is the latest schedule I could find on Twitter: ";

                // Loop through each line in the post 
                let index = 0;
                latestScheduleText.split("\n").forEach((line) => {
                    line = line.replace("&lt;", "<");
                    let lowercaseline  = line.toLowerCase();

                    // If the first lane contains schedule, add it to the schedule that will be response
                    if (index == 0) {
                        if (lowercaseline.includes("schedule")) {
                            schedule += line;
                        }
                    }

                    // Check if a line contains a weekday, if yes, add it to the response
                    else if (lowercaseline.includes("mon") || lowercaseline.includes('tue') || lowercaseline.includes('wed') || lowercaseline.includes('thu') || lowercaseline.includes('fri') || lowercaseline.includes('sat') || lowercaseline.includes('sun')) {
                        schedule += "  |  " + line;
                    }

                    index++;
                });
                

                client.say(args.info.channel, schedule + ".");
            })
            .catch(err => console.log(err));
    }
}