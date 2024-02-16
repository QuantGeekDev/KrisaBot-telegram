import getRandomTarot from "./getRandomTarot.js";

const getRandomTarotImage = async () => {
  const randomTarot = await getRandomTarot();
  if (!randomTarot) {
    throw new Error("Error getting random krisa");
  }

  const { imageUrl } = randomTarot;
  return imageUrl;
};

export default getRandomTarotImage;
