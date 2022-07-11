import {createContext} from 'react';
import { Categories, RestrictionsType } from '../../interfaces';



interface ContextProps {
    name: string;
    category: Categories;
    restritions: RestrictionsType[];
    carcel: number;
    stars: number;
}

export const PlayerContext = createContext({} as ContextProps )