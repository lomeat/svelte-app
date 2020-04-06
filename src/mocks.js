export const createCardsMock = (amount) => {
  let result = [];
  const cardNames = [
    "Nightmare Book",
    "iPhone 11 Pro",
    "Sticker pack 'JxM'",
    "Nvidia Geforce RTX 2070",
    "Pee-ka-boo",
    "Xiaomi Redmi Note 5 (128gb/6gb)",
  ];
  const cardPrices = [199.99, 299.99, 12.03, 1499.99, 49, 347, 2];

  for (let a = 0; a < amount; a++) {
    const card = {
      id: a,
      count: 1,
      name: cardNames[Math.floor(Math.random() * cardNames.length)],
      price: cardPrices[Math.floor(Math.random() * cardPrices.length)],
      description:
        "The dog ate the description. But cat was more attractive for the bridge",
    };

    result.push(card);
  }

  return result;
};
