import { GreetCommand } from './general/greet';

const commands = [GreetCommand]

export const enabledCommands = commands.map( command => new command() );