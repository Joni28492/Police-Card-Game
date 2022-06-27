import {createContext} from 'react';
import { ICard } from '../../interfaces';

interface ContextProps {
    discards?: ICard[];
    deck: ICard[];
    hand: ICard[];
    drawCard: ()=>void;
    useCard:  (cardUsed:ICard)=>void;
    putOnDeck:  (cardUsed:ICard)=>void;
    discardCard:  (cardUsed:ICard)=>void;
}

export const DeckContext = createContext({} as ContextProps )