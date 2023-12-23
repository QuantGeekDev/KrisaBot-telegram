import { type DotenvParseOutput, config } from "dotenv";
import { type ConfigServiceInterface } from "./config.interface.js";
import logger from "../../logger/logger.js";

class ConfigService implements ConfigServiceInterface {
  public logger = logger("config:");
  private readonly config: DotenvParseOutput;

  constructor() {
    const { error, parsed } = config();
    if (error) {
      this.logger.error(error.message);
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
