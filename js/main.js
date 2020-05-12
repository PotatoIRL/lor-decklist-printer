const {
  DeckEncoder
} = require('runeterra')

set = [
  require('data/set1.json'),
  require('data/set2.json')
]

cards = set.reduce(function(map, data) {
  data.forEach(item => map[item.cardCode] = item);
  return map;
}, {})

global.updateDecklist = function() {
  const deckcode = document.getElementById("deckcode").value;
  const deck = DeckEncoder.decode(deckcode);
  const decklist = document.getElementById("decklist")
  decklist.value = deck.map(x => x.count + " " + cards[x.code].name + "(" + cards[x.code].cost + ")").join("\n")
}
