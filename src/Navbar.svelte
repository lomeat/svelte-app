<script>
  import ThemeIcon from "svelte-icons/fa/FaCircle.svelte";
  import CartIcon from "svelte-icons/io/IoMdCart.svelte";
  import GithubIcon from "svelte-icons/fa/FaGithub.svelte";

  import Button from "./ui/Button.svelte";
  import Cart from "./Cart.svelte";
  import { user, cart } from "./store";

  export let toggleTheme = () => {};

  cart.useLocalStorage();

  let isCartVisible = false;

  const clickCartButton = () => {
    isCartVisible = !isCartVisible;
  };
</script>

<navbar>
  <!-- pos: absolute -->
  <Button class="icon github-link navbar-item">
    <a target="_blank" href="https://github.com/lomeat/svelte-app">
      <GithubIcon />
    </a>
  </Button>
  <span class="user">{$user.name}</span>
  {#if isCartVisible}
    <Cart />
  {/if}
  <!-- /pos: absolute -->
  <span class="money navbar-item">${$user.money.toFixed(2)}</span>
  <Button on:click={clickCartButton} class="icon navbar-item icon-cart">
    <CartIcon />
    {#if $cart.length}
      <div class="cart-amount">{$cart.length}</div>
    {/if}
  </Button>
  <Button class="icon navbar-item" on:click={toggleTheme}>
    <ThemeIcon />
  </Button>
</navbar>

<style lang="scss">
  navbar {
    position: fixed;
    top: 0;
    right: 0;
    padding: 1rem 1rem 0 1rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background: $background;
    transition: 0.3s ease;

    @media (max-width: $tablet-screen) {
      position: absolute;
    }
  }

  .user {
    line-height: 3.35rem;
    font-size: 1.3rem;
    font-family: $overpass;
    font-weight: bold;
    color: $text;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding-top: 1rem;

    @media screen and (max-width: $mobile-screen) {
      display: none;
    }
  }

  .navbar-item {
    margin-right: 1rem;
  }

  .money {
    line-height: 3.35rem;
    font-size: 1.3rem;
    font-family: $overpass;
    font-weight: bold;
    color: $text;
  }

  .cart-amount {
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
    background: red;
    color: white;
    font-size: 0.8rem;
    border: 1px solid $border;
    border-radius: 100%;
    width: 1.3rem;
    height: 1.3rem;
    line-height: 1.3rem;
    text-align: center;
  }
</style>
