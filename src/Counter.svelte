<script>
  import FaPlus from "svelte-icons/fa/FaPlus.svelte";
  import FaMinus from "svelte-icons/fa/FaMinus.svelte";

  import Button from "./ui/Button.svelte";
  import Input from "./ui/Input.svelte";

  export let count = 1;

  const defaultDelay = 100;
  let delay = defaultDelay;
  let koef = 0;
  let nextTime = 0;

  $: if (count <= 0) count = 0;
  $: if (count > 0 && count < 100) delay = defaultDelay;
  $: if (count > 100 && count < 1000) delay = defaultDelay / 2;
  $: if (count > 1000) delay = defaultDelay / 6;
  $: if (count >= 9999) count = 9999;

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

<wrapper>
  <Button class="count" onmousedown={dec} onmouseup={mouseUp}>
    <FaMinus />
  </Button>
  <Input bind:value={count} type="number" />
  <Button class="count" onmousedown={inc} onmouseup={mouseUp}>
    <FaPlus />
  </Button>
</wrapper>

<style lang="scss">
  wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
