<script>
  import { negotiationState } from "$lib/store";
</script>

{#if $negotiationState.currentCustomer}
  <section class="flex flex-col justify-center items-center z-50 fixed top-0 left-0 w-screen h-screen">
    <button
      type="button"
      class="w-full h-full top-0 left-0 bg-black/50 absolute backdrop-blur-sm"
      aria-label="Close negotiation overlay"
      on:click={() => negotiationState.set({ active: false, currentCustomer: null, item: null, offer: null, counterOffer: null })}
      on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') negotiationState.set({ active: false, currentCustomer: null, item: null, offer: null, counterOffer: null }); }}
      tabindex="0"
    ></button>
    <div class="bg-white p-4 rounded shadow-lg max-w-md w-full text-black z-10 relative">
      <figure>
        <figcaption>{$negotiationState.currentCustomer.selling.item.name}</figcaption>
        <img src="/images/{$negotiationState.currentCustomer.selling.item.image}" alt="{$negotiationState.currentCustomer.selling.item.name}" />
      </figure>
    </div>
  </section>
{/if}
