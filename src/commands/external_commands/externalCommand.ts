import { Command } from '../command';
import Axios from 'axios';

export abstract class ExternalCommand implements Command {
    public readonly abstract commandName: string;
    public readonly abstract commandDescription: string;
    public abstract run(client: any, args: string[]): void;

    public sendGetRequest(uri: string, params?: any) {
        if (params == null ) {
            
            return Axios.get(uri)
                .then(res => res.data)
                .catch(err => "Something went wrong. Please try again later")
        } else {
            return Axios.get(uri, {headers: params})
                .then(res => res.data)
                .catch(err => console.log(err))
        }
    }
}