import getRandomKrisa from "./getRandomKrisa.js";

const getRandomKrisaImage = async () => {
  const randomKrisa = await getRandomKrisa();
  if (!randomKrisa) {
    throw new Error("Error getting random krisa");
  }

  const { imageUrl } = randomKrisa;
  return imageUrl;
};

export default getRandomKrisaImage;
