// Import "dotenv/config";
import axios from "axios";
import {
  type TypedData,
  type KrisaStructure,
  type TarotStructure,
} from "../../types";
import chalk from "chalk";
import debugCreator from "debug";

const krisaApiUrl = process.env.KRISA_API;
const debug = debugCreator("app:services:useKrisaApi");
axios.defaults.baseURL = krisaApiUrl;

const useKrisaApi = () => {
  const getTarot = async (): Promise<TarotStructure[] | void> => {
    try {
      const {
        data: { tarot },
      }: {
        data: {
          tarot: any[];
        };
      } = await axios.get("tarot");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return tarot;
    } catch (error) {
      debug(chalk.red((error as Error).message));
    }
  };

  const getKrisas = async (): Promise<KrisaStructure[] | void> => {
    try {
      const {
        data: { krisas },
      }: {
        data: {
          krisas: KrisaStructure[];
        };
      } = await axios.get("krisas");
      return krisas;
    } catch (error) {
      debug(chalk.red((error as Error).message));
    }
  };

  const getKrisaById = async (id: string): Promise<KrisaStructure | void> => {
    try {
      const {
        data: { krisa },
      }: TypedData<KrisaStructure> = await axios.get(`krisas/${id}`);
      return krisa;
    } catch (error) {
      debug(chalk.red((error as Error).message));
    }
  };

  return { getKrisas, getKrisaById, getTarot };
};

export default useKrisaApi;
