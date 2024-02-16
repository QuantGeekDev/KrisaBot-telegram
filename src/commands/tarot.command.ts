import { Command } from "./Command.class.js";
import getRandomTarot from "../services/krisa/getRandomTarot.js";
import moreTarotMenu from "../menus/startMenu/moreTarotMenu.js";

export class TarotCommand extends Command {
  handle() {
    this.bot.command("tarot", async (ctx): Promise<void> => {
      const randomTarot = (await getRandomTarot())!;
      if (!randomTarot) {
        throw new Error("Error getting krisa");
      }

      const { imageUrl, fate } = randomTarot;

      await ctx.replyWithPhoto(imageUrl, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        reply_markup: moreTarotMenu,
        caption: fate,
      });
    });
  }
}
