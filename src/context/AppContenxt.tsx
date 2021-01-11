import {createContext, Dispatch} from "react";

import {eventItem, eventAction} from "../reducers"

type ContextValue = {
    state : eventItem[],
    dispatch : Dispatch<eventAction>
}

export const AppContext = createContext({} as ContextValue);