<script>
  import Button from "./ui/Button.svelte";
  import { cart, user } from "./store";

  cart.useLocalStorage();

  const buyAll = () => {
    let resultPrice = 0;

    for (let a = 0; a < $cart.length; a++) {
      resultPrice += $cart[a].price;
    }

    if ($user.money - resultPrice >= 0) {
      $user.money -= resultPrice;
      removeAllProducts();
    } else {
      console.log("no money");
    }
  };

  const removeAllProducts = () => {
    $cart = [];
  };

  const removeOneProduct = id => {
    $cart = $cart.filter(product => product.id !== id);
  };
</script>

<div class="wrapper">
  {#if $cart.length}
    {#each $cart as product (product.id)}
      <span>
        {product.name}: ${product.price.toFixed(2)}
        <Button on:click={() => removeOneProduct(product.id)}>X</Button>
      </span>
    {/each}
  {/if}
  <Button on:click={buyAll}>Buy all</Button>
  <Button on:click={removeAllProducts}>Remove all</Button>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    border: 1px solid $border;
    border-radius: 0.5rem;
    padding: 1rem;
    position: absolute;
    top: 5rem;
    right: 5rem;
    width: 20rem;
    height: 30rem;
    background: $background-card;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar-track {
      backgroud: $background !important;
    }
  }

  span {
    color: $text;
  }
</style>
