import { type ConfigServiceInterface } from "./services/config/config.interface.js";
import ConfigService from "./services/config/config.service.js";
import { Telegraf, session } from "telegraf";
import { type BotContextInterface } from "./services/context/context.interface.js";
import { type Command } from "./commands/command.class.js";
import { StartCommand } from "./commands/start.command.js";

class Bot {
  bot: Telegraf<BotContextInterface>;
  commands: Command[] = [];
  constructor(private readonly configService: ConfigServiceInterface) {
    this.bot = new Telegraf<BotContextInterface>(
      this.configService.get("TELEGRAM_TOKEN"),
    );

    this.bot.use(session());
  }

  init = async () => {
    this.commands = [new StartCommand(this.bot)];
    for (const command of this.commands) {
      command.handle();
    }

    await this.bot.launch();
  };
}

const configService = new ConfigService();
const bot = new Bot(configService);

await bot.init();
