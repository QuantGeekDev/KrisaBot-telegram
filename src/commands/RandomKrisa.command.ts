import { type Context } from "grammy";
import { Command } from "./Command.class.js";
import getRandomKrisa from "../services/krisa/getRandomKrisa.js";

export class RandomKrisaCommand extends Command {
  handle() {
    this.bot.command("randomkrisa", async (ctx: Context) => {
      const randomKrisa = await getRandomKrisa();
      if (!randomKrisa) {
        throw new Error("Error getting krisa");
      }

      const { imageUrl } = randomKrisa;

      await ctx.replyWithPhoto(imageUrl);
    });
  }
}
