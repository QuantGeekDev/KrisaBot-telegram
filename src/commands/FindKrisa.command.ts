import { type Context } from "grammy";
import { Command } from "./Command.class.js";
import logger from "../logger/logger.js";
import useKrisaApi from "../services/useKrisaApi/useKrisaApi.js";

const log = logger("commands: findKrisa");
const { getKrisaById } = useKrisaApi();

export class FindKrisaCommand extends Command {
  handle() {
    this.bot.command("findKrisa", async (ctx: Context) => {
      log.info(JSON.stringify(ctx));
      const requestedKrisa = await getKrisaById("1");
      if (!requestedKrisa) {
        throw new Error(`Error getting krisa #${"1"}`);
      }

      const { imageUrl } = requestedKrisa;

      await ctx.replyWithPhoto(imageUrl);
    });
  }
}
