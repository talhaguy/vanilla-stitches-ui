import { createContext } from "react";

export interface NavigationContextMap {
    categoryPageLinks: string[];
    contentPageLinks: string[];
}

export const NavigationContext = createContext<NavigationContextMap>(null);
