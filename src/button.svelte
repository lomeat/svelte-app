<script>
  export let name = "button";
  export let onmousedown = () => {};
  export let onmouseup = () => {};
  export let color = {};
</script>

<style lang="scss">
  $background: var(--bg);
  $text: var(--text);

  button {
    padding: 6px 20px;
    border-radius: 4px;
    font-family: $fira;
    font-size: 22px;
    background: $background;
    color: $text;
    transition: 0.1s ease;
    transition: background 0.3s ease;
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

<button
  style="--bg:{color.bg}; --text:{color.text}"
  on:click
  on:mousedown={onmousedown}
  on:mouseup={onmouseup}
  on:mouseout={onmouseup}>
  <slot />
</button>
