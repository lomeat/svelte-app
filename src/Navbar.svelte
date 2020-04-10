<script>
  import ThemeIcon from "svelte-icons/fa/FaCircle.svelte";
  import CartIcon from "svelte-icons/io/IoMdCart.svelte";
  import GithubIcon from "svelte-icons/fa/FaGithub.svelte";

  import Button from "./ui/Button.svelte";
  import Cart from "./Cart.svelte";
  import { user } from "./store";

  export let toggleTheme = () => {};

  let isCartVisible = false;

  const clickCartButton = () => {
    isCartVisible = !isCartVisible;
  };
</script>

<navbar>
  <!-- pos: absolute -->
  <Button class="icon github-link">
    <a href="https://github.com/lomeat/svelte-app">
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
</style>
