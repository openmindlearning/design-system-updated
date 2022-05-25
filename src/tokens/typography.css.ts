export const fontFamily = "Maison Neue";
export const fontFamilyMono = "Maison Neue Mono";
export const displayFontFamily = "Tusker Grotesk";

export enum FontWeight {
  normal = "400",
  semibold = "600",
  bold = "700",
}

export enum FontStyle {
  normal = "normal",
  italic = "italic",
}

const displayStyleBase = {
  fontFamily: `${displayFontFamily}, Sans-Serif`,
  fontWeight: FontWeight.semibold,
  fontStyle: FontStyle.normal,
};

const display = {
  xxlarge: {
    ...displayStyleBase,
    fontSize: "52px",
    lineHeight: "64px",
  },
  xlarge: {
    ...displayStyleBase,
    fontSize: "44px",
    lineHeight: "60px",
  },
  large: {
    ...displayStyleBase,
    fontSize: "40px",
    lineHeight: "52px",
  },
  medium: {
    ...displayStyleBase,
    fontSize: "32px",
    lineHeight: "44px",
  },
  small: {
    ...displayStyleBase,
    fontSize: "24px",
    lineHeight: "32px",
  },
  xsmall: {
    ...displayStyleBase,
    fontSize: "16px",
    lineHeight: "24px",
  },
};

const headerStyleBase = {
  fontFamily: `${fontFamily}, Sans-Serif`,
  fontWeight: FontWeight.bold,
  fontStyle: FontStyle.normal,
};

const header = {
  xxlarge: {
    ...headerStyleBase,
    fontSize: "40px",
    lineHeight: "52px",
  },
  xlarge: {
    ...headerStyleBase,
    fontSize: "36px",
    lineHeight: "48px",
  },
  large: {
    ...headerStyleBase,
    fontSize: "32px",
    lineHeight: "40px",
  },
  medium: {
    ...headerStyleBase,
    fontSize: "28px",
    lineHeight: "36px",
  },
  small: {
    ...headerStyleBase,
    fontSize: "24px",
    lineHeight: "32px",
  },
  xsmall: {
    ...headerStyleBase,
    fontSize: "20px",
    lineHeight: "28px",
  },
};

const labelStyleBase = {
  fontFamily: `${fontFamilyMono}, monospace`,
  fontWeight: FontWeight.normal,
  fontStyle: FontStyle.normal,
};

const label = {
  xxlarge: {
    ...labelStyleBase,
    fontSize: "28px",
    lineHeight: "36px",
  },
  large: {
    ...labelStyleBase,
    fontSize: "28px",
    lineHeight: "36px",
  },
  small: {
    ...labelStyleBase,
    fontSize: "18px",
    lineHeight: "24px",
  },
  xsmall: {
    ...labelStyleBase,
    fontSize: "12px",
    lineHeight: "16px",
  },
};

const bodyStyleBase = {
  fontFamily: `${fontFamily}, Sans-Serif`,
  fontWeight: FontWeight.normal,
  fontStyle: FontStyle.normal,
};

const body = {
  large: {
    ...bodyStyleBase,
    fontSize: "18px",
    lineHeight: "28px",
  },
  medium: {
    ...bodyStyleBase,
    fontSize: "16px",
    lineHeight: "24px",
  },
  small: {
    ...bodyStyleBase,
    fontSize: "14px",
    lineHeight: "20px",
  },
  xsmall: {
    ...bodyStyleBase,
    fontSize: "12px",
    lineHeight: "16px",
  },
  xxsmall: {
    ...bodyStyleBase,
    fontSize: "10px",
    lineHeight: "16px",
  },
};

export const typography = {
  display,
  header,
  label,
  body,
};
