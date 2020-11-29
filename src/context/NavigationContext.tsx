import { createContext } from "react";
import { NavigationLinkGroup } from "../models";

export interface NavigationContextMap {
    topNavigationLinkGroups: NavigationLinkGroup[];
}

export const NavigationContext = createContext<NavigationContextMap>(null);
