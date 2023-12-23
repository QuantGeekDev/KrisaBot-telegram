import { type Context } from "grammy";
import { Command } from "./Command.class.js";
import logger from "../logger/logger.js";
import getRandomKrisa from "../services/krisa/getRandomKrisa.js";

const log = logger("commands: findKrisa");

export class FindKrisaCommand extends Command {
  handle() {
    this.bot.command("findKrisa", async (ctx: Context) => {
      log.info(JSON.stringify(ctx));
      const randomKrisa = await getRandomKrisa();
      if (!randomKrisa) {
        throw new Error("Error getting krisa");
      }

      const { imageUrl } = randomKrisa;

      await ctx.replyWithPhoto(imageUrl);
    });
  }
}
