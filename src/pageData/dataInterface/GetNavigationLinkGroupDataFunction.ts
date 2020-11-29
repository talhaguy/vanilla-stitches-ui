import { NavigationLinkGroup } from "../../models";

export interface GetNavigationLinkGroupDataFunction {
    (): Promise<NavigationLinkGroup[]>;
}
