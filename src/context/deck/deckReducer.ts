import { DeckState } from './DeckProvider';

type DeckActionType =
    | {type:'[Deck]- DrawCard'} 
    | {type:'[Deck]- PutCardOnTop'} 

export const deckReducer =(state:DeckState, action: DeckActionType):DeckState=>{

    switch (action.type) {
    case '[Deck]- DrawCard':
        return {
            ...state,
            hand: [...state.hand, state.deck[0]],
            
            //TODO
            deck: [...state.deck.splice(0,1)]//! eliminar carta, comprobar 
            
        }
    case '[Deck]- PutCardOnTop':
        return {
            ...state,
            
        }

        default:
            return state;
    }

}