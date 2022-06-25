import { UIState } from './UIProvider';

type UIActionType =
    | {type:'[UI]- Show Hand'}
    | {type:'[UI]- Hide Hand'}

export const uiReducer =(state:UIState, action: UIActionType):UIState=>{

    switch (action.type) {
    case '[UI]- Show Hand':
        return {
            ...state,
            openHandMenu:true,
        }
    case '[UI]- Hide Hand':
        return {
            ...state,
            openHandMenu:false,
        }

        default:
        return state;
    }

}