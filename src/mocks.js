export const createCardsMock = (amount) => {
  let result = [];
  const cardNames = [
    "Nightmare Book",
    "iPhone 11 Pro",
    "Sticker pack 'Apples'",
    "Document",
    "One cigarette",
    "Paper Dock",
  ];
  const cardPrices = [100, 299.99, 12.03, 1499.99, 50, 347, 2];
  const cardImages = [
    "book",
    "document",
    "image-file",
    "key",
    "calendar",
    "briefcase",
  ];

  for (let a = 0; a < amount; a++) {
    const card = {
      id: a,
      count: 1,
      name: cardNames[Math.floor(Math.random() * cardNames.length)],
      price: cardPrices[Math.floor(Math.random() * cardPrices.length)],
      image: cardImages[Math.floor(Math.random() * cardImages.length)],
      description:
        "The dog ate the description. But cat was more attractive for the bridge",
    };

    result.push(card);
  }

  return result;
};
