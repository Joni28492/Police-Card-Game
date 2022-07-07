import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer, ScreensType } from './';



    export interface UIState {
        openHandMenu: boolean;
        screen: ScreensType []
    }

    const UI_INITIAL_STATE:UIState = {
        screen: ["Stars", "Questions"],
        openHandMenu: false,
    
    }

    interface Props {}

    export const UIProvider:FC<PropsWithChildren<Props>> = ({children})=>{

        const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

        const toggleHand =()=>{
            dispatch({type:'[UI]- ToggleHand'})
        }

        const setScreensOnTable = (screeToAdded:ScreensType)=>{
            dispatch({type:'[UI]- SetScreen', payload: screeToAdded})
        }
 

        return ( 
            <UIContext.Provider value={{

                openHandMenu: true, 
                screen: ['Stars', 'Questions'],             
                //methods
                toggleHand,
                setScreensOnTable,
           

            }}>
                {children}
            </UIContext.Provider>
        )

    }