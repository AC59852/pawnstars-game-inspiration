import { writable, readable } from "svelte/store";
import type { Customer } from "$lib/types/customer";
import type { Item } from "$lib/types/item";


export const money = writable(1000);
export const inventory = writable([]);


export const customers = writable<Customer[]>([]);
export const customerTimer = readable<NodeJS.Timeout | null>(null);

export const negotiationState = writable({
  active: false,
  currentCustomer: <Customer | null>null,
  item: <Item | null>null,
  offer: null,
  counterOffer: null,
});