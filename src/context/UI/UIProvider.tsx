import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';
import { ScreensType } from './UIContext';


    export interface UIState {
        openHandMenu: boolean;
        screen: ScreensType;
    }

    const UI_INITIAL_STATE:UIState = {
        openHandMenu: false,
        screen: "Empty"
    }

    interface Props {}

    export const UIProvider:FC<PropsWithChildren<Props>> = ({children})=>{

        const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

        const toggleHand =()=>{
            dispatch({type:'[UI]- ToggleHand'})
        }

        const setScreen = (screen:ScreensType) =>{
            dispatch({type: '[UI]- SetScreen', payload: screen})
        }

        return ( 
            <UIContext.Provider value={{
                openHandMenu: true,
                screen: "Empty",
                //methods
                toggleHand,
                setScreen,

            }}>
                {children}
            </UIContext.Provider>
        )

    }