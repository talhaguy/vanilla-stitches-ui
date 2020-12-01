// adapted from https://styled-components.com/docs/api#typescript
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        FONTS: {
            SANS: string;
            SERIF: string;
        };
        COLORS: {
            BLACK: string;
            LIGHT_PINK: string;
            DARK_TURQOISE: string;
            BLOOD_RED: string;
            GOLD: string;
            WHITE: string;
        };
        SPACING: {
            PAGE_MARGIN: string;
        };
        SHADOWS: {
            ICONS: string;
        };
    }
}
