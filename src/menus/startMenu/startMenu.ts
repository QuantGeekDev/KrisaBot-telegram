/* eslint-disable @typescript-eslint/naming-convention */
import { Menu } from "@grammyjs/menu";
import getRandomKrisa from "../../services/krisa/getRandomKrisa.js";
import moreKrisaMenu from "./moreKrisaMenu.js";

const button1Label = "🐀 Get Random Krisa";
const button2Label = "🌐 Krisa Website";
const krisaWebsiteUrl = "https://crazykrisa.netlify.app/home";
const button3Label = "💎 Krisa NFT Collection";
const krisaNftCollectionUrl =
  "https://getgems.io/collection/EQBxph2SAh7TPMThKd29_nx18uuhrc3RUsRqswlQgAWK4HoB";

export const startMenu = new Menu("Start-Menu")
  .text(button1Label, async (ctx) => {
    const randomKrisa = await getRandomKrisa();
    if (!randomKrisa) {
      return;
    }

    const { imageUrl, krisaNumber } = randomKrisa;

    await ctx.replyWithPhoto(imageUrl, {
      caption: `Krisa #${krisaNumber}`,
      reply_markup: moreKrisaMenu,
    });
  })
  .row()
  .url(button2Label, krisaWebsiteUrl)
  .row()
  .url(button3Label, krisaNftCollectionUrl);
