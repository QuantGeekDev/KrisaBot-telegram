import debugCreator from "debug";
import { type TarotStructure } from "../../types.js";
import useKrisaApi from "../useKrisaApi/useKrisaApi.js";
import chalk from "chalk";

const { getTarot } = useKrisaApi();
const debug = debugCreator("services: krisa: getRandomKrisa");

const getRandomTarot = async (): Promise<TarotStructure | undefined> => {
  let tarot: TarotStructure[];
  try {
    tarot = (await getTarot()) as TarotStructure[];
    if (!tarot) {
      throw new Error("Error getting tarot from API");
    }
  } catch (error) {
    debug(chalk.red((error as Error).message));
    throw new Error("Error getting tarot from API");
  }

  const tarotAmount: number = tarot.length;
  const randomNumber = Math.floor(Math.random() * tarotAmount);
  try {
    const randomTarot = tarot[randomNumber];
    return randomTarot;
  } catch (error) {
    debug(chalk.red((error as Error).message));
  }
};

export default getRandomTarot;
