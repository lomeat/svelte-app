<script>
  import Counter from "./Counter.svelte";
  import Button from "./ui/Button.svelte";
  import Card from "./Card.svelte";
  import { darkTheme } from "./store";

  let color = {};

  darkTheme.useLocalStorage();

  const toggleTheme = () => {
    $darkTheme = !$darkTheme;
  };

  $: if ($darkTheme) {
    color = {
      bg: "#474657",
      text: "#f2f2f4"
    };
  }
  $: if (!$darkTheme) {
    color = {
      bg: "#f2f2f4",
      text: "#212121"
    };
  }
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Overpass:400,700&display=swap"
    rel="stylesheet" />
</svelte:head>

<div class="body" style="--bg:{color.bg}; --text:{color.text}">
  <div class="container">
    <div class="header">
      <h1>Svelte Example</h1>
      <Button {color} on:click={toggleTheme}>Toggle theme</Button>
    </div>
    <!-- <Counter count={42} {color} /> -->
    <Card {color} />
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

  .body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $background;
    transition: 0.3s ease;
  }

  .container {
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .header {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font: bold 30px $overpass;
    font-size: 32px;
    padding: 20px 0;
    color: $text;
  }
</style>
