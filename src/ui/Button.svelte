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
    padding: 6px 20px;
    border-radius: 4px;
    border-color: $border;
    font-family: $roboto;
    font-size: 1rem;
    line-height: 1.7rem;
    background: transparent;
    color: $text;
    transition: 0.1s ease;
    cursor: pointer;

    &:hover {
      box-shadow: inset 50px 50px 0px rgba(0, 0, 0, 0.1);
    }

    &:active {
      background: transparent;
      box-shadow: inset 50px 50px 0px rgba(0, 0, 0, 0.2);
    }
  }
</style>
