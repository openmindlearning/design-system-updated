export declare enum ThemeType {
    light = "light",
    dark = "dark"
}
export declare const lightThemeRawValues: {
    spacing: {
        "1x": string;
        "2x": string;
        "3x": string;
        "4x": string;
        "5x": string;
        "6x": string;
        "7x": string;
        "8x": string;
        "9x": string;
        "10x": string;
    };
    screenSizes: {
        mobile: import("../tokens").Breakpoint;
        tablet: import("../tokens").Breakpoint;
        desktop: import("../tokens").Breakpoint;
    };
    text: {
        display: {
            xxlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            medium: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
        header: {
            xxlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            medium: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
        label: {
            xxlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
        body: {
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            medium: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xxsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
    };
    boxShadows: {
        depth: {
            1: string;
            2: string;
            3: string;
        };
    };
    textShadows: {
        header: string;
        paragraph: string;
    };
    colors: {
        primary: {
            black: string;
            white: string;
            background: string;
            darkBlue: string;
            red: string;
            green: string;
            yellow: string;
        };
        content: {
            primary: string;
            secondary: string;
            tertiary: string;
            muted: string;
            light: string;
            accentPrimary: string;
            accentSecondary: string;
            success: string;
            danger: string;
            warning: string;
        };
        background: {
            primary: string;
            secondary: string;
            tertiary: string;
            marketing: string;
            success: string;
            danger: string;
            warning: string;
        };
        border: {
            opaque: string;
            default: string;
            selected: string;
            success: string;
            danger: string;
            warning: string;
        };
        grey: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        platinum: {
            "0": string;
            "25": string;
            "50": string;
            "75": string;
            "100": string;
            "150": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
        };
        red: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
        };
        yellow: {
            "50": string;
            "200": string;
            "500": string;
            "800": string;
        };
        green: {
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
    };
};
export declare const themeClass: string, theme: import("@vanilla-extract/private").MapLeafNodes<{
    spacing: {
        "1x": string;
        "2x": string;
        "3x": string;
        "4x": string;
        "5x": string;
        "6x": string;
        "7x": string;
        "8x": string;
        "9x": string;
        "10x": string;
    };
    screenSizes: {
        mobile: import("../tokens").Breakpoint;
        tablet: import("../tokens").Breakpoint;
        desktop: import("../tokens").Breakpoint;
    };
    text: {
        display: {
            xxlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            medium: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
        header: {
            xxlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            medium: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
        label: {
            xxlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
        body: {
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            medium: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xxsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
    };
    boxShadows: {
        depth: {
            1: string;
            2: string;
            3: string;
        };
    };
    textShadows: {
        header: string;
        paragraph: string;
    };
    colors: {
        primary: {
            black: string;
            white: string;
            background: string;
            darkBlue: string;
            red: string;
            green: string;
            yellow: string;
        };
        content: {
            primary: string;
            secondary: string;
            tertiary: string;
            muted: string;
            light: string;
            accentPrimary: string;
            accentSecondary: string;
            success: string;
            danger: string;
            warning: string;
        };
        background: {
            primary: string;
            secondary: string;
            tertiary: string;
            marketing: string;
            success: string;
            danger: string;
            warning: string;
        };
        border: {
            opaque: string;
            default: string;
            selected: string;
            success: string;
            danger: string;
            warning: string;
        };
        grey: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        platinum: {
            "0": string;
            "25": string;
            "50": string;
            "75": string;
            "100": string;
            "150": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
        };
        red: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
        };
        yellow: {
            "50": string;
            "200": string;
            "500": string;
            "800": string;
        };
        green: {
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
    };
}, import("@vanilla-extract/private").CSSVarFunction>;
export declare const darkThemeRawValues: {
    colors: {
        content: {
            primary: string;
            secondary: string;
            tertiary: string;
            muted: string;
            light: string;
            accentSecondary: string;
            accentPrimary: string;
            success: string;
            danger: string;
            warning: string;
        };
        background: {
            primary: string;
            secondary: string;
            tertiary: string;
            marketing: string;
            success: string;
            danger: string;
            warning: string;
        };
        border: {
            opaque: string;
            default: string;
            selected: string;
            success: string;
            danger: string;
            warning: string;
        };
        primary: {
            black: string;
            white: string;
            background: string;
            darkBlue: string;
            red: string;
            green: string;
            yellow: string;
        };
        grey: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
        platinum: {
            "0": string;
            "25": string;
            "50": string;
            "75": string;
            "100": string;
            "150": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
        };
        red: {
            "50": string;
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
        };
        yellow: {
            "50": string;
            "200": string;
            "500": string;
            "800": string;
        };
        green: {
            "100": string;
            "200": string;
            "300": string;
            "400": string;
            "500": string;
            "600": string;
            "700": string;
            "800": string;
            "900": string;
        };
    };
    spacing: {
        "1x": string;
        "2x": string;
        "3x": string;
        "4x": string;
        "5x": string;
        "6x": string;
        "7x": string;
        "8x": string;
        "9x": string;
        "10x": string;
    };
    screenSizes: {
        mobile: import("../tokens").Breakpoint;
        tablet: import("../tokens").Breakpoint;
        desktop: import("../tokens").Breakpoint;
    };
    text: {
        display: {
            xxlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            medium: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
        header: {
            xxlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            medium: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
        label: {
            xxlarge: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
        body: {
            large: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            medium: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            small: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
            xxsmall: {
                fontSize: string;
                lineHeight: string;
                fontFamily: string;
                fontWeight: import("../tokens").FontWeight;
                fontStyle: import("../tokens").FontStyle;
            };
        };
    };
    boxShadows: {
        depth: {
            1: string;
            2: string;
            3: string;
        };
    };
    textShadows: {
        header: string;
        paragraph: string;
    };
};
export declare const darkThemeClass: string;
export { FontWeight, FontStyle, Breakpoint } from "../tokens";
