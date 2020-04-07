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
    padding: 0.6rem;
    &:hover {
      background: $background;
    }
    &:active {
      background: $background;
      box-shadow: inset 1px 2px 6px rgba(0, 0, 0, 0.2);
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
    z-index: 1;

    &-buy {
      margin-left: 0.5rem;
    }
  }

  .navbar-item {
    margin-right: 1rem;

    &:last-child {
      margin: 0;
    }
  }

  .github-link {
    position: fixed;
    top: 1rem;
    left: 1rem;

    @media (max-width: $tablet-screen) {
      position: absolute;
    }
  }
</style>
