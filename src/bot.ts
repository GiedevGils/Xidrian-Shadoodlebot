import tmi from 'tmi.js';
import secret from './config/secrets.json';
import settings from './config/settings.json';

import { CommandHandler } from './commands/commandManager';

const prefix = settings.prefix;
const commandHandler = new CommandHandler();

// Connection options
const options = {
    identity: {
        username: secret.identity,
        password: secret.twitch_token
    },
    channels: [
        secret.channel_name
    ]
};

// Create a client
const chatClient = tmi.client(options);

chatClient.on('message', onMessageHandler);
chatClient.on('connected', onConnectedHandler);

chatClient.connect();


function onConnectedHandler(addr: string, port: number) {
    console.log(`Connected to ${addr} at port ${port}.`);
}


function onMessageHandler(channel: any, user: any, msg: any, self: any) {
    
    if (self || !msg.startsWith(prefix) ) return; // Ignore any messages that aren't sent by themselves

    

    const args = msg.slice(prefix.length).split(/ +/); // Split on spaces
    const command = args.shift().toLowerCase();

    let options = {
        info: {
            channel: channel,
            user: user,
            command: command,
            self: self
        },
        args: args
    }


    commandHandler.handleMessage(chatClient, options);

}