import { type ConfigServiceInterface } from "./services/config/config.interface.js";
import ConfigService from "./services/config/config.service.js";
import { Telegraf } from "telegraf";
import { type BotContextInterface } from "./services/context/context.interface.js";
import { type Command } from "./commands/command.class.js";
import { StartCommand } from "./commands/start.command.js";
import LocalSession from "telegraf-session-local";

class Bot {
  bot: Telegraf<BotContextInterface>;
  commands: Command[] = [];
  constructor(private readonly configService: ConfigServiceInterface) {
    this.bot = new Telegraf<BotContextInterface>(
      this.configService.get("TELEGRAM_TOKEN"),
    );

    this.bot.use(
      new LocalSession({ database: "krisaSession.json" }).middleware(),
    );
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
