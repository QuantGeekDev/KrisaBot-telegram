import { Command } from "./Command.class.js";
import useKrisaApi from "../services/useKrisaApi/useKrisaApi.js";
import debugCreator from "debug";
import chalk from "chalk";

const { getKrisaById } = useKrisaApi();

const debug = debugCreator("app:commands:findkrisacommand");

export class FindKrisaCommand extends Command {
  handle = async () => {
    this.bot.command("findkrisa", async (ctx) => {
      const krisaId = ctx.match;
      if (!krisaId) {
        debug(chalk.red("Missing krisa number"));
        await ctx.reply("Please enter a krisa number to find");
        return;
      }

      const requestedKrisa = await getKrisaById(krisaId)!;
      if (!requestedKrisa) {
        debug(chalk.red(`Error getting Krisa #${krisaId}`));
        await ctx.reply(`Error getting Krisa #${krisaId}`);
        return;
      }

      const { imageUrl } = requestedKrisa;

      await ctx.replyWithPhoto(imageUrl);
    });
  };
}
