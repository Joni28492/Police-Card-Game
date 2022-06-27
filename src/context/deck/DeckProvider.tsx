import { FC, PropsWithChildren, useReducer } from 'react';
import { DeckContext, deckReducer } from './';
import { cards } from '../../data/cards';
import { ICard } from '../../interfaces';



    export interface DeckState {
        discards?: ICard[]
        deck: ICard[];
        hand: ICard[];
        //methods
    }

    

    const Deck_INITIAL_STATE:DeckState = {
        deck: cards.slice(3),
        //!Ojo con la referencia del arr, solventamos con el slice
        hand: cards.sort(()=>{return Math.random() - 0.5}).slice().splice(0,3),
    }

    interface Props {}

    export const DeckProvider:FC<PropsWithChildren<Props>> = ({children})=>{

        const [state, dispatch] = useReducer(deckReducer, Deck_INITIAL_STATE)

        const drawCard = () =>{
            dispatch({type:'[Deck]- DrawCard'})
        }


        return ( 
            <DeckContext.Provider value={{
                deck: state.deck,
                hand: state.hand,

                //mehotds
                drawCard,
                }}>
                {children}
            </DeckContext.Provider>
        )

    }