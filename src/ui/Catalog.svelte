<script>
  export let className = "";
  export { className as class };
</script>

<wrapper class={className}>
  <slot />
</wrapper>

<style lang="scss">
  wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-row-gap: 2rem;
    }

    @media (max-width: 1200px) and (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
