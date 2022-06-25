import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';


    export interface UIState {
        openHandMenu: boolean;
    }

    const UI_INITIAL_STATE:UIState = {
        openHandMenu: false,
    }

    interface Props {}

    export const UIProvider:FC<PropsWithChildren<Props>> = ({children})=>{

        const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)


        return ( 
            <UIContext.Provider value={{
                openHandMenu: false
            }}>
                {children}
            </UIContext.Provider>
        )

    }