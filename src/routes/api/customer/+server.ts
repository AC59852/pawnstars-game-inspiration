import { json } from "@sveltejs/kit";
import { generateNewCustomer } from "$lib/server/customerGenerator";

export function GET() {
  const newCustomer = generateNewCustomer();
  return json(newCustomer);
}