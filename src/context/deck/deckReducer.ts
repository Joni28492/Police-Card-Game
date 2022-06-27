import { deleteElementCard } from '../../helpers/arrays';
import { ICard } from '../../interfaces';
import { DeckState } from './DeckProvider';

type DeckActionType =
    | {type:'[Deck]- DrawCard'} 
    | {type:'[Deck]- PutCardOnTop', payload: ICard} 
    | {type:'[Deck]- UseCard', payload: ICard} 
    | {type:'[Deck]- DisCard', payload: ICard} 

export const deckReducer =(state:DeckState, action: DeckActionType):DeckState=>{

    switch (action.type) {
    //~Listo
    case '[Deck]- DrawCard':
        return {
            ...state,
            hand: [...state.hand, state.deck[0]],
            deck: state.deck.slice(1)
        }

    //~Listo, falta descartarla de la mano
    case '[Deck]- PutCardOnTop': 
        return {
            ...state,
            deck: [action.payload, ...state.deck],
            
        }
        case '[Deck]- UseCard':
            return {
            ...state,
            //!fix this priority, revisar el indexOf
            // hand: state.hand.filter( card =>{ action.payload === card } )
            hand: state.hand.splice( state.hand.indexOf(action.payload), 1),
        }
    case '[Deck]- DisCard':
        return {
            ...state,
            hand: state.hand,//todo
            discards: (!state.discards) 
                ? [action.payload ]
                : [action.payload,...state.discards ]//agregar los discards 
        }

        default:
            return state;
    }

}