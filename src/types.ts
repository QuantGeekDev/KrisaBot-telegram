export interface KrisaStructure {
  _id: string;
  krisaNumber: number;
  imageUrl: string;
}

export interface TarotStructure {
  _id: string;
  tarotNumber: number;
  imageUrl: string;
  fate: string;
}

export interface TypedData<Type> {
  data: { krisa: Type };
}
