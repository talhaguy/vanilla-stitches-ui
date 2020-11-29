import { partial } from "lodash";
import { GetNavigationLinkGroupDataFunction } from "../../pageData";
import {
    fetchNavigationLinks as _fetchNavigationLinks,
    convertSanityNavigationLinkGroupDataForUI,
} from "./navigation";
import { getClient } from "../client";

const fetchNavigationLinksPartial = partial(_fetchNavigationLinks, getClient());

export const fetchNavigationLinks: GetNavigationLinkGroupDataFunction = () =>
    fetchNavigationLinksPartial().then(
        convertSanityNavigationLinkGroupDataForUI
    );
