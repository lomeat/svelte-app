<script>
  import Counter from "./Counter.svelte";

  export let color = {};
</script>

<wrapper style="--bg:{color.bg}; --text:{color.text}">
  <h1 class="name">Card name</h1>
  <span class="description">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ratione
    voluptatibus consequuntur sit tempora doloribus aut.
  </span>
  <Counter count={0} {color} />
</wrapper>

<style lang="scss">
  $background: var(--bg);
  $text: var(--text);

  wrapper {
    display: flex;
    flex-direction: column;
    width: 18rem;
    border: 1px solid $text;
    border-radius: 8px;
    color: $text;
    padding: 1rem;
  }

  h1 {
    padding: 0 0 0.5rem 0;
  }

  .description {
    line-height: 1.5rem;
    padding: 0 0 1rem 0;
  }
</style>
