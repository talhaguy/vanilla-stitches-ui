import React from "react";
import Link from "next/link";
import { NavigationLinkGroup } from "./models/NavigationLinkGroup";

interface NavigationProps {
    navigationLinkGroups: NavigationLinkGroup[];
}

export function Navigation({ navigationLinkGroups }: NavigationProps) {
    return (
        <nav>
            {navigationLinkGroups.map((group, i) => {
                return (
                    <>
                        <h2>{group.label}</h2>
                        <ul>
                            {group.links.map((link, j) => {
                                return (
                                    <li>
                                        <Link href={link.path}>
                                            <a>{link.label}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                );
            })}
        </nav>
    );
}
