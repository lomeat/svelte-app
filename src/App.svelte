<script>
  import ThemeIcon from "svelte-icons/fa/FaCircle.svelte";
  import CartIcon from "svelte-icons/io/IoMdCart.svelte";
  import GithubIcon from "svelte-icons/fa/FaGithub.svelte";

  import Button from "./ui/Button.svelte";
  import Catalog from "./ui/Catalog.svelte";
  import Counter from "./Counter.svelte";
  import Card from "./Card.svelte";

  import { darkTheme, user } from "./store";
  import { createCardsMock } from "./mocks";

  // Theme style (dark/light)
  let style = [];

  // Card mock
  let card = {
    name: "Nightmare Book",
    price: "$499.99",
    description:
      "The dog ate the description. But cat was more attractive for the bridge",
    count: 0
  };

  const cards = createCardsMock(20);

  const toggleTheme = () => {
    $darkTheme = !$darkTheme;
  };

  darkTheme.useLocalStorage();

  $: if ($darkTheme) {
    style = [
      "--bg: #474657;",
      "--bg-card: #3e3d4b;",
      "--text: #f2f2f4;",
      "--border: #646464;",
      "--sub-text: #bbb"
    ].join("");
  }
  $: if (!$darkTheme) {
    style = [
      "--bg: #f2f2f4;",
      "--bg-card: #ffffff;",
      "--text: #212121;",
      "--border: #dddddd;",
      "--sub-text: #555"
    ].join("");
  }
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Overpass:400,700&display=swap"
    rel="stylesheet" />
</svelte:head>

<div class="body" {style}>
  <div class="container">
    <header>
      <h1 class="app-name">Svelte Shop Example</h1>
      <navbar>
        <span class="money item">${$user.money.toFixed(2)}</span>
        <Button class="icon item">
          <CartIcon />
        </Button>
        <Button class="icon item" on:click={toggleTheme}>
          <ThemeIcon />
        </Button>
      </navbar>
      <Button class="icon github-link">
        <a href="https://github.com/lomeat/svelte-app">
          <GithubIcon />
        </a>
      </Button>
    </header>
    <Catalog>
      {#each cards as card (card.id)}
        <Card {...card} />
      {/each}
    </Catalog>
  </div>
</div>

<style lang="scss" global>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    user-select: none;
  }

  .body {
    width: 100vw;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $background;
    transition: 0.3s ease;
  }

  .container {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 6rem 0;

    @media (max-width: $tablet-screen) {
      position: relative;
      padding: 4rem 0;
    }
  }

  header {
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;

    @media (max-width: $mobile-screen) {
      width: 90vw;
      text-align: center;
    }
  }

  h1.app-name {
    font: bold 2rem $overpass;
    font-size: 32px;
    padding: 20px 0;
    color: $text;
  }

  navbar {
    position: fixed;
    top: 0rem;
    right: 0rem;
    padding: 1rem 1rem 0 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background: $background;
    transition: 0.3s ease;

    .item {
      margin-right: 1rem;

      &:last-child {
        margin: 0;
      }
    }

    @media (max-width: $tablet-screen) {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }

  .money {
    line-height: 3.35rem;
    font-size: 1.3rem;
    font-family: $overpass;
    font-weight: bold;
    color: $text;
  }

  .github-link {
    position: fixed;
    top: 1rem;
    left: 1rem;

    @media (max-width: $tablet-screen) {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }

    a {
      color: $text;
      text-decoration: none;

      &:visited {
        color: $text;
      }
    }
  }
</style>
