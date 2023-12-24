import debugCreator from "debug";
import { type KrisaStructure } from "../../types.js";
import useKrisaApi from "../useKrisaApi/useKrisaApi.js";
import chalk from "chalk";

const { getKrisas } = useKrisaApi();
const debug = debugCreator("services: krisa: getRandomKrisa");

const getRandomKrisa = async (): Promise<KrisaStructure | undefined> => {
  let krisas: KrisaStructure[];
  try {
    krisas = (await getKrisas()) as KrisaStructure[];
    if (!krisas) {
      throw new Error("Error getting krisas from API");
    }
  } catch (error) {
    debug(chalk.red((error as Error).message));
    throw new Error("Error getting krisas from API");
  }

  const krisasAmount: number = krisas.length;
  const randomNumber = Math.floor(Math.random() * krisasAmount);
  try {
    const randomKrisa = krisas[randomNumber];
    return randomKrisa;
  } catch (error) {
    debug(chalk.red((error as Error).message));
  }
};

export default getRandomKrisa;
