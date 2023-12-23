import { type Context } from "grammy";
import { Command } from "./command.class.js";
import logger from "../logger/logger.js";

const log = logger("commands: randomKrisa");
export class RandomKrisaCommand extends Command {
  handle() {
    this.bot.command("randomKrisa", async (ctx: Context) => {
      log.info(JSON.stringify(ctx));
      await ctx.replyWithPhoto(
        "https://res.cloudinary.com/derffxqir/image/upload/f_auto,q_auto/v1/krisas/dxkg50f06qsxvms6nvcx",
      );
    });
  }
}
