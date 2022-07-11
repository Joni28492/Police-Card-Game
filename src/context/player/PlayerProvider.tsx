import { FC, PropsWithChildren, useReducer } from 'react';
import { Categories, RestrictionsType } from '../../interfaces';
import { PlayerContext, playerReducer } from './';


    export interface PlayerState {
        name: string;
        category: Categories
        restritions: RestrictionsType[];
        carcel: number;
        stars: number;
    }

    const Player_INITIAL_STATE:PlayerState = {
        name: 'Joni',
        category: 'Auxiliar',
        restritions: ['Grilletes', 'Sin Turno'],
        carcel: 0,
        stars: 0,
    }

    interface Props {}

    export const PlayerProvider:FC<PropsWithChildren<Props>> = ({children})=>{

        const [state, dispatch] = useReducer(playerReducer, Player_INITIAL_STATE)


        return ( 
            <PlayerContext.Provider value={{
                ...state,
            }}>
                {children}
            </PlayerContext.Provider>
        )

    }