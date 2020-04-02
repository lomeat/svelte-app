<script>
  import { hold } from "../actions";

  export let onmousedown = () => {};
  export let onmouseup = () => {};
  export let color = {};
</script>

<button
  style="--bg:{color.bg}; --text:{color.text}"
  on:click
  use:hold={[onmousedown, onmouseup]}>
  <slot />
</button>

<style lang="scss">
  $background: var(--bg);
  $text: var(--text);

  button {
    padding: 6px 20px;
    border-radius: 4px;
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
