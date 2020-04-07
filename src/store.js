import { writable } from "svelte/store";

const createWritableStore = (key, startValue) => {
  const { subscribe, set } = writable(startValue);

  return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }

      subscribe((current) =>
        localStorage.setItem(key, JSON.stringify(current))
      );
    },
  };
};

export const darkTheme = createWritableStore("darkTheme", false);
export const user = writable({
  name: "Michael Filipenko",
  money: 2000,
});
