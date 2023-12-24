import { type Context } from "grammy";
import { Command } from "./Command.class.js";
import logger from "../logger/logger.js";
import useKrisaApi from "../services/useKrisaApi/useKrisaApi.js";

const log = logger("app:commands: findKrisa");

const { getKrisaById } = useKrisaApi();

export class FindKrisaCommand extends Command {
  handle = async () => {
    this.bot.command("findkrisa", async (ctx: Context) => {
      const krisaId = ctx.match;
      if (!krisaId) {
        log.error("Missing krisa number");
        await ctx.reply("Please enter a krisa number to find");
        return;
      }

      const requestedKrisa = await getKrisaById(krisaId as string);
      if (!requestedKrisa) {
        log.error(`Error getting Krisa #${krisaId as string}`);
        await ctx.reply(`Error getting Krisa #${krisaId as string}`);
        return;
      }

      const { imageUrl } = requestedKrisa;

      await ctx.replyWithPhoto(imageUrl);
    });
  };
}
