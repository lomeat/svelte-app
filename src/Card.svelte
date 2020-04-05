<script>
  import Counter from "./Counter.svelte";
  import Button from "./ui/Button.svelte";

  export let count = 0;
  export let name = "Card name";
  export let price = "$123";
  export let description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ratione voluptatibus consequuntur sit tempora doloribus aut.";
</script>

<wrapper>
  <div class="header">
    <h2 class="name">{name}</h2>
    <span class="price">{price}</span>
  </div>
  <span class="description">{description}</span>
  <div class="footer">
    <Counter {count} />
    <Button>Cart</Button>
  </div>
</wrapper>

<style lang="scss">
  wrapper {
    display: flex;
    flex-direction: column;
    width: 21rem;
    border: 1px solid $border;
    border-radius: 8px;
    color: $text;
    padding: 1rem;

    @media (max-width: $mobile-screen) {
      width: 90vw;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  h2.name {
    padding-bottom: 0.5rem;
    font-size: 1.3rem;
    line-height: 1.3rem;
    font-family: $overpass;
    text-overflow: ellipsis;
    padding-right: 1rem;
    overflow: hidden;
    white-space: nowrap;
  }

  .price {
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.3rem;
    font-family: $overpass;
  }

  .description {
    line-height: 1.3rem;
    font-size: 0.9rem;
    padding: 0 0 1rem 0;
    color: $sub-text;
  }

  .footer {
    display: flex;
    justify-content: space-between;
  }
</style>
