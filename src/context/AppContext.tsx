import React, { useState, createContext, useReducer } from "react";
import { userReducer,  initialState, GlobalState} from "../store";

type AppContextType = {
    state: GlobalState
};

export const AppContext = createContext<AppContextType>({state: initialState});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(userReducer, initialState)
    const value = {
        state,
        dispatch
    }
    return ( 
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};