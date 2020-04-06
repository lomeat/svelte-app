<script>
  import CartIcon from "svelte-icons/io/IoMdCart.svelte";
  import BuyIcon from "svelte-icons/md/MdAttachMoney.svelte";

  import { userMoney } from "./store";
  import Counter from "./Counter.svelte";
  import Button from "./ui/Button.svelte";

  // Props
  export let id;
  export let count = 1;
  export let name = "Card name";
  export let price = 123;
  export let description = "";

  $: updatePrice = price * count;

  const buy = () => {
    if ($userMoney - price >= 0) {
      $userMoney -= price;
    }
  };
</script>

<wrapper>
  <div class="header">
    <h2 class="name">{name}</h2>
    <span class="price">${updatePrice}</span>
  </div>
  <span class="description">{description}</span>
  <div class="footer">
    <Counter {count} />
    <Button class="icon">
      <CartIcon />
    </Button>
    <Button on:click={buy} class="icon">
      <BuyIcon />
    </Button>
  </div>
</wrapper>

<style lang="scss">
  wrapper {
    display: flex;
    flex-direction: column;
    width: 21rem;
    border: 1px solid $border;
    border-radius: 8px;
    color: $text;
    padding: 1rem;

    @media (max-width: $mobile-screen) {
      width: 90vw;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  h2.name {
    padding-bottom: 0.5rem;
    font-size: 1.3rem;
    line-height: 1.3rem;
    font-family: $overpass;
    text-overflow: ellipsis;
    padding-right: 1rem;
    overflow: hidden;
    white-space: nowrap;
  }

  .price {
    font-size: 1.1rem;
    line-height: 1.3rem;
    font-family: $overpass;
  }

  .description {
    line-height: 1.3rem;
    font-size: 0.9rem;
    padding: 0 0 1rem 0;
    color: $sub-text;
  }

  .footer {
    display: flex;
    justify-content: space-between;
  }
</style>
