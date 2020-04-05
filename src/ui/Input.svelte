<script>
  export let value = "";
  export let type = "";
  export let className = "";
  export { className as class };
</script>

<input class={className} bind:value type="number" />

<style lang="scss">
  $text: var(--text);

  input {
    outline: none;
    text-align: center;
    border: 0;
    width: 100px;
    font: 20px $fira;
    color: $text;
    border-bottom: 1px solid transparent;
    background: transparent;
    transition: 0.1s ease;
    border-radius: 4px;
    &:hover {
      background: white;
      color: black;
    }
    &:focus {
      color: black;
      background: white;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
</style>
