<script>
  import FaCircle from "svelte-icons/fa/FaCircle.svelte";
  import IoMdCart from "svelte-icons/io/IoMdCart.svelte";
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";

  import Button from "./ui/Button.svelte";
  import Catalog from "./ui/Catalog.svelte";
  import Counter from "./Counter.svelte";
  import Card from "./Card.svelte";
  import { darkTheme } from "./store";

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

  darkTheme.useLocalStorage();

  const toggleTheme = () => {
    $darkTheme = !$darkTheme;
  };

  $: if ($darkTheme) {
    style = [
      "--bg: #474657;",
      "--text: #f2f2f4;",
      "--border: #888;",
      "--sub-text: #bbb"
    ].join("");
  }
  $: if (!$darkTheme) {
    style = [
      "--bg: #f2f2f4;",
      "--text: #212121;",
      "--border: #ccc;",
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
        <Button class="item">
          <IoMdCart />
        </Button>
        <Button class="item" on:click={toggleTheme}>
          <FaCircle />
        </Button>
      </navbar>
      <Button class="item github-link">
        <a href="https://github.com/lomeat/svelte-app">
          <FaGithub />
        </a>
      </Button>
    </header>
    <Catalog>
      <Card {...card} />
      <Card {...card} />
      <Card {...card} />
      <Card {...card} />
      <Card {...card} />
      <Card {...card} />
      <Card {...card} />
      <Card {...card} />
      <Card {...card} />
      <Card {...card} />
      <Card {...card} />
      <Card {...card} />
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

  :global(h1) {
    font-family: $overpass;
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
    font: bold 30px $overpass;
    font-size: 32px;
    padding: 20px 0;
    color: $text;
  }

  navbar {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    width: 7rem;
    justify-content: space-between;

    @media (max-width: $tablet-screen) {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
  .item {
    width: 3rem;
    height: 3rem;
    color: $text;
    padding: 0.6rem !important;
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
