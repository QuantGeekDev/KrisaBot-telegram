import { Markup } from "telegraf";
import { Command } from "./command.class";
import { type BotContextInterface } from "../services/context/context.interface";

const likeKrisaButton = Markup.button.callback("🐀", "krisa_like");
const dislikeKrisaButton = Markup.button.callback("👿", "krisa_dislike");

const likeKrisaAction = async (ctx: BotContextInterface) => {
  ctx.session.krisaLikes = true;
  await ctx.editMessageText("🐀Nice! Enjoy the krisa then");
};

const dislikeKrisaAction = async (ctx: BotContextInterface) => {
  ctx.session.krisaLikes = false;
  await ctx.editMessageText("Fuck you then! ");
};

export class StartCommand extends Command {
  handle(): void {
    this.bot.start(async (ctx) => {
      console.log(ctx.session);
      await ctx.reply(
        "Do you like the krisa?",
        Markup.inlineKeyboard([likeKrisaButton, dislikeKrisaButton]),
      );
    });

    this.bot.action("krisa_like", async (ctx) => {
      await likeKrisaAction(ctx);
    });

    this.bot.action("krisa_dislike", async (ctx) => {
      await dislikeKrisaAction(ctx);
    });
  }
}
