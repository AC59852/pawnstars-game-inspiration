<script lang="ts">
  import { money, customers } from "$lib/store";

  $: console.log($customers);

  async function generateNewCustomer() {
    const response = await fetch('/api/customer');
    const data = await response.json();

    console.log('Generated customer:', data);
    return data;
  }

</script>

<button on:click={async () => {
  const customer = await generateNewCustomer();
  customers.update(c => [...c, customer]);
}}>
  Add Customer
</button>
