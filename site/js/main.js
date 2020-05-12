const {
  DeckEncoder
} = require('runeterra')

const set = [
  require('data/set1.json'),
  require('data/set2.json')
]

const cards = set.reduce(function(map, data) {
  data.forEach(item => map[item.cardCode] = item);
  return map;
}, {})

const deckcode = document.getElementById("deckcode");
const decklist = document.getElementById("decklist")

global.updateDecklist = function() {
  const deck = DeckEncoder.decode(deckcode.value);
  deck.sort((x, y) => cards[x.code].cost - cards[y.code].cost)
  decklist.value = deck.map(x => `${x.count} ${cards[x.code].name} (${cards[x.code].cost})`).join("\n")
}

global.copyDecklist = function() {
    decklist.select();
    document.execCommand('copy');
}

global.cards = cards
