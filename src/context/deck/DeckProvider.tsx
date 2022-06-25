import { FC, PropsWithChildren, useReducer } from 'react';
import { DeckContext, deckReducer } from './';
import { cards } from '../../data/cards';
import { ICard } from '../../interfaces';



    export interface DeckState {
        deck: ICard[];
        hand: ICard[];
    }

    

    const Deck_INITIAL_STATE:DeckState = {
        deck: cards,
        //!Ojo con la referencia del arr, solventamos con el slice
        hand: cards.sort(()=>{return Math.random() - 0.5}).slice().splice(0,3),
    }

    interface Props {}

    export const DeckProvider:FC<PropsWithChildren<Props>> = ({children})=>{

        const [state, dispatch] = useReducer(deckReducer, Deck_INITIAL_STATE)


        return ( 
            <DeckContext.Provider value={{
                deck: state.deck,
                hand: state.hand
                }}>
                {children}
            </DeckContext.Provider>
        )

    }