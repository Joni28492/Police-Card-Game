import {createContext} from 'react';

interface ContextProps {
    openHandMenu: boolean;
}

export const UIContext = createContext({} as ContextProps )