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
    font-size: 22px;
    background: transparent;
    color: $text;
    transition: 0.1s ease;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      background: $background;
      box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
    }
  }
</style>
