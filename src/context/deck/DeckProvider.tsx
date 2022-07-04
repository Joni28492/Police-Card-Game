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

    

    //?UID Version
    const Deck_INITIAL_STATE:DeckState = {
        deck: cards.sort(()=>{return Math.random() - 0.5}).splice(3).slice(),

        //Ojo con la referencia del arr, solventamos con el slice
        hand: cards.slice().splice(0,3)
    }

    interface Props {}

    export const DeckProvider:FC<PropsWithChildren<Props>> = ({children})=>{

        const [state, dispatch] = useReducer(deckReducer, Deck_INITIAL_STATE)

        const drawCard = () =>{
            if(state.deck.length !== 0)
                dispatch({type:'[Deck]- DrawCard'})
            else{
                console.log('No quedan cartas en el deck');
            }
        }

        // al usar quitarla de la mano
        const useCard = (cardUsed:ICard) =>{
            dispatch({type:'[Deck]- UseCard', payload: cardUsed  })
        }
        const putOnDeck = (cardUsed:ICard) =>{
            dispatch({type:'[Deck]- PutCardOnTop', payload: cardUsed  })
        }
        const discardCard = (cardUsed:ICard) =>{
            dispatch({type:'[Deck]- DisCard', payload: cardUsed  })
        }

        


        return ( 
            <DeckContext.Provider value={{
                deck: state.deck,
                hand: state.hand,
                discards: state.discards,

                //mehotds
                drawCard,
                useCard,
                putOnDeck,
                discardCard,
                }}>
                {children}
            </DeckContext.Provider>
        )

    }