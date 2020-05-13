<script>
  import CartIcon from "svelte-icons/io/IoMdCart.svelte";
  import BuyIcon from "svelte-icons/md/MdAttachMoney.svelte";

  import { user, cart } from "./store";
  import Counter from "./Counter.svelte";
  import Button from "./ui/Button.svelte";

  export let id;
  export let count = 1;
  export let name = "Card name";
  export let price = 123;
  export let image;
  export let description = "";

  const buy = () => {
    if ($user.money - price >= 0) {
      $user.money -= price;
    }
  };

  const addToCart = () => {
    $cart = [
      ...$cart,
      {
        id: Math.floor(Math.random() * Date.now()),
        count,
        name,
        price: price * count,
        image,
        description
      }
    ];
    console.log($cart);
  };
</script>

<wrapper>
  <div class="header">
    <h2 class="name">{name}</h2>
    <span class="price">${price}</span>
  </div>
  <img
    src={`https://img.icons8.com/dusk/100/000000/${image}.png`}
    class="image" />
  <span class="description">{description}</span>
  <div class="footer">
    <Counter {count} />
    <div class="buttons-wrapper">
      <Button on:click={addToCart} class="icon">
        <CartIcon />
      </Button>
      <Button on:click={buy} class="icon icon-buy">
        <BuyIcon />
      </Button>
    </div>
  </div>
</wrapper>

<style lang="scss">
  wrapper {
    display: flex;
    flex-direction: column;
    width: 21rem;
    border: 1px solid $border;
    border-radius: 0.5rem;
    color: $text;
    padding: 1rem;
    background: $background-card;

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

  .image {
    width: 100%;
    padding: 5rem;
    color: $text;
    image-rendering: pixelated;
    align-self: center;
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
