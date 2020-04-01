<script>
  import Button from "./button.svelte";

  export let count = 1;
  export let color = {};

  const defaultDelay = 100;
  let delay = defaultDelay;
  let koef = 0;
  let nextTime = 0;

  $: if (count <= 0) count = 0;
  $: if (count > 0 && count < 100) delay = defaultDelay;
  $: if (count > 100 && count < 1000) delay = defaultDelay / 2;
  $: if (count > 1000) delay = defaultDelay / 6;

  const dec = () => (koef = -1);
  const inc = () => (koef = 1);
  const mouseUp = () => (koef = 0);

  const watcher = time => {
    requestAnimationFrame(watcher);

    if (time < nextTime) return;
    nextTime = time + delay;

    if (koef !== 0) {
      count += koef;
    }
  };

  requestAnimationFrame(watcher);

  const change = e => {
    e.preventDefault();
    count = parseFloat(e.target.value);
  };
</script>

<style lang="scss">
  $text: var(--text);

  wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
  }

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
  }
</style>

<wrapper style="--text:{color.text}">
  <Button {color} onmousedown={dec} onmouseup={mouseUp}>-</Button>
  <input bind:value={count} on:change={change} />
  <Button {color} onmousedown={inc} onmouseup={mouseUp}>+</Button>
</wrapper>
