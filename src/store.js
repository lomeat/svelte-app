import { writable } from "svelte/store";
import { createCardsMock } from "./mocks";

const cardMocks = createCardsMock(20);

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
export const cart = createWritableStore("cart", []);
export const cards = writable(cardMocks);

import _ from "lodash";

const colorKeys = _.chain(colors)
  .keys()
  .filter(
    (colorKey) =>
      colorKey.indexOf("bg-") === -1 && colorKey.indexOf("fg-") === -1
  )
  .value();

export default _.pick(colors, colorKeys);
