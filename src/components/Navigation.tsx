import React from "react";
import Link from "next/link";

interface NavigationProps {
    categoryPageLinks: string[];
    contentPageLinks: string[];
}

export function Navigation({
    categoryPageLinks,
    contentPageLinks,
}: NavigationProps) {
    return (
        <nav>
            <h2>Categories:</h2>
            <ul>
                {categoryPageLinks.map((link, i) => (
                    <li key={i}>
                        <Link href={"/category/" + link}>
                            <a>{link}</a>
                        </Link>
                    </li>
                ))}
            </ul>

            <h2>Content Pages:</h2>
            <ul>
                {contentPageLinks.map((link, i) => (
                    <li key={i}>
                        <Link href={"/page/" + link}>
                            <a>{link}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
