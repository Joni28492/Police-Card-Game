import { ICard } from '../../interfaces';
import { TableState } from './TableProvider';

type TableActionType =
    | {type:'[Table]- PutCardOnTable', payload: ICard}

export const tableReducer =(state:TableState, action: TableActionType):TableState=>{

    switch (action.type) {
    case '[Table]- PutCardOnTable':
        return {
            ...state,
            card: action.payload,
        }

        default:
        return state;
    }

}