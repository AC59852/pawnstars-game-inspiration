<script lang="ts">
  import { money, customers } from "$lib/store";
  import { generateNewCustomer } from "$lib/logic/customer";

  $: console.log($customers);

</script>

<button on:click={() => customers.update(c => [...c, generateNewCustomer()])}>
  Add Customer
</button>

