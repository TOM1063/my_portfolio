// Fortune cookie destinations

const directDestinations = [
  "https://cruel.org/freeware/hacker.html#believe2",
];

const imageSearchTerms = [
  "種差海岸",
  "宮代 進修館",
  "空想科学読本",
  "あなたの人生の物語",
  "虹のマート",
  "中みそ",
  "利根運河",
  "古利根公園橋",
  "Discovery By Gigi",
  "cute dog",
  "c35ef",
  "A1ミュージック",
  "the sun",
  "城の目",
  "The Beatles",
  "Lucio Battisti",
  "fortune cookie",
  "ハッカーと画家",
];

const imageSearchDestinations = imageSearchTerms.map(
  (term) => `https://www.google.com/search?q=${encodeURIComponent(term)}&hl=ja&tbm=isch`
);

const fortuneCookieDestinations = [
  ...directDestinations,
  ...imageSearchDestinations,
];

document.getElementById("random").addEventListener("click", () => {
  const destination =
    fortuneCookieDestinations[
      Math.floor(Math.random() * fortuneCookieDestinations.length)
    ];

  window.location.href = destination;
});
