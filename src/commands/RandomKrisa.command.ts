import { Command } from "./Command.class.js";
import getRandomKrisa from "../services/krisa/getRandomKrisa.js";
import moreKrisaMenu from "../menus/startMenu/moreKrisaMenu.js";

export class RandomKrisaCommand extends Command {
  handle() {
    this.bot.command("randomkrisa", async (ctx): Promise<void> => {
      const randomKrisa = (await getRandomKrisa())!;
      if (!randomKrisa) {
        throw new Error("Error getting krisa");
      }

      const { imageUrl, krisaNumber } = randomKrisa;

      await ctx.replyWithPhoto(imageUrl, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        reply_markup: moreKrisaMenu,
        caption: `Krisa #${krisaNumber}`,
      });
    });
  }
}
