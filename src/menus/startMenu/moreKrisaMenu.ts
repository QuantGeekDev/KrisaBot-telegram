import { Menu } from "@grammyjs/menu";
import getRandomKrisa from "../../services/krisa/getRandomKrisa.js";

const button1Label = "🎲🐀 Next Krisa";

const moreKrisaMenu = new Menu("More-Krisa").text(button1Label, async (ctx) => {
  const randomKrisa = await getRandomKrisa();
  if (!randomKrisa) {
    return;
  }

  const { imageUrl, krisaNumber } = randomKrisa;

  await ctx.replyWithPhoto(imageUrl, {
    caption: `Krisa #${krisaNumber}`,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    reply_markup: moreKrisaMenu,
  });
});

export default moreKrisaMenu;
