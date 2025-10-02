export type Customer = {
  id: string;
  name: string;
  patience: number;
  knowledge: number;
  mood: number;
  selling: {
    item: {
      id: string;
      name: string;
      description: string;
      price: number;
      categories: string[];
      condition: string;
      rarity: string;
      image: string;
      space: number;
      placedOn: string;
    };
    askingPrice: number;
  };
}