<script>
  import Button from "./ui/Button.svelte";
  import Catalog from "./ui/Catalog.svelte";

  import Counter from "./Counter.svelte";
  import Card from "./Card.svelte";
  import { darkTheme } from "./store";

  // Theme style (dark/light)
  let style = [];

  // Card mock
  let card = {
    name: "Card newname",
    description:
      "The dog ate the description. But cat was more attractive for the bridge",
    count: 0
  };

  darkTheme.useLocalStorage();

  const toggleTheme = () => {
    $darkTheme = !$darkTheme;
  };

  $: if ($darkTheme) {
    style = ["--bg:#474657;", "--text:#f2f2f4;"].join("");
  }
  $: if (!$darkTheme) {
    style = ["--bg:#f2f2f4;", "--text:#212121;"].join("");
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
      <h1 class="app-name">Svelte Example</h1>
      <Button class="toggle-theme" on:click={toggleTheme}>
        {#if $darkTheme}Make light{:else}Make dark{/if}
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
  $background: var(--bg);
  $text: var(--text);

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

  .toggle-theme {
    position: fixed;
    top: 1rem;
    right: 1rem;

    @media (max-width: $tablet-screen) {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
</style>
