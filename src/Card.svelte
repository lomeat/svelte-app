<script>
  import Counter from "./Counter.svelte";

  export let count = 0;
  export let name = "Card name";
  export let description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ratione voluptatibus consequuntur sit tempora doloribus aut.";
</script>

<wrapper>
  <h1 class="name">{name}</h1>
  <span class="description">{description}</span>
  <Counter {count} />
</wrapper>

<style lang="scss">
  $background: var(--bg);
  $text: var(--text);

  wrapper {
    display: flex;
    flex-direction: column;
    width: 18rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    color: $text;
    padding: 1rem;

    @media (max-width: 700px) {
      width: 90vw;
    }
  }

  h1.name {
    padding-bottom: 0.5rem;
    font-size: 26px;
  }

  .description {
    line-height: 1.5rem;
    padding: 0 0 1rem 0;
  }
</style>
