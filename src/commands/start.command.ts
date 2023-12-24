/* eslint-disable @typescript-eslint/naming-convention */
import { startMenu } from "../menus/startMenu/startMenu.js";
import { Command } from "./Command.class.js";

export class StartCommand extends Command {
  handle() {
    const welcomeText = "🐀🧀 \n Welcome to the krisa's lair!";

    this.bot.command("start", async (ctx) =>
      ctx.reply(welcomeText, {
        reply_markup: startMenu,
      }),
    );
  }
}
