import {createContext} from 'react';
import { ICard } from '../../interfaces';

interface ContextProps {
    deck: ICard[];
    hand: ICard[];
    drawCard: ()=>void;
}

export const DeckContext = createContext({} as ContextProps )