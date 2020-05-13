<script>
  // TOOD: Create mobile view cart

  import Button from "./ui/Button.svelte";
  import CartItem from "./CartItem.svelte";
  import { cart, user } from "./store";

  cart.useLocalStorage();

  const buyAll = () => {
    let resultPrice = 0;

    for (let a = 0; a < $cart.length; a++) {
      resultPrice += $cart[a].price;
    }

    if ($user.money - resultPrice >= 0) {
      $user.money -= resultPrice;
      removeAll();
    } else {
      console.log("no money");
    }
  };

  const removeAll = () => {
    $cart = [];
  };

  const removeOne = id => {
    $cart = $cart.filter(product => product.id !== id);
  };
</script>

<div class="wrapper">
  <div class="container">
    {#if $cart.length}
      {#each $cart as product (product.id)}
        <CartItem {...product} {removeOne} />
      {/each}
    {/if}
  </div>
  <div class="buttons-wrapper">
    <Button on:click={buyAll}>Buy all</Button>
    <Button on:click={removeAll}>Remove all</Button>
  </div>
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
    justify-content: space-between;
    overflow: hidden;

    &::-webkit-scrollbar-track {
      backgroud: $background !important;
    }
  }
  .container {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: $text;
  }
</style>
