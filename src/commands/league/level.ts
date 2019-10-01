import secrets from '../../config/secrets.json';
import settings from '../../config/settings.json';

import { LeagueCommand } from './leagueCommand';


export class LevelCommand extends LeagueCommand {
    public commandName: string = 'level';
    public commandDescription: string = 'This command gets the summoner level of Xidrian.';
    public run(client: any, args: any) {

        let uri:string = settings.riot_api + '/lol/summoner/v4/summoners/by-name/xidrian?api_key=' + secrets.dev_riot_games_api_token;

        this.sendGetRequest(uri)
            .then(result => {
                client.say(args.info.channel, "Xidrian has a summoner level of " + result.summonerLevel + ".");
            })
            .catch(err => console.log(err));

    }
}