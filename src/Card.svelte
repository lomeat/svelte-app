<script>
  import Counter from "./Counter.svelte";

  export let color = {};
  export let count = 0;
  export let name = "Card name";
  export let description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ratione voluptatibus consequuntur sit tempora doloribus aut.";
</script>

<wrapper style="--bg:{color.bg}; --text:{color.text}">
  <h1 class="name">{name}</h1>
  <span class="description">{description}</span>
  <Counter {count} {color} />
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
