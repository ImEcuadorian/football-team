import {createContext, Dispatch, ReactNode, useReducer} from "react";
import {FootballReducer, footballReducer, initialState} from "../reducers/FootballReducer.ts";
import {Team} from "../types";

type FootballProviderProps = {
    children: ReactNode
}

type FootballContextType = {
    state: Team
    dispatch: Dispatch<FootballReducer>
}

export const FootballContext = createContext<FootballContextType>(null!);

export const FootballProvider = ({children} : FootballProviderProps) => {

    const [state, dispatch] = useReducer(footballReducer, initialState);


    return (
        <FootballContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </FootballContext.Provider>
    )
}
