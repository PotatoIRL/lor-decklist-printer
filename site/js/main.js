// Load DeckEncoder from runeterra module
const {
  DeckEncoder
} = require('runeterra')

// Load card data mapped as (CARD_ID -> CARD)
const cards = [
  require('data/set1.json'),
  require('data/set2.json')
].reduce(function(map, data) {
  data.forEach(item => map[item.cardCode] = item);
  return map;
}, {})

// Application constants and variables
const deckcode = document.getElementById("deckcode");
const decklist = document.getElementById("decklist")
const deckview = document.getElementById("deckview")

var deck;
  
// Global functions
global.updateDecklist = function() {
  try {
    deck = DeckEncoder.decode(deckcode.value);
    deck.forEach(x => x.card = cards[x.code])
    deck.sort((x, y) => cards[x.code].cost - cards[y.code].cost)
    decklist.value = deck
      .map(x => `${x.count} ${x.card.name} (${x.card.cost})`)
      .join("\n");
    deckview.innerHTML = deck
      .map(x => `\
        <a href="https://lor.mobalytics.gg/cards/${x.code}" target="_blank">\
          <svg class="card">\
            <image width="100%" height="100%" href="${x.card.assets[0].gameAbsolutePath}">x${x.count}</image>\
            <text x="70%" y="15%" textLength="20%">x${x.count}</text>\
          </svg>\
        </a>`)
      .join("\n");
  } catch (ex) {
  }
}

global.copyDecklist = function() {
  decklist.select();
  document.execCommand('copy');
}

// Context access
global.context = function() {
  return {
    cards: cards
  };
}

// Focus deckcode
deckcode.focus();
