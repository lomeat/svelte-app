<script>
  import RemoveIcon from "svelte-icons/fa/FaRegTrashAlt.svelte";

  import Button from "./ui/Button.svelte";

  export let name = "";
  export let count = 1;
  export let id = 1;
  export let image = "";
  export let price = 1;
  export let removeOne = () => {};
</script>

<div class="wrapper">
  <img
    src={`https://img.icons8.com/dusk/100/000000/${image}.png`}
    alt="Cart Item Image"
    class="image" />
  <div class="containers">
    <span class="name">{name}</span>
    <span class="price">${price.toFixed(2)}</span>
  </div>
  <Button on:click={() => removeOne(id)} class="icon">
    <RemoveIcon />
  </Button>
</div>

<style lang="scss">
  .wrapper {
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .containers {
    display: flex;
    flex-direction: column;
    min-height: 2rem;
  }

  .image {
    width: 3rem;
    height: 3rem;
  }

  span {
    color: $text;
    font-family: $overpass;
  }

  .name {
    font-weight: bold;
  }
</style>
