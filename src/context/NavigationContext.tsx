import { createContext } from "react";
import { NavigationLinkGroup } from "../components";

export interface NavigationContextMap {
    topNavigationLinkGroups: NavigationLinkGroup[];
}

export const NavigationContext = createContext<NavigationContextMap>(null);
