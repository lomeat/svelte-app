<script>
  import Button from "./ui/Button.svelte";
  import Input from "./ui/Input.svelte";

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
</script>

<wrapper style="--text:{color.text}">
  <Button {color} onmousedown={dec} onmouseup={mouseUp}>-</Button>
  <Input {color} bind:value={count} type="number" />
  <Button {color} onmousedown={inc} onmouseup={mouseUp}>+</Button>
</wrapper>

<style lang="scss">
  wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
