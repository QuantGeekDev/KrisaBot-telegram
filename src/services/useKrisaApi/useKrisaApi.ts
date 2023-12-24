// Import "dotenv/config";
import axios from "axios";
import { type TypedData, type KrisaStructure } from "../../types";
import chalk from "chalk";
import debugCreator from "debug";

const krisaApiUrl = process.env.KRISA_API;
const debug = debugCreator("app:services:useKrisaApi");
axios.defaults.baseURL = krisaApiUrl;

const useKrisaApi = () => {
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

  return { getKrisas, getKrisaById };
};

export default useKrisaApi;
