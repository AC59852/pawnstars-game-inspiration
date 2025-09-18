import type { Customer } from "$lib/types/customer";
import items from "$lib/data/items.json";
import names from "$lib/data/names.json";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateNewCustomer(): Customer {
    const firstName = names.firstNames[getRandomInt(0, names.firstNames.length - 1)];
    const lastName = names.lastNames[getRandomInt(0, names.lastNames.length - 1)];

    return {
      name: `${firstName} ${lastName}`,
      patience: getRandomInt(1, 5),
      knowledge: getRandomInt(1, 5),
      mood: getRandomInt(1, 5),
      selling: {
        item: items[getRandomInt(0, items.length - 1)],
        askingPrice: parseFloat((items[getRandomInt(0, items.length - 1)].price * (1 + Math.random())).toFixed(2))
      }
    };
  }