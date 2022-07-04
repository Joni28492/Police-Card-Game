import {createContext} from 'react';
import { ICard as IUniqueICard } from '../../interfaces';

interface ContextProps {
    discards?: IUniqueICard[];
    deck: IUniqueICard[];
    hand: IUniqueICard[];
    drawCard: ()=>void;
    useCard:  (cardUsed:IUniqueICard)=>void;
    putOnDeck:  (cardUsed:IUniqueICard)=>void;
    discardCard:  (cardUsed:IUniqueICard)=>void;
}

export const DeckContext = createContext({} as ContextProps )