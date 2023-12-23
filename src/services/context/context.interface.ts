import { type Context } from "grammy";

export interface SessionData {
  krisaLikes: boolean;
}

export interface BotContextInterface extends Context {
  session: SessionData;
}
