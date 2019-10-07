# ShadoodleBot

*Current version: 0.4.0*

This bot is still in development. It's made for the Twitch streamer [Xidrian](https://twitch.tv/xidrian). It will consist of some bare-bones commands which other bots cannot provide.



This bot is made using Node.JS and Typescript, by following the guide on the [Twitch Developer](https://dev.twitch.tv/docs/irc/) page.

---

## Commands

### Basic Commands
- `!greet` - A simple greeting to test if the bot is working
- `!rules` - Write the rules out in the chat!
- `!commands` - A link to this page with a list of all the commands.

### League of Legends Commands
- `!rank` - Get the rank of Xidrian
- `!level` - Get the summoner level of Xidrian

### Twitch Commands
- `!followage` - Get the amount of time a user has been following.

---

## Technical Documentation

### Packages
This project is made by using various packages that allow the development process to be easier. These include:

- [**Typescript**](https://www.npmjs.com/package/typescript) - An NPM package to add some Object-Oriented functionality to Javascript, which made the development process a lot easier.
- [**Axios**](https://www.npmjs.com/package/axios) - A package to easily send HTTP request in the form of a promise. This package is used to send requests to external APIs.
- [**tmi.js**](https://www.npmjs.com/package/tmi.js) - A Javascript library that allows easy message sending to the Twitch client. 


### APIs
The project uses various APIs to receive all the information that is used by the various commands. These include:

- [**Riot Games**](https://developer.riotgames.com/apis) - The Riot Games API is used to receive information about League of Legends accounts, and is used for the specific League of Legends commands.


### Technical choices
For the ease of use with the different commands, it was chosen to put each command in a separate file. This way, each file with have a single responsibility. To avoid code duplication, abstract classes and interfaces allow hierarchy and inherited methods functions. An example of this is the `ExternalCommand` file, in the `src/commands/external_commands` folder. This abstract class has an added method for external get commands.


---

## Contributors
- [Koen Kamman](https://github.com/KoenKamman)  
  Helped with optimizing some of the  code.