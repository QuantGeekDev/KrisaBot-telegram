import { type ConfigServiceInterface } from "./services/config/config.interface.js";
import ConfigService from "./services/config/config.service.js";
import { type Command } from "./commands/command.class.js";
import { StartCommand } from "./commands/start.command.js";
import { Bot as GrammyBot } from "grammy";

class Bot {
  bot: GrammyBot;
  commands: Command[] = [];
  constructor(private readonly configService: ConfigServiceInterface) {
    const telegramToken = this.configService.get("TELEGRAM_TOKEN");
    this.bot = new GrammyBot(telegramToken);
  }

  init = async () => {
    this.commands = [new StartCommand(this.bot)];
    for (const command of this.commands) {
      command.handle();
    }

    await this.bot.start();
  };
}

const configService = new ConfigService();
const bot = new Bot(configService);

await bot.init();
