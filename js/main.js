const { DeckEncoder } = require('runeterra')

global.updateDecklist = function() {
  const deckcode = document.getElementById("deckcode").value;
  const deck = DeckEncoder.decode(deckcode);
  const decklist = document.getElementById("decklist")
  decklist.value = deck.map(x => x.count + " " + x.code).join("\n")
}
