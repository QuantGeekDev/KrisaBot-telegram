import { type Context } from "grammy";
import { Command } from "./Command.class.js";

export class StartCommand extends Command {
  handle() {
    this.bot.command("start", async (ctx: Context) => {
      await ctx.reply("🐀🧀 \n Welcome to the krisa's lair!");
    });
  }
}
