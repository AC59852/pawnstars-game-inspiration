import items from "$lib/data/items.json";
import type { Item } from "$lib/types/item";

let recentHistory: string[] = [];
const HISTORY_LIMIT = 5;

export function generateItem(): Item {
  const weighted = items.map((item) => {
    const isRecent = recentHistory.includes(item.id);
    return {
      item,
      weight: isRecent ? 1 : 5
    };
  });

  const totalWeight = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  let random = Math.random() * totalWeight;

  for (const entry of weighted) {
    if (random < entry.weight) {
      recentHistory.push(entry.item.id);
      if (recentHistory.length > HISTORY_LIMIT) {
        recentHistory.shift();
      }
      return entry.item;
    }
    random -= entry.weight;
  }

  // Fallback in case something goes wrong
  return items[0];
}