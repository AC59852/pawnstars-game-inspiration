import { json } from "@sveltejs/kit";
import { generateItem } from "$lib/server/itemGenerator";

export function GET() {
  const newItem = generateItem();
  return json(newItem);
}