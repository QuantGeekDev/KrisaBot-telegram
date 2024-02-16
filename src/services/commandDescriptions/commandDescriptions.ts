import { type BotCommand } from "@grammyjs/types";

const commandDescriptions: BotCommand[] = [
  { command: "start", description: "Start using bot" },
  { command: "randomkrisa", description: "Get a random krisa" },
  { command: "findkrisa", description: "Find krisa by krisa number" },
  { command: "tarot", description: "Find out your krisa fate" },
];

export default commandDescriptions;
