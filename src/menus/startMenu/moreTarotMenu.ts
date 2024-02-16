import { Menu } from "@grammyjs/menu";
import getRandomTarot from "../../services/krisa/getRandomTarot.js";

const button1Label = "💫Pull another card";

const moreTarotMenu = new Menu("More-tarot").text(button1Label, async (ctx) => {
  const randomTarot = await getRandomTarot();
  if (!randomTarot) {
    await ctx.reply("Error getting tarot");
    return;
  }

  const { imageUrl, fate } = randomTarot;

  await ctx.replyWithPhoto(imageUrl, {
    caption: fate,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    reply_markup: moreTarotMenu,
  });
});

export default moreTarotMenu;
