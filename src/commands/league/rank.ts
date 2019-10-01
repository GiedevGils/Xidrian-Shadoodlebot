import secrets from '../../config/secrets.json';
import settings from '../../config/settings.json';

import { LeagueCommand } from './leagueCommand';


export class RankCommand extends LeagueCommand {
    public commandName: string = 'rank';
    public commandDescription: string = 'This command gets the summoner rank of Xidrian.';

    public run(client: any, args: any) {

        let uri: string = settings.riot_api + "/lol/league/v4/entries/by-summoner/" + secrets.league_account_id + "?api_key=" + secrets.dev_riot_games_api_token;

        this.sendGetRequest(uri)
            .then(result => {
                let filteredResult = result.filter( (res: any) =>  res.queueType == "RANKED_SOLO_5x5");

                // Capatalize the result properly
                let rank = filteredResult[0].tier.charAt(0) // Keep only the first letter
                + filteredResult[0].tier.toLowerCase().substring(1) // Add the rest back on but then lower case
                + " " + filteredResult[0].rank; // Add the number at the end
                
                client.say(args.info.channel, "Xidrian's rank in League for Ranked SoloQ is currently: " + rank + ".");
            })
            .catch(err => console.log(err));


        
    }
}