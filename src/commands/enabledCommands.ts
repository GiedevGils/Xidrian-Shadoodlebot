import { GreetCommand } from './general/greet';
import { RulesCommand } from './general/rules';
import { CommandsCommand } from './general/commands';

const commands = [GreetCommand, RulesCommand, CommandsCommand]

export const enabledCommands = commands.map( command => new command() );