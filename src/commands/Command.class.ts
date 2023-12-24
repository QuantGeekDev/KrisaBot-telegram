import { type Bot } from "grammy";

export abstract class Command {
  constructor(public bot: Bot) {}

  abstract handle(): void;
}
