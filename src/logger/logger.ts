import chalk from "chalk";
import debugCreator from "debug";

const logger = (level: string): void => {
  const debug: debugCreator.Debugger = debugCreator(`${level}`);

  const info = (text: string) => {
    debug(chalk.blue(text));
  };

  const success = (text: string) => {
    debug(chalk.green(text));
  };

  const warn = (text: string) => {
    debug(chalk.yellow(text));
  };

  const error = (text: string) => {
    debug(chalk.red(text));
  };

  return { info, success, warn, error };
};

export default logger;
