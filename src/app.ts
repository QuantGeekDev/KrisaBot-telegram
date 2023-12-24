import "dotenv/config.js";
import { type ConfigServiceInterface } from "./services/config/config.interface.js";
import ConfigService from "./services/config/config.service.js";
import { type Command } from "./commands/Command.class.js";
import { StartCommand } from "./commands/start.command.js";
import { Bot as GrammyBot } from "grammy";
import { RandomKrisaCommand } from "./commands/RandomKrisa.command.js";
import { FindKrisaCommand } from "./commands/FindKrisa.command.js";
import commandDescriptions from "./services/commandDescriptions/commandDescriptions.js";
import debugCreator from "debug";
import chalk from "chalk";

const debug = debugCreator("app:");

class Bot {
  bot: GrammyBot;
  commands: Command[] = [];
  constructor(private readonly configService: ConfigServiceInterface) {
    const telegramToken = this.configService.get("TELEGRAM_TOKEN");
    this.bot = new GrammyBot(telegramToken);
  }

  init = async () => {
    this.commands = [
      new StartCommand(this.bot),
      new RandomKrisaCommand(this.bot),
      new FindKrisaCommand(this.bot),
    ];
    for (const command of this.commands) {
      command.handle();
    }

    await this.bot.api.setMyCommands(commandDescriptions);

    debug(chalk.green("Launching Krisa Bot"));
    await this.bot.start();
  };
}

const configService = new ConfigService();
const bot = new Bot(configService);

await bot.init();
