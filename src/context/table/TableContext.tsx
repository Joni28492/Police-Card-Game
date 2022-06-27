import {createContext} from 'react';
import { ICard } from '../../interfaces';

interface ContextProps {
    card?: ICard;
    //methods
    setCardOnTable: (playCard: ICard) => void
}

export const TableContext = createContext({} as ContextProps )