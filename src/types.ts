export interface KrisaStructure {
  _id: string;
  krisaNumber: number;
  imageUrl: string;
}

export interface TypedData<Type> {
  data: { krisa: Type };
}
