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
                let rank = result[0].tier.toLowerCase().charAt(0).toUpperCase() 
                + result[0].tier.toLowerCase().substring(1) 
                + " " + result[0].rank;
                client.say(args.info.channel, "Xidrian's rank in League for Ranked SoloQ is currently: " + rank + ".");
            })
            .catch(err => console.log(err));

    }
}