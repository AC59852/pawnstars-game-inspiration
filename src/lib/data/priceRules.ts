export type PriceRule = {
  belowChance: number;
  belowRange?: [number, number];
  baseChance?: number;
  aboveRange?: [number, number];
};

export const basePricingRules: Record<number, PriceRule> = {
  1: { belowChance: 1.0, belowRange: [0.5, 0.95] },
  2: { belowChance: 0.35, belowRange: [0.85, 0.99], aboveRange: [1.0, 1.1] },
  3: { belowChance: 0.0, baseChance: 0.15, aboveRange: [1.05, 1.25] },
  4: { belowChance: 0.0, baseChance: 0.1,  aboveRange: [1.1, 1.35] },
  5: { belowChance: 0.0, baseChance: 0.0,  aboveRange: [1.15, 1.5] }
};

export type RuleModifier = (rule: PriceRule) => PriceRule;
