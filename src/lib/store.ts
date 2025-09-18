import { writable } from "svelte/store";
import type { Customer } from "$lib/types/customer";


export const money = writable(1000);
export const inventory = writable([]);
export const customers = writable<Customer[]>([]);
export const currentCustomer = writable(null);
export const negotiationState = writable({
  active: false,
  currentCustomer: null,
  item: null,
  offer: null,
  counterOffer: null,
});