import type { Customer } from "$lib/types/customer";
import { generateItem } from "./itemGenerator";
import names from "$lib/data/names.json";
import { basePricingRules, type PriceRule, type RuleModifier } from "$lib/data/priceRules";

function randomInRange([min, max]: [number, number]): number {
  return min + Math.random() * (max - min);
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPricingRule(knowledge: number, modifiers?: RuleModifier[]): PriceRule {
  let rule = {...basePricingRules[knowledge] || basePricingRules[3]};

  if (modifiers) {
    for (const modify of modifiers) {
      rule = modify(rule);
    }
  }

  return rule;
}

export function generateNewCustomer(): Customer {
  const firstName = names.firstNames[getRandomInt(0, names.firstNames.length - 1)];
  const lastName = names.lastNames[getRandomInt(0, names.lastNames.length - 1)];

  const item = generateItem();
  const knowledge = getRandomInt(1, 5);
  const mood = getRandomInt(1, 5);
  const patience = getRandomInt(1, 5);


  function calculateAskingPrice(basePrice: number, knowledge: number, modifiers?: RuleModifier[]): number {
    const rule = getPricingRule(knowledge, modifiers);
    const roll = Math.random();

    if (rule.belowChance && roll < rule.belowChance) { return +(basePrice * randomInRange(rule.belowRange!)).toFixed(0); }

    if (rule.baseChance && roll < (rule.belowChance ?? 0) + rule.baseChance) { return basePrice; }

    return +(basePrice * randomInRange(rule.aboveRange!)).toFixed(0);
  }

  return {
    id: crypto.randomUUID(),
    name: `${firstName} ${lastName}`,
    patience: patience,
    knowledge: knowledge,
    mood: mood,
    selling: {
      item: item,
      askingPrice: calculateAskingPrice(item.price, knowledge)
    }
  };
}