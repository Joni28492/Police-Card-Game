import { ICard } from '../../interfaces';
import { DeckState } from './DeckProvider';

type DeckActionType =
    | {type:'[Deck]- DrawCard'} 
    | {type:'[Deck]- PutCardOnTop', payload: ICard} 

export const deckReducer =(state:DeckState, action: DeckActionType):DeckState=>{

    switch (action.type) {
    case '[Deck]- DrawCard':
        return {
            ...state,
            hand: [...state.hand, state.deck[0]],
            deck: state.deck.slice(1)
        }
    case '[Deck]- PutCardOnTop':
        return {
            ...state,
            //TODO
            
        }

        default:
            return state;
    }

}