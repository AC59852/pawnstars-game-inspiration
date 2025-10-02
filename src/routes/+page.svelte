<script lang="ts">
  import { customers, negotiationState } from "$lib/store";
	import type { Item } from "$lib/types/item";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import NegotiationComponent from "$lib/components/NegotiationComponent.svelte";

  let interval: NodeJS.Timeout | null = null;

  function startInterval() {
    if (interval) return; // already running
    interval = setInterval(async () => {
      const current = get(customers);

      if (current.length >= 5) {
        stopInterval(); // stop when full
        return;
      }

      const response = await fetch("/api/customer");
      const data = await response.json();
      customers.update((c) => [...c, data]);
    }, 3000);
  }

  function stopInterval() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  onMount(() => {
    // react to store changes
    const unsubscribe = customers.subscribe((c) => {
      if (c.length < 5) {
        startInterval();  // ensure we restart when <5
      } else {
        stopInterval();   // pause when full
      }
    });

    return () => {
      unsubscribe();
      stopInterval(); // cleanup
    };
  });
</script>
<div class="{$negotiationState.active ? 'overflow-hidden h-screen' : ''}">
  {#if $negotiationState.active}
    <NegotiationComponent />
  {/if}

  <h2>Waiting Customers</h2>
  {#if $customers.length === 0}
    <p>No customers waiting.</p>
  {:else}
    <ul>
      {#each $customers as customer (customer.id)}
        <li>
          <button type="button" on:click={() => negotiationState.set({ active: true, currentCustomer: customer, item: customer.selling.item, offer: null, counterOffer: null })}>
            <h2>{customer.name} is selling: {customer.selling.item.name}</h2>
            <img src="/images/customers/customer-woman1.png" alt="" />
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>