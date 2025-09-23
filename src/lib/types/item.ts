export type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  categories: string[];
  condition: string;
  image?: string;
  placedOn: string;
  rarity: string;
  space: number;
}