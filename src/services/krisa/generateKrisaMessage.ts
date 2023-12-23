import { type KrisaStructure } from "../../types";

const generateKrisaMessage = (krisa: KrisaStructure): string => {
  const { krisaNumber, imageUrl } = krisa;
  return `**[Krisa #${krisaNumber}](${imageUrl} "Krisa")**`;
};

export default generateKrisaMessage;
