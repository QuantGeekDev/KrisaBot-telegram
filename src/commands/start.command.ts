import { type Context } from "grammy";
import { Command } from "./command.class.js";
import logger from "../logger/logger.js";

const log = logger("commands: randomKrisa");

export class StartCommand extends Command {
  handle() {
    this.bot.command("start", async (ctx: Context) => {
      log.info(JSON.stringify(ctx));

      await ctx.reply("Wubbalubbadubdub");
    });
  }
}
