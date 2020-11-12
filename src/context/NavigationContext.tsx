import { createContext } from "react";

interface NavigationContextMap {
    categoryPageLinks: string[];
    contentPageLinks: string[];
}

export const NavigationContext = createContext<NavigationContextMap>(null);
