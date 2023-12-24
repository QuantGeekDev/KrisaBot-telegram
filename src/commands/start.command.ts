import { Command } from "./Command.class.js";

export class StartCommand extends Command {
  handle() {
    const welcomeText = "🐀🧀 \n Welcome to the krisa's lair!";

    this.bot.command("start", async (ctx) => ctx.reply(welcomeText));
  }
}
