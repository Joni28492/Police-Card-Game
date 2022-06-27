import { FC, PropsWithChildren, useReducer } from 'react';
import { cards } from '../../data/cards';
import { ICard } from '../../interfaces';
import { TableContext, tableReducer } from './';


    export interface TableState {
        card?: ICard;
    }

    const Table_INITIAL_STATE:TableState = {
        
    }

    interface Props {}

    export const TableProvider:FC<PropsWithChildren<Props>> = ({children})=>{

        const [state, dispatch] = useReducer(tableReducer, Table_INITIAL_STATE)

        const setCardOnTable = (playCard:ICard) =>{
            dispatch({type:'[Table]- PutCardOnTable', payload: playCard })
        }


        return ( 
            <TableContext.Provider value={{
                card:state.card,
                //methods
                setCardOnTable,
            }}>
                {children}
            </TableContext.Provider>
        )

    }