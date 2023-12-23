import { type ConfigServiceInterface } from "./services/config/config.interface";
import ConfigService from "./services/config/config.service";
import { Telegraf, session } from "telegraf";

class Bot {
  bot: Telegraf<any>;
  constructor(private readonly configService: ConfigServiceInterface) {
    this.bot = new Telegraf<any>(this.configService.get("TELEGRAM_TOKEN"));
    this.bot.use(session());
  }

  init = async () => {
    await this.bot.launch();
  };
}

const configService = new ConfigService();
const bot = new Bot(configService);

await bot.init();
