

class sets:
    data = {}
    
    def get(set_id):
        data = sets.data
        if set_id not in data:
            import json
            file = open('set{0}.json'.format(set_id), 'rb')
            set_data = json.loads(file.read())
            data[set_id] = {card['cardCode'] : card for card in set_data}
            file.close()
        return data[set_id]
        
def get_card_data(card):
    set_data = sets.get(card.set)
    card.data = set_data[card.card_code]
    return card;

from lor_deckcodes import LoRDeck, CardCodeAndCount
import sys        
deck_code = sys.argv[1]
print('Decoding [{0}]'.format(deck_code))
deck = LoRDeck.from_deckcode(deck_code)
for card in deck.cards:
    card_data = sets.get(card.set)[card.card_code]
    print("{0} {1}".format(card.count, card_data['name']))
