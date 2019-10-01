import { GreetCommand } from './general/greet';
import { RulesCommand } from './general/rules';
import { CommandsCommand } from './general/commands';
import { LevelCommand } from './external_commands/league/level';
import { RankCommand } from './external_commands/league/rank';

const commands = [GreetCommand, RulesCommand, CommandsCommand, // General commands
                    LevelCommand, RankCommand] // League Commands

export const enabledCommands = commands.map( command => new command() );