<script>
  import Counter from "./counter.svelte";
  import Button from "./ui/button.svelte";

  let color = {};
  let darkTheme = localStorage.getItem("darkTheme") || false;

  const toggleTheme = () => {
    darkTheme = !darkTheme;
    localStorage.setItem("darkTheme", darkTheme);
  };

  $: if (darkTheme) {
    color = {
      bg: "#474657",
      text: "#f2f2f4"
    };
  }
  $: if (!darkTheme) {
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
    <h1>Counter with holding delay</h1>
    <Counter count={42} {color} />
    <Button {color} on:click={toggleTheme}>Toggle theme</Button>
  </div>
</div>

<style lang="scss" global>
  $background: var(--bg);
  $text: var(--text);

  :global(*) {
    box-sizing: border-box;
    margin: 0 !important;
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

  h1 {
    font: bold 30px $overpass;
    font-size: 32px;
    padding: 20px 0;
    color: $text;
  }
</style>
