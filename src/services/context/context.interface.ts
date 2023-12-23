import { type Context } from "telegraf";

export interface SessionData {
  krisaLikes: boolean;
}

export interface BotContextInterface extends Context {
  session: SessionData;
}
