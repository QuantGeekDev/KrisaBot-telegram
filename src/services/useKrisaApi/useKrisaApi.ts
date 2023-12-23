// Import "dotenv/config";
import axios from "axios";
import { type KrisaStructure } from "../../types";
import logger from "../../logger/logger.js";

const krisaApiUrl = process.env.KRISA_API;

axios.defaults.baseURL = krisaApiUrl;

const log = logger("api:");

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
      log.error((error as Error).message);
    }
  };

  return { getKrisas };
};

export default useKrisaApi;
