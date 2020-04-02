<wrapper>
  <slot />
</wrapper>

<style lang="scss">
  wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
</style>
