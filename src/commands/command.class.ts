import { type Telegraf } from "telegraf";
import { type BotContextInterface } from "../services/context/context.interface";

export abstract class Command {
  constructor(public bot: Telegraf<BotContextInterface>) {}

  abstract handle(): void;
}
