import { PlayerState } from './PlayerProvider';

type PlayerActionType =
    | {type:'[Player]- ActionName'}

export const playerReducer =(state:PlayerState, action: PlayerActionType):PlayerState=>{

    switch (action.type) {
    case '[Player]- ActionName':
        return {
            ...state,
        }

        default:
        return state;
    }

}