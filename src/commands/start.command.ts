import { type Context } from "grammy";
import { Command } from "./command.class.js";

export class StartCommand extends Command {
  handle() {
    this.bot.command("start", async (ctx: Context) => {
      console.log(ctx);
      await ctx.reply("Wubbalubbadubdub");
    });
  }
}
