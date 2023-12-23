import logger from "../../logger/logger.js";
import { type KrisaStructure } from "../../types.js";
import useKrisaApi from "../useKrisaApi/useKrisaApi.js";

const { getKrisas } = useKrisaApi();

const log = logger("services: krisa: getRandomKrisa");

const getRandomKrisa = async (): Promise<KrisaStructure | undefined> => {
  let krisas: KrisaStructure[];
  try {
    krisas = (await getKrisas()) as KrisaStructure[];
    if (!krisas) {
      throw new Error("Error getting krisas from API");
    }
  } catch (error) {
    log.error((error as Error).message);
    throw new Error("Error getting krisas from API");
  }

  const krisasAmount: number = krisas.length;
  const randomNumber = Math.floor(Math.random() * krisasAmount);
  try {
    const randomKrisa = krisas[randomNumber];
    return randomKrisa;
  } catch (error) {
    log.error((error as Error).message);
  }
};

export default getRandomKrisa;
