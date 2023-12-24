import { type DotenvParseOutput, config } from "dotenv";
import { type ConfigServiceInterface } from "./config.interface.js";
import debugCreator from "debug";
import chalk from "chalk";

const debug = debugCreator("app:services:configService");
class ConfigService implements ConfigServiceInterface {
  private readonly config: DotenvParseOutput;

  constructor() {
    const { error, parsed } = config();
    if (error) {
      debug(chalk.red(error.message));
      throw new Error("Couldn't find .env file");
    }

    if (!parsed) {
      throw new Error("Empty .env file");
    }

    this.config = parsed;
  }

  get = (key: string): string => {
    const response = this.config[key];
    if (!response) {
      throw new Error(`Missing key: ${key} in .env`);
    }

    return response;
  };
}

export default ConfigService;
