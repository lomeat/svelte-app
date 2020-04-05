<script>
  export let value = "";
  export let type = "";
  export let className = "";
  export { className as class };
</script>

<input class={className} bind:value type="number" />

<style lang="scss">
  input {
    outline: none;
    text-align: center;
    border: 0;
    width: 5rem;
    font: 20px $fira;
    color: $text;
    border-bottom: 1px solid transparent;
    background: transparent;
    transition: 0.1s ease;
    border-radius: 0px;
    &:hover {
      border-color: $border;
    }
    &:focus {
      border-color: $text;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
</style>
