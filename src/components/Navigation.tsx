import React from "react";
import Link from "next/link";
import { NavigationLinkGroup } from "../models";

interface NavigationProps {
    navigationLinkGroups: NavigationLinkGroup[];
}

export function Navigation({ navigationLinkGroups }: NavigationProps) {
    return (
        <nav>
            {navigationLinkGroups.map((group, i) => {
                return (
                    <div key={i}>
                        <h2>{group.label}</h2>
                        <ul>
                            {group.links.map((link, j) => {
                                return (
                                    <li key={j}>
                                        <Link href={link.path}>
                                            <a>{link.label}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </nav>
    );
}
