<script>
  import { hold } from "../actions";

  export let onmousedown = () => {};
  export let onmouseup = () => {};
  export let className = "";
  export { className as class };
</script>

<button class={className} on:click use:hold={[onmousedown, onmouseup]}>
  <slot />
</button>

<style lang="scss">
  button {
    border-radius: 4px;
    border-color: $border;
    font-family: $roboto;
    font-size: 1rem;
    line-height: 1.7rem;
    background: transparent;
    transition: 0.1s ease;
    cursor: pointer;
    color: $text;
    padding: 0.8rem;
    &:hover {
      box-shadow: inset 50px 50px 0px rgba(0, 0, 0, 0.1);
    }
    &:active {
      background: transparent;
      box-shadow: inset 50px 50px 0px rgba(0, 0, 0, 0.2);
    }
  }

  .count {
    border: 0;
    padding: 0.9rem;
  }

  .icon {
    width: 3rem;
    height: 3rem;
    color: $text;
    padding: 0.6rem;

    &-buy {
      margin-left: 0.5rem;
    }
  }
</style>
