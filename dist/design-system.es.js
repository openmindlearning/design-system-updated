var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import React$2, { createContext, useState, useCallback, useRef, useEffect, forwardRef, Children, useMemo } from "react";
var designSystem_vanilla$o = "";
var designSystem_vanilla$n = "";
var Breakpoint$1 = { Mobile: "400px", Small: "600px", Tablet: "834px", Desktop: "1120px", Large: "1200px" };
var FontStyle = { normal: "normal", italic: "italic" };
var FontWeight = { normal: "400", semibold: "600", bold: "700" };
var ThemeType = { light: "light", dark: "dark" };
var darkThemeClass = "_1vhlme75g";
var darkThemeRawValues = { spacing: { "1x": "4px", "2x": "8px", "3x": "12px", "4x": "16px", "5x": "24px", "6x": "32px", "7x": "40px", "8x": "48px", "9x": "56px", "10x": "64px" }, screenSizes: { mobile: "400px", tablet: "834px", desktop: "1120px" }, text: { display: { xxlarge: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "52px", lineHeight: "64px" }, xlarge: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "44px", lineHeight: "60px" }, large: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "40px", lineHeight: "52px" }, medium: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "32px", lineHeight: "44px" }, small: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "24px", lineHeight: "32px" }, xsmall: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "16px", lineHeight: "24px" } }, header: { xxlarge: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "40px", lineHeight: "52px" }, xlarge: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "36px", lineHeight: "48px" }, large: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "32px", lineHeight: "40px" }, medium: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "28px", lineHeight: "36px" }, small: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "24px", lineHeight: "32px" }, xsmall: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "20px", lineHeight: "28px" } }, label: { xxlarge: { fontFamily: "Maison Neue Mono, monospace", fontWeight: "400", fontStyle: "normal", fontSize: "28px", lineHeight: "36px" }, large: { fontFamily: "Maison Neue Mono, monospace", fontWeight: "400", fontStyle: "normal", fontSize: "28px", lineHeight: "36px" }, small: { fontFamily: "Maison Neue Mono, monospace", fontWeight: "400", fontStyle: "normal", fontSize: "18px", lineHeight: "24px" }, xsmall: { fontFamily: "Maison Neue Mono, monospace", fontWeight: "400", fontStyle: "normal", fontSize: "12px", lineHeight: "16px" } }, body: { large: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "18px", lineHeight: "28px" }, medium: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "16px", lineHeight: "24px" }, small: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "14px", lineHeight: "20px" }, xsmall: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "12px", lineHeight: "16px" }, xxsmall: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "10px", lineHeight: "16px" } } }, boxShadows: { depth: { "1": "0px 1px 2px rgba(0,0,0, 0.05), 0px 1px 4px rgba(0,0,0, 0.05)", "2": "0px 1px 4px rgba(0,0,0, 0.05), 0px 4px 12px rgba(0,0,0, 0.10)", "3": "0px 4px 4px rgba(0,0,0, 0.10), 0px 8px 12px rgba(0,0,0, 0.20)" } }, textShadows: { header: "0px 1px 4px rgba(0,0,0, 0.50)", paragraph: "0px 1px 2px rgba(0,0,0, 0.50)" }, colors: { grey: { "50": "#F6F6F6", "100": "#EEEEEE", "200": "#E2E2E2", "300": "#CBCBCB", "400": "#AFAFAF", "500": "#757575", "600": "#545454", "700": "#333333", "800": "#1f1f1f", "900": "#141414" }, platinum: { "0": "#171A1F", "25": "#1F2229", "50": "#272B34", "75": "#2F343E", "100": "#373D49", "150": "#474F5D", "200": "#576171", "300": "#778396", "400": "#96A2B4", "500": "#B3BDCC", "600": "#CDD4DE" }, red: { "50": "#FDEEEE", "100": "#FBDDDD", "200": "#F7BCBC", "300": "#F39A9A", "400": "#EF7979", "500": "#EB5757", "600": "#BC4646", "700": "#8D3434" }, yellow: { "50": "#FFF6DF", "200": "#F2E3BB", "500": "#DFB854", "800": "#594A22" }, green: { "100": "#E3FBE7", "200": "#D6F3DB", "300": "#A6E9BE", "400": "#87D3AB", "500": "#5FB791", "600": "#459D80", "700": "#2F8370", "800": "#1E6A60", "900": "#125755" }, primary: { black: "#000000", white: "#FFFFFF", background: "#FBFBFB", darkBlue: "#1C1C25", red: "#EB5757", green: "#2F8370", yellow: "#FAE26A" }, content: { primary: "#FFFFFF", secondary: "#CDD4DE", tertiary: "#96A2B4", muted: "#576171", light: "#171A1F", accentPrimary: "#FAE26A", accentSecondary: "#FFFFFF", success: "#2F8370", danger: "#EB5757", warning: "#594A22" }, background: { primary: "#171A1F", secondary: "#1F2229", tertiary: "#2F343E", marketing: "#F9F9FB", success: "#E3FBE7", danger: "#FDEEEE", warning: "#FFF6DF" }, border: { opaque: "#2F343E", "default": "#474F5D", selected: "#CDD4DE", success: "#D6F3DB", danger: "#EB5757", warning: "#FAE26A" } } };
var lightThemeRawValues = { spacing: { "1x": "4px", "2x": "8px", "3x": "12px", "4x": "16px", "5x": "24px", "6x": "32px", "7x": "40px", "8x": "48px", "9x": "56px", "10x": "64px" }, screenSizes: { mobile: "400px", tablet: "834px", desktop: "1120px" }, text: { display: { xxlarge: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "52px", lineHeight: "64px" }, xlarge: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "44px", lineHeight: "60px" }, large: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "40px", lineHeight: "52px" }, medium: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "32px", lineHeight: "44px" }, small: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "24px", lineHeight: "32px" }, xsmall: { fontFamily: "Tusker Grotesk, Sans-Serif", fontWeight: "600", fontStyle: "normal", fontSize: "16px", lineHeight: "24px" } }, header: { xxlarge: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "40px", lineHeight: "52px" }, xlarge: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "36px", lineHeight: "48px" }, large: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "32px", lineHeight: "40px" }, medium: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "28px", lineHeight: "36px" }, small: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "24px", lineHeight: "32px" }, xsmall: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "20px", lineHeight: "28px" } }, label: { xxlarge: { fontFamily: "Maison Neue Mono, monospace", fontWeight: "400", fontStyle: "normal", fontSize: "28px", lineHeight: "36px" }, large: { fontFamily: "Maison Neue Mono, monospace", fontWeight: "400", fontStyle: "normal", fontSize: "28px", lineHeight: "36px" }, small: { fontFamily: "Maison Neue Mono, monospace", fontWeight: "400", fontStyle: "normal", fontSize: "18px", lineHeight: "24px" }, xsmall: { fontFamily: "Maison Neue Mono, monospace", fontWeight: "400", fontStyle: "normal", fontSize: "12px", lineHeight: "16px" } }, body: { large: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "18px", lineHeight: "28px" }, medium: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "16px", lineHeight: "24px" }, small: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "14px", lineHeight: "20px" }, xsmall: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "12px", lineHeight: "16px" }, xxsmall: { fontFamily: "Maison Neue, Sans-Serif", fontWeight: "400", fontStyle: "normal", fontSize: "10px", lineHeight: "16px" } } }, boxShadows: { depth: { "1": "0px 1px 2px rgba(0,0,0, 0.05), 0px 1px 4px rgba(0,0,0, 0.05)", "2": "0px 1px 4px rgba(0,0,0, 0.05), 0px 4px 12px rgba(0,0,0, 0.10)", "3": "0px 4px 4px rgba(0,0,0, 0.10), 0px 8px 12px rgba(0,0,0, 0.20)" } }, textShadows: { header: "0px 1px 4px rgba(0,0,0, 0.50)", paragraph: "0px 1px 2px rgba(0,0,0, 0.50)" }, colors: { grey: { "50": "#F6F6F6", "100": "#EEEEEE", "200": "#E2E2E2", "300": "#CBCBCB", "400": "#AFAFAF", "500": "#757575", "600": "#545454", "700": "#333333", "800": "#1f1f1f", "900": "#141414" }, platinum: { "0": "#171A1F", "25": "#1F2229", "50": "#272B34", "75": "#2F343E", "100": "#373D49", "150": "#474F5D", "200": "#576171", "300": "#778396", "400": "#96A2B4", "500": "#B3BDCC", "600": "#CDD4DE" }, red: { "50": "#FDEEEE", "100": "#FBDDDD", "200": "#F7BCBC", "300": "#F39A9A", "400": "#EF7979", "500": "#EB5757", "600": "#BC4646", "700": "#8D3434" }, yellow: { "50": "#FFF6DF", "200": "#F2E3BB", "500": "#DFB854", "800": "#594A22" }, green: { "100": "#E3FBE7", "200": "#D6F3DB", "300": "#A6E9BE", "400": "#87D3AB", "500": "#5FB791", "600": "#459D80", "700": "#2F8370", "800": "#1E6A60", "900": "#125755" }, primary: { black: "#000000", white: "#FFFFFF", background: "#FBFBFB", darkBlue: "#1C1C25", red: "#EB5757", green: "#2F8370", yellow: "#FAE26A" }, content: { primary: "#000000", secondary: "#545454", tertiary: "#757575", muted: "#AFAFAF", light: "#FFFFFF", accentPrimary: "#FAE26A", accentSecondary: "#1C1C25", success: "#2F8370", danger: "#EB5757", warning: "#594A22" }, background: { primary: "#FBFBFB", secondary: "#FFFFFF", tertiary: "#F6F6F6", marketing: "#F9F9FB", success: "#E3FBE7", danger: "#FDEEEE", warning: "#FFF6DF" }, border: { opaque: "#E7E7E7", "default": "#CBCBCB", selected: "#000000", success: "#D6F3DB", danger: "#EB5757", warning: "#FAE26A" } } };
var theme = { spacing: { "1x": "var(--_1vhlme71)", "2x": "var(--_1vhlme72)", "3x": "var(--_1vhlme73)", "4x": "var(--_1vhlme74)", "5x": "var(--_1vhlme75)", "6x": "var(--_1vhlme76)", "7x": "var(--_1vhlme77)", "8x": "var(--_1vhlme78)", "9x": "var(--_1vhlme79)", "10x": "var(--_1vhlme7a)" }, screenSizes: { mobile: "var(--_1vhlme7b)", tablet: "var(--_1vhlme7c)", desktop: "var(--_1vhlme7d)" }, text: { display: { xxlarge: { fontFamily: "var(--_1vhlme7e)", fontWeight: "var(--_1vhlme7f)", fontStyle: "var(--_1vhlme7g)", fontSize: "var(--_1vhlme7h)", lineHeight: "var(--_1vhlme7i)" }, xlarge: { fontFamily: "var(--_1vhlme7j)", fontWeight: "var(--_1vhlme7k)", fontStyle: "var(--_1vhlme7l)", fontSize: "var(--_1vhlme7m)", lineHeight: "var(--_1vhlme7n)" }, large: { fontFamily: "var(--_1vhlme7o)", fontWeight: "var(--_1vhlme7p)", fontStyle: "var(--_1vhlme7q)", fontSize: "var(--_1vhlme7r)", lineHeight: "var(--_1vhlme7s)" }, medium: { fontFamily: "var(--_1vhlme7t)", fontWeight: "var(--_1vhlme7u)", fontStyle: "var(--_1vhlme7v)", fontSize: "var(--_1vhlme7w)", lineHeight: "var(--_1vhlme7x)" }, small: { fontFamily: "var(--_1vhlme7y)", fontWeight: "var(--_1vhlme7z)", fontStyle: "var(--_1vhlme710)", fontSize: "var(--_1vhlme711)", lineHeight: "var(--_1vhlme712)" }, xsmall: { fontFamily: "var(--_1vhlme713)", fontWeight: "var(--_1vhlme714)", fontStyle: "var(--_1vhlme715)", fontSize: "var(--_1vhlme716)", lineHeight: "var(--_1vhlme717)" } }, header: { xxlarge: { fontFamily: "var(--_1vhlme718)", fontWeight: "var(--_1vhlme719)", fontStyle: "var(--_1vhlme71a)", fontSize: "var(--_1vhlme71b)", lineHeight: "var(--_1vhlme71c)" }, xlarge: { fontFamily: "var(--_1vhlme71d)", fontWeight: "var(--_1vhlme71e)", fontStyle: "var(--_1vhlme71f)", fontSize: "var(--_1vhlme71g)", lineHeight: "var(--_1vhlme71h)" }, large: { fontFamily: "var(--_1vhlme71i)", fontWeight: "var(--_1vhlme71j)", fontStyle: "var(--_1vhlme71k)", fontSize: "var(--_1vhlme71l)", lineHeight: "var(--_1vhlme71m)" }, medium: { fontFamily: "var(--_1vhlme71n)", fontWeight: "var(--_1vhlme71o)", fontStyle: "var(--_1vhlme71p)", fontSize: "var(--_1vhlme71q)", lineHeight: "var(--_1vhlme71r)" }, small: { fontFamily: "var(--_1vhlme71s)", fontWeight: "var(--_1vhlme71t)", fontStyle: "var(--_1vhlme71u)", fontSize: "var(--_1vhlme71v)", lineHeight: "var(--_1vhlme71w)" }, xsmall: { fontFamily: "var(--_1vhlme71x)", fontWeight: "var(--_1vhlme71y)", fontStyle: "var(--_1vhlme71z)", fontSize: "var(--_1vhlme720)", lineHeight: "var(--_1vhlme721)" } }, label: { xxlarge: { fontFamily: "var(--_1vhlme722)", fontWeight: "var(--_1vhlme723)", fontStyle: "var(--_1vhlme724)", fontSize: "var(--_1vhlme725)", lineHeight: "var(--_1vhlme726)" }, large: { fontFamily: "var(--_1vhlme727)", fontWeight: "var(--_1vhlme728)", fontStyle: "var(--_1vhlme729)", fontSize: "var(--_1vhlme72a)", lineHeight: "var(--_1vhlme72b)" }, small: { fontFamily: "var(--_1vhlme72c)", fontWeight: "var(--_1vhlme72d)", fontStyle: "var(--_1vhlme72e)", fontSize: "var(--_1vhlme72f)", lineHeight: "var(--_1vhlme72g)" }, xsmall: { fontFamily: "var(--_1vhlme72h)", fontWeight: "var(--_1vhlme72i)", fontStyle: "var(--_1vhlme72j)", fontSize: "var(--_1vhlme72k)", lineHeight: "var(--_1vhlme72l)" } }, body: { large: { fontFamily: "var(--_1vhlme72m)", fontWeight: "var(--_1vhlme72n)", fontStyle: "var(--_1vhlme72o)", fontSize: "var(--_1vhlme72p)", lineHeight: "var(--_1vhlme72q)" }, medium: { fontFamily: "var(--_1vhlme72r)", fontWeight: "var(--_1vhlme72s)", fontStyle: "var(--_1vhlme72t)", fontSize: "var(--_1vhlme72u)", lineHeight: "var(--_1vhlme72v)" }, small: { fontFamily: "var(--_1vhlme72w)", fontWeight: "var(--_1vhlme72x)", fontStyle: "var(--_1vhlme72y)", fontSize: "var(--_1vhlme72z)", lineHeight: "var(--_1vhlme730)" }, xsmall: { fontFamily: "var(--_1vhlme731)", fontWeight: "var(--_1vhlme732)", fontStyle: "var(--_1vhlme733)", fontSize: "var(--_1vhlme734)", lineHeight: "var(--_1vhlme735)" }, xxsmall: { fontFamily: "var(--_1vhlme736)", fontWeight: "var(--_1vhlme737)", fontStyle: "var(--_1vhlme738)", fontSize: "var(--_1vhlme739)", lineHeight: "var(--_1vhlme73a)" } } }, boxShadows: { depth: { "1": "var(--_1vhlme73b)", "2": "var(--_1vhlme73c)", "3": "var(--_1vhlme73d)" } }, textShadows: { header: "var(--_1vhlme73e)", paragraph: "var(--_1vhlme73f)" }, colors: { grey: { "50": "var(--_1vhlme73g)", "100": "var(--_1vhlme73h)", "200": "var(--_1vhlme73i)", "300": "var(--_1vhlme73j)", "400": "var(--_1vhlme73k)", "500": "var(--_1vhlme73l)", "600": "var(--_1vhlme73m)", "700": "var(--_1vhlme73n)", "800": "var(--_1vhlme73o)", "900": "var(--_1vhlme73p)" }, platinum: { "0": "var(--_1vhlme73q)", "25": "var(--_1vhlme73r)", "50": "var(--_1vhlme73s)", "75": "var(--_1vhlme73t)", "100": "var(--_1vhlme73u)", "150": "var(--_1vhlme73v)", "200": "var(--_1vhlme73w)", "300": "var(--_1vhlme73x)", "400": "var(--_1vhlme73y)", "500": "var(--_1vhlme73z)", "600": "var(--_1vhlme740)" }, red: { "50": "var(--_1vhlme741)", "100": "var(--_1vhlme742)", "200": "var(--_1vhlme743)", "300": "var(--_1vhlme744)", "400": "var(--_1vhlme745)", "500": "var(--_1vhlme746)", "600": "var(--_1vhlme747)", "700": "var(--_1vhlme748)" }, yellow: { "50": "var(--_1vhlme749)", "200": "var(--_1vhlme74a)", "500": "var(--_1vhlme74b)", "800": "var(--_1vhlme74c)" }, green: { "100": "var(--_1vhlme74d)", "200": "var(--_1vhlme74e)", "300": "var(--_1vhlme74f)", "400": "var(--_1vhlme74g)", "500": "var(--_1vhlme74h)", "600": "var(--_1vhlme74i)", "700": "var(--_1vhlme74j)", "800": "var(--_1vhlme74k)", "900": "var(--_1vhlme74l)" }, primary: { black: "var(--_1vhlme74m)", white: "var(--_1vhlme74n)", background: "var(--_1vhlme74o)", darkBlue: "var(--_1vhlme74p)", red: "var(--_1vhlme74q)", green: "var(--_1vhlme74r)", yellow: "var(--_1vhlme74s)" }, content: { primary: "var(--_1vhlme74t)", secondary: "var(--_1vhlme74u)", tertiary: "var(--_1vhlme74v)", muted: "var(--_1vhlme74w)", light: "var(--_1vhlme74x)", accentPrimary: "var(--_1vhlme74y)", accentSecondary: "var(--_1vhlme74z)", success: "var(--_1vhlme750)", danger: "var(--_1vhlme751)", warning: "var(--_1vhlme752)" }, background: { primary: "var(--_1vhlme753)", secondary: "var(--_1vhlme754)", tertiary: "var(--_1vhlme755)", marketing: "var(--_1vhlme756)", success: "var(--_1vhlme757)", danger: "var(--_1vhlme758)", warning: "var(--_1vhlme759)" }, border: { opaque: "var(--_1vhlme75a)", "default": "var(--_1vhlme75b)", selected: "var(--_1vhlme75c)", success: "var(--_1vhlme75d)", danger: "var(--_1vhlme75e)", warning: "var(--_1vhlme75f)" } } };
var themeClass = "_1vhlme70";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty$1.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React$2, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
const ThemeContext = createContext({
  theme: ThemeType.light,
  setTheme: () => {
    console.error("ThemeContext is not initialized yet");
  }
});
const ThemeWrapper = ({
  theme: theme2,
  children
}) => /* @__PURE__ */ jsx("div", {
  className: theme2 === ThemeType.light ? themeClass : darkThemeClass,
  children
});
const ThemeProvider = ({
  children,
  defaultTheme
}) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme != null ? defaultTheme : ThemeType.light);
  const setTheme = useCallback((theme2) => {
    setCurrentTheme(theme2);
  }, []);
  return /* @__PURE__ */ jsx(ThemeContext.Provider, {
    value: {
      theme: currentTheme,
      setTheme
    },
    children: /* @__PURE__ */ jsx(ThemeWrapper, {
      theme: currentTheme,
      children
    })
  });
};
const useTheme = () => React$2.useContext(ThemeContext);
var classnames = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classNames = classnames.exports;
function AnimatedSpinner({
  className
}) {
  return /* @__PURE__ */ jsx("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    className: classNames(["lds-rolling", className]),
    style: {
      background: "0 0"
    },
    children: /* @__PURE__ */ jsx("circle", {
      cx: 50,
      cy: 50,
      fill: "none",
      stroke: "#fff",
      strokeWidth: 10,
      r: 42,
      strokeDasharray: "197.92033717615698 67.97344572538566",
      transform: "rotate(233.933 50 50)",
      children: /* @__PURE__ */ jsx("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        calcMode: "linear",
        values: "0 50 50;360 50 50",
        keyTimes: "0;1",
        dur: "1s",
        begin: "0s",
        repeatCount: "indefinite"
      })
    })
  });
}
var designSystem_vanilla$m = "";
var blurredBox$1 = "_5p0c0q0";
const BlurredBox = ({
  className,
  children
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: classNames(blurredBox$1, className),
    children
  });
};
var designSystem_vanilla$l = "";
var container$4 = "_1baoega0";
var designSystem_vanilla$k = "";
var breadcrumb = "_1eby1zp3";
var labelVariants = { primary: "_1eby1zp5 _1eby1zp4", secondary: "_1eby1zp6 _1eby1zp4" };
var numberVariants = { inactive: "_1eby1zp1 _1eby1zp0", active: "_1eby1zp2 _1eby1zp0" };
const DEFAULT_ICON = {
  WIDTH: 24,
  HEIGHT: 24
};
const AboutIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.8888 7C16.8888 9.7625 14.6513 12 11.8888 12C9.12632 12 6.88882 9.7625 6.88882 7C6.88882 4.2375 9.12632 2 11.8888 2C14.6513 2 16.8888 4.2375 16.8888 7ZM1.88882 19.5C1.88882 16.175 8.55132 14.5 11.8888 14.5C15.2263 14.5 21.8888 16.175 21.8888 19.5V20.75C21.8888 21.4375 21.3263 22 20.6388 22H3.13882C2.45132 22 1.88882 21.4375 1.88882 20.75V19.5Z",
      fill: "#545454"
    })
  });
};
const AtMentionsIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M12 3C7.032 3 3 7.032 3 12C3 16.968 7.032 21 12 21H16.5V19.2H12C8.094 19.2 4.8 15.906 4.8 12C4.8 8.094 8.094 4.8 12 4.8C15.906 4.8 19.2 8.094 19.2 12V13.287C19.2 13.998 18.561 14.7 17.85 14.7C17.139 14.7 16.5 13.998 16.5 13.287V12C16.5 9.516 14.484 7.5 12 7.5C9.516 7.5 7.5 9.516 7.5 12C7.5 14.484 9.516 16.5 12 16.5C13.242 16.5 14.376 15.996 15.186 15.177C15.771 15.978 16.779 16.5 17.85 16.5C19.623 16.5 21 15.06 21 13.287V12C21 7.032 16.968 3 12 3ZM12 14.7C10.506 14.7 9.3 13.494 9.3 12C9.3 10.506 10.506 9.3 12 9.3C13.494 9.3 14.7 10.506 14.7 12C14.7 13.494 13.494 14.7 12 14.7Z",
      fill: "#545454"
    })
  });
};
const AttachFileIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("g", {
      clipPath: "url(#clip0_8_107)",
      children: /* @__PURE__ */ jsx("path", {
        d: "M19.2108 11.7828L11.7296 19.264C10.2518 20.7418 7.8547 20.9752 6.24249 19.6458C4.38987 18.1185 4.29795 15.382 5.95258 13.7273L14.6924 4.9875C15.6187 4.06119 17.1249 3.88441 18.136 4.71172C19.3028 5.66632 19.3664 7.38459 18.3269 8.42403L10.9023 15.8487C10.5134 16.2376 9.87702 16.2376 9.48811 15.8487C9.0992 15.4597 9.0992 14.8234 9.48811 14.4344L15.6753 8.24726C15.9652 7.95734 15.9652 7.47651 15.6753 7.1866C15.3854 6.89668 14.9046 6.89668 14.6146 7.1866L8.52645 13.2748C7.60014 14.2011 7.42336 15.7072 8.25068 16.7184C9.20527 17.8851 10.9235 17.9488 11.963 16.9093L19.2674 9.6049C20.7453 8.12705 20.9786 5.72996 19.6492 4.11775C18.129 2.2722 15.3854 2.17321 13.7308 3.82784L5.05455 12.504C3.02516 14.5334 2.69282 17.8356 4.52422 20.0489C6.63847 22.5874 10.3932 22.7217 12.6701 20.4448L20.2715 12.8435C20.5614 12.5535 20.5614 12.0727 20.2715 11.7828C19.9816 11.4929 19.5007 11.4929 19.2108 11.7828Z",
        fill: "#545454"
      })
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id: "clip0_8_107",
        children: /* @__PURE__ */ jsx("rect", {
          width: "24",
          height: "24",
          fill: "white"
        })
      })
    })]
  });
};
const BackIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("rect", {
      width: "10.0787",
      height: "2.16046",
      transform: "matrix(0.664454 -0.747329 0.664454 0.747329 4.5 12.0321)",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("rect", {
      width: "10.0874",
      height: "2.16046",
      transform: "matrix(-0.664454 -0.747329 0.664454 -0.747329 11.2075 19.5911)",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("rect", {
      width: "14.0049",
      height: "2.28825",
      transform: "matrix(-1 0 -0.0037914 -0.999993 20.7261 13.163)",
      fill: "#545454"
    })]
  });
};
const BellNoNotificationIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.2902 17.04L18.0002 15.75V10.75C18.0002 7.68 16.3602 5.11 13.5002 4.43V3.75C13.5002 2.92 12.8302 2.25 12.0002 2.25C11.1702 2.25 10.5002 2.92 10.5002 3.75V4.43C7.63017 5.11 6.00017 7.67 6.00017 10.75V15.75L4.71017 17.04C4.08017 17.67 4.52017 18.75 5.41017 18.75H18.5802C19.4802 18.75 19.9202 17.67 19.2902 17.04ZM8.00017 16.75V10.75C8.00017 8.27 9.51017 6.25 12.0002 6.25C14.4902 6.25 16.0002 8.27 16.0002 10.75V16.75H8.00017ZM14.0002 19.75C14.0002 20.85 13.1002 21.75 12.0002 21.75C10.8902 21.75 10.0002 20.85 10.0002 19.75H14.0002Z",
      fill: "#545454"
    })
  });
};
const BellNotificationIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("circle", {
      cx: "20.5",
      cy: "3.5",
      r: "2",
      fill: "#FAE26A",
      stroke: "#545454"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.2902 17.04L18.0002 15.75V10.75C18.0002 7.68 16.3602 5.11 13.5002 4.43V3.75C13.5002 2.92 12.8302 2.25 12.0002 2.25C11.1702 2.25 10.5002 2.92 10.5002 3.75V4.43C7.63017 5.11 6.00017 7.67 6.00017 10.75V15.75L4.71017 17.04C4.08017 17.67 4.52017 18.75 5.41017 18.75H18.5802C19.4802 18.75 19.9202 17.67 19.2902 17.04ZM8.00017 16.75V10.75C8.00017 8.27 9.51017 6.25 12.0002 6.25C14.4902 6.25 16.0002 8.27 16.0002 10.75V16.75H8.00017ZM14.0002 19.75C14.0002 20.85 13.1002 21.75 12.0002 21.75C10.8902 21.75 10.0002 20.85 10.0002 19.75H14.0002Z",
      fill: "#545454"
    })]
  });
};
const BoldIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.225 11.79C16.195 11.12 16.875 10.02 16.875 9C16.875 6.74 15.125 5 12.875 5H7.62495C7.07495 5 6.62495 5.45 6.62495 6V18C6.62495 18.55 7.07495 19 7.62495 19H13.405C15.475 19 17.365 17.31 17.375 15.23C17.385 13.7 16.525 12.39 15.225 11.79ZM9.62495 7.5H12.625C13.455 7.5 14.125 8.17 14.125 9C14.125 9.83 13.455 10.5 12.625 10.5H9.62495V7.5ZM9.62495 16.5H13.125C13.955 16.5 14.625 15.83 14.625 15C14.625 14.17 13.955 13.5 13.125 13.5H9.62495V16.5Z",
      fill: "#545454"
    })
  });
};
const BulletListIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.36667 6.4C3.36667 5.62533 3.992 5 4.76667 5C5.54134 5 6.16667 5.62533 6.16667 6.4C6.16667 7.17467 5.54134 7.8 4.76667 7.8C3.992 7.8 3.36667 7.17467 3.36667 6.4ZM3.36667 12C3.36667 11.2253 3.992 10.6 4.76667 10.6C5.54134 10.6 6.16667 11.2253 6.16667 12C6.16667 12.7747 5.54134 13.4 4.76667 13.4C3.992 13.4 3.36667 12.7747 3.36667 12ZM4.76667 16.2C3.992 16.2 3.36667 16.8347 3.36667 17.6C3.36667 18.3653 4.00134 19 4.76667 19C5.532 19 6.16667 18.3653 6.16667 17.6C6.16667 16.8347 5.54134 16.2 4.76667 16.2ZM19.7 18.5333H8.5C7.98667 18.5333 7.56667 18.1133 7.56667 17.6C7.56667 17.0867 7.98667 16.6667 8.5 16.6667H19.7C20.2133 16.6667 20.6333 17.0867 20.6333 17.6C20.6333 18.1133 20.2133 18.5333 19.7 18.5333ZM8.5 12.9333H19.7C20.2133 12.9333 20.6333 12.5133 20.6333 12C20.6333 11.4867 20.2133 11.0667 19.7 11.0667H8.5C7.98667 11.0667 7.56667 11.4867 7.56667 12C7.56667 12.5133 7.98667 12.9333 8.5 12.9333ZM8.5 7.33333C7.98667 7.33333 7.56667 6.91333 7.56667 6.4C7.56667 5.88667 7.98667 5.46667 8.5 5.46667H19.7C20.2133 5.46667 20.6333 5.88667 20.6333 6.4C20.6333 6.91333 20.2133 7.33333 19.7 7.33333H8.5Z",
      fill: "#545454"
    })
  });
};
const CameraIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.6 6.6H20C21.1 6.6 22 7.5 22 8.6V17.6C22 18.7 21.1 19.6 20 19.6H4C2.9 19.6 2 18.7 2 17.6V8.6C2 7.5 2.9 6.6 4 6.6H6.4C6.73 6.6 7.0852 6.344 7.1898 6.031L7.8102 4.1692C7.9144 3.856 8.27 3.6 8.6 3.6H15.4C15.73 3.6 16.0852 3.856 16.1898 4.169L16.8102 6.0308C16.9144 6.344 17.27 6.6 17.6 6.6ZM9 12.6C9 10.9436 10.343 9.6 12 9.6C13.6566 9.6 15 10.9436 15 12.6C15 14.257 13.6566 15.6 12 15.6C10.343 15.6 9 14.257 9 12.6ZM12 17.6C9.2386 17.6 7 15.3614 7 12.6C7 9.8388 9.2386 7.6 12 7.6C14.761 7.6 17 9.8388 17 12.6C17 15.3614 14.761 17.6 12 17.6ZM18.6 9.2986C18.6 9.6854 18.9136 9.9986 19.3 9.9986C19.6866 9.9986 20 9.6854 20 9.2986C20 8.9122 19.6868 8.5986 19.3 8.5986C18.9136 8.5986 18.6 8.9122 18.6 9.2986Z",
      fill: "#545454"
    })
  });
};
const CircleCheckIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.content.accentPrimary,
  arrowColor = theme.colors.content.primary
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("circle", {
      cx: "12",
      cy: "12",
      r: "12",
      fill
    }), /* @__PURE__ */ jsx("rect", {
      x: "7.80042",
      y: "12.6001",
      width: "1.63589",
      height: "4.8",
      transform: "rotate(-45 7.80042 12.6001)",
      fill: arrowColor
    }), /* @__PURE__ */ jsx("rect", {
      x: "10.0157",
      y: "14.8134",
      width: "8.4",
      height: "1.66964",
      transform: "rotate(-45 10.0157 14.8134)",
      fill: arrowColor
    })]
  });
};
const CloseIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M21.5563 2.45883C21.2729 2.17479 20.8882 2.01517 20.4869 2.01517C20.0857 2.01517 19.7009 2.17479 19.4175 2.45883L12 9.86119L4.58248 2.44366C4.29908 2.15963 3.91432 2 3.51308 2C3.11184 2 2.72709 2.15963 2.44369 2.44366C1.8521 3.03525 1.8521 3.99088 2.44369 4.58246L9.86121 12L2.44369 19.4175C1.8521 20.0091 1.8521 20.9647 2.44369 21.5563C3.03527 22.1479 3.9909 22.1479 4.58248 21.5563L12 14.1388L19.4175 21.5563C20.0091 22.1479 20.9647 22.1479 21.5563 21.5563C22.1479 20.9647 22.1479 20.0091 21.5563 19.4175L14.1388 12L21.5563 4.58246C22.1327 4.00605 22.1327 3.03525 21.5563 2.45883Z",
      fill: "#545454"
    })
  });
};
const CodeIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.2 12L15.3 15.9C15.1129 16.0849 15.0075 16.337 15.0075 16.6C15.0075 16.8631 15.1129 17.1151 15.3 17.3C15.69 17.69 16.31 17.69 16.7 17.3L21.29 12.7C21.68 12.31 21.68 11.68 21.29 11.29L16.7 6.7C16.31 6.31 15.69 6.31 15.3 6.7C15.1129 6.88485 15.0075 7.13695 15.0075 7.4C15.0075 7.66305 15.1129 7.91515 15.3 8.1L19.2 12ZM4.8 12L8.7 15.9C9.09 16.29 9.09 16.91 8.7 17.3C8.31 17.69 7.69 17.69 7.3 17.3L2.71 12.7C2.32 12.31 2.32 11.68 2.71 11.29L7.3 6.7C7.48486 6.51285 7.73695 6.40752 8 6.40752C8.26305 6.40752 8.51515 6.51285 8.7 6.7C9.09 7.09 9.09 7.71 8.7 8.1L4.8 12Z",
      fill: "#545454"
    })
  });
};
const CollapseLessonIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M21.7143 12L2.00238 12",
      stroke: "#545454",
      strokeWidth: "2",
      strokeLinecap: "square"
    })
  });
};
const CollapseListIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.5 2C3.11929 2 2 3.11929 2 4.5V19.5C2 20.8807 3.11929 22 4.5 22H19.5C20.8807 22 22 20.8807 22 19.5V4.5C22 3.11929 20.8807 2 19.5 2H4.5ZM5.75 4.5C5.05964 4.5 4.5 5.05964 4.5 5.75V18.25C4.5 18.9404 5.05964 19.5 5.75 19.5H8.25C8.94036 19.5 9.5 18.9404 9.5 18.25V5.75C9.5 5.05964 8.94036 4.5 8.25 4.5H5.75Z",
      fill: "#545454"
    })
  });
};
const CompleteCheckIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("mask", {
      id: "mask0_9_260",
      style: {
        maskType: "alpha"
      },
      maskUnits: "userSpaceOnUse",
      x: "1",
      y: "3",
      width: "22",
      height: "20",
      children: /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.7578 3.1311L22.5 5.5824L10.197 22.6311L1.5 16.0929L4.3112 12.6961L9.20242 16.372L18.7578 3.1311Z",
        fill: "white"
      })
    }), /* @__PURE__ */ jsx("g", {
      mask: "url(#mask0_9_260)",
      children: /* @__PURE__ */ jsx("rect", {
        x: "1.5",
        y: "1.6311",
        width: "21",
        height: "21",
        fill: "black"
      })
    })]
  });
};
const DiamondIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M1.02 5.598 5.796 1.29a.01.01 0 0 1 .007-.003h8.392a.01.01 0 0 1 .007.003l4.778 4.307a.01.01 0 0 1-.007.017H1.026a.01.01 0 0 1-.007-.017ZM9.992 15.992 1.014 5.632a.01.01 0 0 1 .008-.016h17.956a.01.01 0 0 1 .008.017l-8.979 10.36a.01.01 0 0 1-.015 0Z",
      fill: "#545454",
      stroke: "#F6F6F6",
      strokeWidth: 0.6
    }), /* @__PURE__ */ jsx("path", {
      d: "M8.987 1 5.812 5.6a.01.01 0 0 0 .008.015h8.363a.01.01 0 0 0 .008-.015L11.304 1",
      stroke: "#F6F6F6",
      strokeWidth: 0.6
    }), /* @__PURE__ */ jsx("path", {
      d: "m5.806 5.63 4.186 10.347a.01.01 0 0 0 .018 0L14.195 5.63a.01.01 0 0 0-.01-.014h-8.37a.01.01 0 0 0-.009.014Z",
      fill: "#545454",
      stroke: "#F6F6F6",
      strokeWidth: 0.6
    })]
  });
};
const DiscussionIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM16.9999 14H6.99991C6.44991 14 5.99991 13.55 5.99991 13C5.99991 12.45 6.44991 12 6.99991 12H16.9999C17.5499 12 17.9999 12.45 17.9999 13C17.9999 13.55 17.5499 14 16.9999 14ZM6.99991 11H16.9999C17.5499 11 17.9999 10.55 17.9999 10C17.9999 9.45001 17.5499 9.00001 16.9999 9.00001H6.99991C6.44991 9.00001 5.99991 9.45001 5.99991 10C5.99991 10.55 6.44991 11 6.99991 11ZM16.9999 8.00002H6.99991C6.44991 8.00002 5.99991 7.55002 5.99991 7.00002C5.99991 6.45002 6.44991 6.00002 6.99991 6.00002H16.9999C17.5499 6.00002 17.9999 6.45002 17.9999 7.00002C17.9999 7.55002 17.5499 8.00002 16.9999 8.00002Z",
      fill: "#545454"
    })
  });
};
const DownloadIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M20.2 9.23529H15.5143V2H8.48573V9.23529H3.80002L12 17.6765L20.2 9.23529ZM3.80002 20.0882V22.5H20.2V20.0882H3.80002Z",
      fill: "#545454"
    })
  });
};
const EmojiPickerIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 12.5294C3 7.85366 6.78635 4.05884 11.4621 4.05884C16.1464 4.05884 19.9412 7.85366 19.9412 12.5294C19.9412 17.2052 16.1464 21 11.4621 21C6.78635 21 3 17.2052 3 12.5294ZM8.50588 9.14124C7.80415 9.14124 7.23529 9.7101 7.23529 10.4118C7.23529 11.1136 7.80415 11.6824 8.50588 11.6824C9.2076 11.6824 9.77646 11.1136 9.77646 10.4118C9.77646 9.7101 9.2076 9.14124 8.50588 9.14124ZM14.4351 9.14124C13.7334 9.14124 13.1645 9.7101 13.1645 10.4118C13.1645 11.1136 13.7334 11.6824 14.4351 11.6824C15.1368 11.6824 15.7057 11.1136 15.7057 10.4118C15.7057 9.7101 15.1368 9.14124 14.4351 9.14124ZM11.4704 19.3059C7.72639 19.3059 4.69392 16.2735 4.69392 12.5295C4.69392 8.78547 7.72639 5.753 11.4704 5.753C15.2144 5.753 18.2469 8.78547 18.2469 12.5295C18.2469 16.2735 15.2144 19.3059 11.4704 19.3059ZM14.3338 14.3336C14.5116 14.0372 14.9098 13.944 15.2062 14.1303C15.5027 14.3167 15.5959 14.7063 15.4095 15.0028C14.5455 16.3666 13.0801 17.1882 11.4707 17.1882C9.8613 17.1882 8.39588 16.375 7.53188 14.9943C7.34553 14.6979 7.43871 14.3082 7.73518 14.1219C8.03165 13.9355 8.4213 14.0287 8.60765 14.3252C9.23447 15.3247 10.3018 15.9176 11.4707 15.9176C12.6396 15.9176 13.7069 15.3247 14.3338 14.3336Z",
      fill: "#545454"
    }), /* @__PURE__ */ jsxs("mask", {
      id: "path-2-outside-1_788_160",
      maskUnits: "userSpaceOnUse",
      x: "13.6471",
      y: "2",
      width: "9",
      height: "9",
      fill: "black",
      children: [/* @__PURE__ */ jsx("rect", {
        fill: "white",
        x: "13.6471",
        y: "2",
        width: "9",
        height: "9"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.0294 8.55882C17.0294 8.9974 17.385 9.35294 17.8235 9.35294C18.2621 9.35294 18.6177 8.9974 18.6177 8.55882V6.9706H20.2059C20.6445 6.9706 21 6.61506 21 6.17648C21 5.73791 20.6445 5.38237 20.2059 5.38237H18.6177V3.79412C18.6177 3.35554 18.2621 3 17.8235 3C17.385 3 17.0294 3.35554 17.0294 3.79412V5.38237H15.4412C15.0026 5.38237 14.6471 5.73791 14.6471 6.17648C14.6471 6.61506 15.0026 6.9706 15.4412 6.9706H17.0294V8.55882Z"
      })]
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.0294 8.55882C17.0294 8.9974 17.385 9.35294 17.8235 9.35294C18.2621 9.35294 18.6177 8.9974 18.6177 8.55882V6.9706H20.2059C20.6445 6.9706 21 6.61506 21 6.17648C21 5.73791 20.6445 5.38237 20.2059 5.38237H18.6177V3.79412C18.6177 3.35554 18.2621 3 17.8235 3C17.385 3 17.0294 3.35554 17.0294 3.79412V5.38237H15.4412C15.0026 5.38237 14.6471 5.73791 14.6471 6.17648C14.6471 6.61506 15.0026 6.9706 15.4412 6.9706H17.0294V8.55882Z",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("path", {
      d: "M18.6177 6.9706V5.9706H17.6177V6.9706H18.6177ZM18.6177 5.38237H17.6177V6.38237H18.6177V5.38237ZM17.0294 5.38237V6.38237H18.0294V5.38237H17.0294ZM17.0294 6.9706H18.0294V5.9706H17.0294V6.9706ZM17.8235 8.35294C17.9372 8.35294 18.0294 8.44512 18.0294 8.55882H16.0294C16.0294 9.54969 16.8327 10.3529 17.8235 10.3529V8.35294ZM17.6177 8.55882C17.6177 8.44512 17.7098 8.35294 17.8235 8.35294V10.3529C18.8144 10.3529 19.6177 9.54969 19.6177 8.55882H17.6177ZM17.6177 6.9706V8.55882H19.6177V6.9706H17.6177ZM20.2059 5.9706H18.6177V7.9706H20.2059V5.9706ZM20 6.17648C20 6.06278 20.0922 5.9706 20.2059 5.9706V7.9706C21.1968 7.9706 22 7.16735 22 6.17648H20ZM20.2059 6.38237C20.0922 6.38237 20 6.29019 20 6.17648H22C22 5.18562 21.1968 4.38237 20.2059 4.38237V6.38237ZM18.6177 6.38237H20.2059V4.38237H18.6177V6.38237ZM17.6177 3.79412V5.38237H19.6177V3.79412H17.6177ZM17.8235 4C17.7098 4 17.6177 3.90782 17.6177 3.79412H19.6177C19.6177 2.80325 18.8144 2 17.8235 2V4ZM18.0294 3.79412C18.0294 3.90782 17.9372 4 17.8235 4V2C16.8327 2 16.0294 2.80326 16.0294 3.79412H18.0294ZM18.0294 5.38237V3.79412H16.0294V5.38237H18.0294ZM15.4412 6.38237H17.0294V4.38237H15.4412V6.38237ZM15.6471 6.17648C15.6471 6.29019 15.5549 6.38237 15.4412 6.38237V4.38237C14.4503 4.38237 13.6471 5.18562 13.6471 6.17648H15.6471ZM15.4412 5.9706C15.5549 5.9706 15.6471 6.06278 15.6471 6.17648H13.6471C13.6471 7.16735 14.4503 7.9706 15.4412 7.9706V5.9706ZM17.0294 5.9706H15.4412V7.9706H17.0294V5.9706ZM18.0294 8.55882V6.9706H16.0294V8.55882H18.0294Z",
      fill: "#F6F6F6",
      mask: "url(#path-2-outside-1_788_160)"
    })]
  });
};
const ExpandCardIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.0292 10.9437L17.0292 6.90871L12.986 6.90051C12.3463 6.90051 11.8296 6.38383 11.8296 5.74413C11.8296 5.10443 12.3463 4.58776 12.986 4.58776L18.1938 4.57956C18.5006 4.57921 18.7949 4.70093 19.0119 4.91787C19.2288 5.13481 19.3505 5.42913 19.3502 5.73593L19.342 10.9437C19.342 11.5834 18.8253 12.1001 18.1856 12.1001C17.5459 12.1001 17.0292 11.5834 17.0292 10.9437ZM6.90887 12.9941L6.90887 17.0291L10.9439 17.0455C11.2507 17.0452 11.545 17.1669 11.7619 17.3838C11.9789 17.6008 12.1006 17.8951 12.1003 18.2019C12.1003 18.8416 11.5836 19.3583 10.9439 19.3583H5.7443C5.1046 19.3583 4.58792 18.8416 4.58792 18.2019L4.59612 12.9941C4.59612 12.3544 5.1128 11.8377 5.7525 11.8377C6.05929 11.8374 6.35362 11.9591 6.57056 12.176C6.7875 12.393 6.90922 12.6873 6.90887 12.9941Z",
      fill: "#545454"
    })
  });
};
const ExpandIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("rect", {
      width: "14.0765",
      height: "2.28826",
      transform: "matrix(0.708619 -0.705591 0.708619 0.705591 3.0004 11.4323)",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("rect", {
      width: "14.0765",
      height: "2.28826",
      transform: "matrix(-0.708619 -0.705591 0.708619 -0.705591 12.9785 21.3686)",
      fill: "#545454"
    })]
  });
};
const ExpandLessonIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M21.7143 12L2.00238 12",
      stroke: "#545454",
      strokeWidth: "2",
      strokeLinecap: "square"
    }), /* @__PURE__ */ jsx("path", {
      d: "M11.9999 21.7143L11.9999 2.00238",
      stroke: "#545454",
      strokeWidth: "2",
      strokeLinecap: "square"
    })]
  });
};
const ExpandListIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.5 2C3.11929 2 2 3.11929 2 4.5V19.5C2 20.8807 3.11929 22 4.5 22H19.5C20.8807 22 22 20.8807 22 19.5V4.5C22 3.11929 20.8807 2 19.5 2H4.5ZM5.75 4.5C5.05964 4.5 4.5 5.05964 4.5 5.75V18.25C4.5 18.9404 5.05964 19.5 5.75 19.5H14.5C15.1904 19.5 15.75 18.9404 15.75 18.25V5.75C15.75 5.05964 15.1904 4.5 14.5 4.5H5.75Z",
      fill: "#545454"
    })
  });
};
const EyeClosedIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M17.9511 18.123C18.3504 17.8187 18.4274 17.2482 18.123 16.8489C17.8186 16.4496 17.2482 16.3727 16.8489 16.677L17.9511 18.123ZM12 19.2728V20.1819C12.005 20.1819 12.0099 20.1818 12.0149 20.1817L12 19.2728ZM2 12L1.19895 11.5702C1.05928 11.8305 1.05478 12.1424 1.18688 12.4066L2 12ZM7.15173 7.32257C7.55077 7.01786 7.62724 6.44736 7.32253 6.04832C7.01781 5.64928 6.44731 5.57281 6.04827 5.87752L7.15173 7.32257ZM9.88372 4.06033C9.39485 4.17476 9.09131 4.66383 9.20574 5.15269C9.32017 5.64155 9.80924 5.94509 10.2981 5.83066L9.88372 4.06033ZM12 4.72731L11.9979 5.63641H12V4.72731ZM22 12L22.8017 12.4286C22.9407 12.1685 22.945 11.8572 22.8131 11.5935L22 12ZM19.3408 14.3147C19.0175 14.6989 19.0669 15.2724 19.451 15.5956C19.8352 15.9189 20.4087 15.8695 20.732 15.4854L19.3408 14.3147ZM14.5924 14.5471C14.9347 14.1797 14.9143 13.6045 14.547 13.2622C14.1797 12.9199 13.6045 12.9402 13.2622 13.3076L14.5924 14.5471ZM10.6925 10.7379C11.0598 10.3956 11.0801 9.82035 10.7378 9.45302C10.3956 9.0857 9.82031 9.06539 9.45298 9.40767L10.6925 10.7379ZM16.8489 16.677C15.4492 17.744 13.7449 18.335 11.9851 18.3638L12.0149 20.1817C14.1626 20.1466 16.2428 19.4252 17.9511 18.123L16.8489 16.677ZM12 18.3637C9.18137 18.3637 6.90502 16.7514 5.27685 15.0146C4.47106 14.1551 3.8504 13.2921 3.43129 12.6432C3.2223 12.3196 3.06491 12.0515 2.96102 11.8669C2.90911 11.7746 2.87067 11.7033 2.84592 11.6565C2.83354 11.6331 2.8246 11.6159 2.81913 11.6052C2.81639 11.5999 2.81451 11.5962 2.81351 11.5943C2.81301 11.5933 2.81273 11.5927 2.81266 11.5926C2.81263 11.5925 2.81265 11.5926 2.81272 11.5927C2.81276 11.5928 2.81286 11.593 2.81288 11.593C2.81299 11.5932 2.81312 11.5935 2 12C1.18688 12.4066 1.18704 12.4069 1.1872 12.4072C1.18728 12.4074 1.18746 12.4078 1.18761 12.408C1.18791 12.4086 1.18826 12.4093 1.18867 12.4102C1.18949 12.4118 1.19054 12.4139 1.19181 12.4164C1.19435 12.4214 1.19779 12.4281 1.20213 12.4366C1.2108 12.4534 1.22305 12.477 1.23887 12.5069C1.27049 12.5667 1.31638 12.6517 1.37634 12.7582C1.49617 12.9713 1.67259 13.2714 1.90394 13.6296C2.36551 14.3443 3.05167 15.2995 3.95042 16.2582C5.73135 18.1578 8.45499 20.1819 12 20.1819V18.3637ZM2.80105 12.4299C3.87057 10.4367 5.35397 8.69536 7.15173 7.32257L6.04827 5.87752C4.04446 7.40765 2.39105 9.34861 1.19895 11.5702L2.80105 12.4299ZM10.2981 5.83066C10.8552 5.70025 11.4257 5.63506 11.9979 5.6364L12.0021 3.81823C11.289 3.81655 10.5781 3.8978 9.88372 4.06033L10.2981 5.83066ZM12 5.63641C14.8186 5.63641 17.095 7.24873 18.7231 8.98544C19.5289 9.84495 20.1496 10.7079 20.5687 11.3569C20.7777 11.6805 20.9351 11.9485 21.039 12.1332C21.0909 12.2255 21.1293 12.2968 21.1541 12.3436C21.1665 12.3669 21.1754 12.3842 21.1809 12.3948C21.1836 12.4002 21.1855 12.4038 21.1865 12.4058C21.187 12.4068 21.1873 12.4074 21.1873 12.4075C21.1874 12.4076 21.1874 12.4075 21.1873 12.4074C21.1872 12.4073 21.1871 12.4071 21.1871 12.4071C21.187 12.4068 21.1869 12.4066 22 12C22.8131 11.5935 22.813 11.5932 22.8128 11.5928C22.8127 11.5927 22.8125 11.5923 22.8124 11.592C22.8121 11.5914 22.8117 11.5907 22.8113 11.5899C22.8105 11.5883 22.8095 11.5862 22.8082 11.5837C22.8056 11.5787 22.8022 11.572 22.7979 11.5635C22.7892 11.5467 22.7769 11.5231 22.7611 11.4932C22.7295 11.4334 22.6836 11.3484 22.6237 11.2418C22.5038 11.0288 22.3274 10.7287 22.0961 10.3705C21.6345 9.65578 20.9483 8.70058 20.0496 7.74191C18.2687 5.84226 15.545 3.81822 12 3.81822V5.63641ZM21.1983 11.5715C20.6763 12.5481 20.0537 13.4675 19.3408 14.3147L20.732 15.4854C21.5264 14.5412 22.2201 13.5168 22.8017 12.4286L21.1983 11.5715ZM13.2622 13.3076C12.8089 13.794 12.1263 13.9942 11.4821 13.8297L11.0322 15.5914C12.3206 15.9204 13.6859 15.5199 14.5924 14.5471L13.2622 13.3076ZM11.4821 13.8297C10.8379 13.6652 10.3348 13.1622 10.1703 12.518L8.40869 12.9679C8.73772 14.2563 9.74378 15.2623 11.0322 15.5914L11.4821 13.8297ZM10.1703 12.518C10.0058 11.8738 10.206 11.1911 10.6925 10.7379L9.45298 9.40767C8.48012 10.3142 8.07965 11.6795 8.40869 12.9679L10.1703 12.518Z",
      fill: "#757575"
    }), /* @__PURE__ */ jsx("path", {
      d: "M2 2L22 22",
      stroke: "#757575",
      strokeWidth: "1.81818",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
};
const EyeOpenIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 12C2 12 5.63636 4.72729 12 4.72729C18.3636 4.72729 22 12 22 12C22 12 18.3636 19.2727 12 19.2727C5.63636 19.2727 2 12 2 12Z",
      stroke: "#757575",
      strokeWidth: "1.81818",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
      stroke: "#757575",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
};
const FlagIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.78 4.05L13.5 5.5H18.5C19.05 5.5 19.5 5.95 19.5 6.5V14.5C19.5 15.05 19.05 15.5 18.5 15.5H13.11C12.74 15.5 12.39 15.29 12.22 14.95L11.5 13.5H6.5V19.5C6.5 20.05 6.05 20.5 5.5 20.5C4.95 20.5 4.5 20.05 4.5 19.5V4.5C4.5 3.95 4.95 3.5 5.5 3.5H11.88C12.26 3.5 12.61 3.71 12.78 4.05ZM13.5 13.5H17.5V7.5H12.5L11.5 5.5H6.5V11.5H12.5L13.5 13.5Z",
      fill: "#545454"
    })
  });
};
const FlipCameraIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.7212 4.375C7.95138 4.375 4.8877 7.56938 4.8877 11.5H6.92636C7.43887 11.5 7.68943 12.1413 7.33637 12.5094L4.15879 15.8225C3.93101 16.06 3.57794 16.06 3.35016 15.8225L0.172585 12.5094C-0.191868 12.1413 0.0586934 11.5 0.571206 11.5H2.60987C2.60987 6.25125 6.68719 2 11.7212 2C12.9057 2 14.0446 2.2375 15.081 2.67687C15.8441 2.9975 16.0491 4.01875 15.4682 4.62438C15.1607 4.945 14.6938 5.07563 14.2838 4.8975C13.4979 4.55313 12.6209 4.375 11.7212 4.375ZM16.1172 10.4788L19.2948 7.16564C19.5112 6.94002 19.8757 6.94002 20.092 7.17752L23.2696 10.4906C23.6341 10.8588 23.3835 11.5 22.871 11.5H20.8323C20.8323 16.7488 16.755 21 11.721 21C10.5365 21 9.39762 20.7625 8.36121 20.3231C7.59813 20.0025 7.39313 18.9813 7.97398 18.3756C8.28148 18.055 8.74844 17.9244 9.15845 18.1025C9.9443 18.4469 10.8213 18.625 11.721 18.625C15.4908 18.625 18.5545 15.4306 18.5545 11.5H16.5158C16.0033 11.5 15.7528 10.8588 16.1172 10.4788Z",
      fill: "#545454"
    })
  });
};
const FullscreenExitIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 8H8V6C8 5.45 8.45 5 9 5C9.55 5 10 5.45 10 6V9C10 9.55 9.55 10 9 10H6C5.45 10 5 9.55 5 9C5 8.45 5.45 8 6 8ZM8 16H6C5.45 16 5 15.55 5 15C5 14.45 5.45 14 6 14H9C9.55 14 10 14.45 10 15V18C10 18.55 9.55 19 9 19C8.45 19 8 18.55 8 18V16ZM15 19C15.55 19 16 18.55 16 18V16H18C18.55 16 19 15.55 19 15C19 14.45 18.55 14 18 14H15C14.45 14 14 14.45 14 15V18C14 18.55 14.45 19 15 19ZM16 6V8H18C18.55 8 19 8.45 19 9C19 9.55 18.55 10 18 10H15C14.45 10 14 9.55 14 9V6C14 5.45 14.45 5 15 5C15.55 5 16 5.45 16 6Z",
      fill: "#545454"
    })
  });
};
const FullscreenIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 9C7 9.55 6.55 10 6 10C5.45 10 5 9.55 5 9V6C5 5.45 5.45 5 6 5H9C9.55 5 10 5.45 10 6C10 6.55 9.55 7 9 7H7V9ZM5 15C5 14.45 5.45 14 6 14C6.55 14 7 14.45 7 15V17H9C9.55 17 10 17.45 10 18C10 18.55 9.55 19 9 19H6C5.45 19 5 18.55 5 18V15ZM17 17H15C14.45 17 14 17.45 14 18C14 18.55 14.45 19 15 19H18C18.55 19 19 18.55 19 18V15C19 14.45 18.55 14 18 14C17.45 14 17 14.45 17 15V17ZM15 7C14.45 7 14 6.55 14 6C14 5.45 14.45 5 15 5H18C18.55 5 19 5.45 19 6V9C19 9.55 18.55 10 18 10C17.45 10 17 9.55 17 9V7H15Z",
      fill: "#545454"
    })
  });
};
const HeartEmptyIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.0002 5.2672C13.7602 3.2072 17.0202 2.3672 19.6602 4.1672C21.0602 5.1272 21.9402 6.7472 22.0002 8.4472C22.1302 12.3272 18.7002 15.4372 13.4502 20.1972L13.3402 20.2972C12.5802 20.9972 11.4102 20.9972 10.6502 20.3072L10.5502 20.2172L10.4898 20.1623C5.27384 15.4233 1.86075 12.3223 2.00021 8.4572C2.06021 6.7472 2.94021 5.1272 4.34021 4.1672C6.98021 2.3572 10.2402 3.2072 12.0002 5.2672ZM12.0002 18.8272L12.1002 18.7272C16.8602 14.4172 20.0002 11.5672 20.0002 8.6772C20.0002 6.6772 18.5002 5.1772 16.5002 5.1772C14.9602 5.1772 13.4602 6.1672 12.9402 7.5372H11.0702C10.5402 6.1672 9.04021 5.1772 7.50021 5.1772C5.50021 5.1772 4.00021 6.6772 4.00021 8.6772C4.00021 11.5672 7.14021 14.4172 11.9002 18.7272L12.0002 18.8272Z",
      fill: "#545454"
    })
  });
};
const HeartFilledIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M21.4691 8.41415L21.4708 8.43161L21.4736 8.44891C21.4865 8.52696 21.5809 9.18151 21.3108 10.2881L21.3108 10.2882C20.9221 11.8826 20.0229 13.3408 18.6992 14.5026C18.6988 14.503 18.6983 14.5035 18.6978 14.5039L11.943 20.337L5.30239 14.5037L5.3021 14.5035C3.97771 13.3419 3.07793 11.8829 2.68916 10.2882L2.68913 10.2881C2.41895 9.18082 2.51357 8.52663 2.52646 8.44988L2.52949 8.43188L2.53119 8.41371C2.80233 5.52113 4.89525 3.5 7.44564 3.5C9.1308 3.5 10.6362 4.37118 11.5167 5.82969L11.9401 6.53093L12.3703 5.83385C13.257 4.3969 14.8331 3.50037 16.5543 3.50037C19.105 3.50037 21.1976 5.52149 21.4691 8.41415Z",
      fill: "#545454",
      stroke: "#545454"
    })
  });
};
const ImageIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 19.7778V4.22222C22 3 21 2 19.7778 2H4.22222C3 2 2 3 2 4.22222V19.7778C2 21 3 22 4.22222 22H19.7778C21 22 22 21 22 19.7778ZM8.55548 14.2L10.8888 17.0111L14.3333 12.5778C14.5555 12.2889 14.9999 12.2889 15.2221 12.5889L19.1221 17.7889C19.3999 18.1555 19.1333 18.6778 18.6777 18.6778H5.35548C4.88881 18.6778 4.63326 18.1444 4.92215 17.7778L7.68881 14.2222C7.89992 13.9333 8.32215 13.9222 8.55548 14.2ZM17 8.66667C17.9205 8.66667 18.6667 7.92048 18.6667 7C18.6667 6.07953 17.9205 5.33334 17 5.33334C16.0795 5.33334 15.3333 6.07953 15.3333 7C15.3333 7.92048 16.0795 8.66667 17 8.66667Z",
      fill: "#545454"
    })
  });
};
const ImagesIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 16V4C22 2.9 21.1 2 20 2H8.00004C6.90004 2 6.00004 2.9 6.00004 4V16C6.00004 17.1 6.90004 18 8.00004 18H20C21.1 18 22 17.1 22 16ZM11.3998 12.53L13.0298 14.71L15.6098 11.49C15.8098 11.24 16.1898 11.24 16.3898 11.49L19.3498 15.19C19.6098 15.52 19.3798 16 18.9598 16H8.99978C8.58978 16 8.34978 15.53 8.59978 15.2L10.5998 12.53C10.7998 12.27 11.1998 12.27 11.3998 12.53ZM2 20V6.99999C2 6.44999 2.45 5.99999 3 5.99999C3.55 5.99999 4 6.44999 4 6.99999V19C4 19.55 4.45 20 5 20H17C17.55 20 18 20.45 18 21C18 21.55 17.55 22 17 22H4C2.9 22 2 21.1 2 20Z",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "17.5",
      cy: "6.5",
      r: "1.5",
      fill: "white"
    })]
  });
};
const ItalicsIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M10 6.5C10 7.33 10.67 8 11.5 8H12.21L8.79 16H7.5C6.67 16 6 16.67 6 17.5C6 18.33 6.67 19 7.5 19H12.5C13.33 19 14 18.33 14 17.5C14 16.67 13.33 16 12.5 16H11.79L15.21 8H16.5C17.33 8 18 7.33 18 6.5C18 5.67 17.33 5 16.5 5H11.5C10.67 5 10 5.67 10 6.5Z",
      fill: "#545454"
    })
  });
};
const LinkIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 15H10C10.55 15 11 15.45 11 16C11 16.55 10.55 17 10 17H7C4.24 17 2 14.76 2 12C2 9.24 4.24 7 7 7H10C10.55 7 11 7.45 11 8C11 8.55 10.55 9 10 9H7C5.35 9 4 10.35 4 12C4 13.65 5.35 15 7 15ZM17 7H14C13.45 7 13 7.45 13 8C13 8.55 13.45 9 14 9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H14C13.45 15 13 15.45 13 16C13 16.55 13.45 17 14 17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM7.99996 12C7.99996 12.55 8.44996 13 8.99996 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H8.99996C8.44996 11 7.99996 11.45 7.99996 12Z",
      fill: "#545454"
    })
  });
};
const LockIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT,
  className,
  fill = "#545454"
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    className,
    fill,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.25 8.484C8.25 6.2865 9.9315 4.5 12 4.5C14.0685 4.5 15.75 6.2865 15.75 8.484V10.4985H8.25V8.484ZM18.75 10.4985V8.484C18.75 4.6335 15.7215 1.5 12 1.5C8.2785 1.5 5.25 4.6335 5.25 8.484V10.4985H3.5C3.22386 10.4985 3 10.7224 3 10.9985V21.9985C3 22.2746 3.22386 22.4985 3.5 22.4985H20.5C20.7761 22.4985 21 22.2746 21 21.9985V10.9985C21 10.7224 20.7761 10.4985 20.5 10.4985H18.75Z",
      fill: "#A0A0A0"
    }), /* @__PURE__ */ jsx("mask", {
      id: "mask0_9_262",
      style: {
        maskType: "alpha"
      },
      maskUnits: "userSpaceOnUse",
      x: "3",
      y: "1",
      width: "18",
      height: "22",
      children: /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.25 8.484C8.25 6.2865 9.9315 4.5 12 4.5C14.0685 4.5 15.75 6.2865 15.75 8.484V10.4985H8.25V8.484ZM18.75 10.4985V8.484C18.75 4.6335 15.7215 1.5 12 1.5C8.2785 1.5 5.25 4.6335 5.25 8.484V10.4985H3.5C3.22386 10.4985 3 10.7224 3 10.9985V21.9985C3 22.2746 3.22386 22.4985 3.5 22.4985H20.5C20.7761 22.4985 21 22.2746 21 21.9985V10.9985C21 10.7224 20.7761 10.4985 20.5 10.4985H18.75Z",
        fill: "white"
      })
    }), /* @__PURE__ */ jsx("g", {
      mask: "url(#mask0_9_262)",
      children: /* @__PURE__ */ jsx("rect", {
        x: "1.5",
        y: "1.5",
        width: "21",
        height: "21"
      })
    })]
  });
};
const MessagingIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M10.4 2.40002C5.54001 2.40002 1.60001 5.98162 1.60001 10.4C1.60001 12.6693 2.64651 14.7102 4.31719 16.1641C4.07756 16.9489 3.57769 17.7294 2.65938 18.425C2.65886 18.4255 2.65834 18.4261 2.65782 18.4266C2.58208 18.4554 2.51687 18.5065 2.47083 18.5732C2.42479 18.6399 2.40009 18.719 2.40001 18.8C2.40001 18.9061 2.44215 19.0079 2.51716 19.0829C2.59218 19.1579 2.69392 19.2 2.80001 19.2C2.82734 19.1997 2.85456 19.1965 2.88126 19.1907C4.43331 19.1861 5.75756 18.5232 6.81094 17.6922C7.31082 17.8955 7.83262 18.0632 8.37657 18.1797C8.13337 17.4917 8.00001 16.7592 8.00001 16C8.00001 12.0296 11.5888 8.80002 16 8.80002C17.1056 8.80002 18.1596 9.00314 19.1188 9.37034C18.562 5.43914 14.8752 2.40002 10.4 2.40002ZM16 10.4C14.3026 10.4 12.6748 10.99 11.4745 12.0402C10.2743 13.0904 9.60001 14.5148 9.60001 16C9.60001 17.4852 10.2743 18.9096 11.4745 19.9598C12.6748 21.01 14.3026 21.6 16 21.6C16.8183 21.5989 17.6288 21.4605 18.3875 21.1922C19.3686 21.8776 20.5559 22.3859 21.9156 22.3907C21.9433 22.3968 21.9716 22.3999 22 22.4C22.1061 22.4 22.2078 22.3579 22.2829 22.2829C22.3579 22.2079 22.4 22.1061 22.4 22C22.3999 21.9182 22.3746 21.8383 22.3277 21.7713C22.2808 21.7042 22.2144 21.6532 22.1375 21.625C21.4054 21.0692 20.9361 20.4573 20.6547 19.8344C21.7732 18.7973 22.3974 17.426 22.4 16C22.4 14.5148 21.7257 13.0904 20.5255 12.0402C19.3253 10.99 17.6974 10.4 16 10.4Z",
      fill: "#545454"
    })
  });
};
const MoreDropdownIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT,
  className
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    className,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M15.875 9.00001L11.995 12.88L8.11501 9.00001C7.92817 8.81275 7.67452 8.70752 7.41001 8.70752C7.14549 8.70752 6.89184 8.81275 6.70501 9.00001C6.31501 9.39001 6.31501 10.02 6.70501 10.41L11.295 15C11.685 15.39 12.315 15.39 12.705 15L17.295 10.41C17.685 10.02 17.685 9.39001 17.295 9.00001C16.905 8.62001 16.265 8.61001 15.875 9.00001Z",
      fill: "black",
      fillOpacity: "0.54"
    })
  });
};
const MoreIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("circle", {
      cx: "4.22222",
      cy: "12",
      r: "2.22222",
      transform: "rotate(-90 4.22222 12)",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "12",
      cy: "12",
      r: "2.22222",
      transform: "rotate(-90 12 12)",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("circle", {
      cx: "19.7778",
      cy: "12",
      r: "2.22222",
      transform: "rotate(-90 19.7778 12)",
      fill: "#545454"
    })]
  });
};
const OrderedListIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.125 5.875H4.5625V8.0625C4.5625 8.3075 4.755 8.5 5 8.5C5.245 8.5 5.4375 8.3075 5.4375 8.0625V5.4375C5.4375 5.1925 5.245 5 5 5H4.125C3.88 5 3.6875 5.1925 3.6875 5.4375C3.6875 5.6825 3.88 5.875 4.125 5.875ZM19.4375 7.625H8.9375C8.45625 7.625 8.0625 7.23125 8.0625 6.75C8.0625 6.26875 8.45625 5.875 8.9375 5.875H19.4375C19.9188 5.875 20.3125 6.26875 20.3125 6.75C20.3125 7.23125 19.9188 7.625 19.4375 7.625ZM8.9375 16.375H19.4375C19.9188 16.375 20.3125 16.7688 20.3125 17.25C20.3125 17.7312 19.9188 18.125 19.4375 18.125H8.9375C8.45625 18.125 8.0625 17.7312 8.0625 17.25C8.0625 16.7688 8.45625 16.375 8.9375 16.375ZM19.4375 11.125H8.9375C8.45625 11.125 8.0625 11.5188 8.0625 12C8.0625 12.4812 8.45625 12.875 8.9375 12.875H19.4375C19.9188 12.875 20.3125 12.4812 20.3125 12C20.3125 11.5188 19.9188 11.125 19.4375 11.125ZM5.875 15.5C6.12 15.5 6.3125 15.6925 6.3125 15.9375V18.5625C6.3125 18.8075 6.12 19 5.875 19H4.125C3.88 19 3.6875 18.8075 3.6875 18.5625C3.6875 18.3175 3.88 18.125 4.125 18.125H5.4375V17.6875H5C4.755 17.6875 4.5625 17.495 4.5625 17.25C4.5625 17.005 4.755 16.8125 5 16.8125H5.4375V16.375H4.125C3.88 16.375 3.6875 16.1825 3.6875 15.9375C3.6875 15.6925 3.88 15.5 4.125 15.5H5.875ZM4.125 10.25H5.875C6.12 10.25 6.3125 10.4425 6.3125 10.6875V10.88C6.3125 10.9763 6.2775 11.0813 6.2075 11.16L4.7375 12.875H5.875C6.12 12.875 6.3125 13.0675 6.3125 13.3125C6.3125 13.5575 6.12 13.75 5.875 13.75H4.125C3.88 13.75 3.6875 13.5575 3.6875 13.3125V13.12C3.6875 13.0238 3.7225 12.9187 3.7925 12.84L5.2625 11.125H4.125C3.88 11.125 3.6875 10.9325 3.6875 10.6875C3.6875 10.4425 3.88 10.25 4.125 10.25Z",
      fill: "#545454"
    })
  });
};
const PeersIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.0818 8.72734C11.0818 10.2365 9.87263 11.4547 8.3635 11.4547C6.85437 11.4547 5.63616 10.2365 5.63616 8.72734C5.63616 7.21821 6.85437 6 8.3635 6C9.87263 6 11.0818 7.21821 11.0818 8.72734ZM18.3546 8.72734C18.3546 10.2365 17.1455 11.4547 15.6364 11.4547C14.1273 11.4547 12.909 10.2365 12.909 8.72734C12.909 7.21821 14.1273 6 15.6364 6C17.1455 6 18.3546 7.21821 18.3546 8.72734ZM8.3638 13.2729C6.24557 13.2729 2 14.3365 2 16.4548V17.8184C2 18.3185 2.4091 18.7276 2.90911 18.7276H13.8185C14.3185 18.7276 14.7276 18.3185 14.7276 17.8184V16.4548C14.7276 14.3365 10.482 13.2729 8.3638 13.2729ZM14.7548 13.3183C15.073 13.291 15.373 13.2729 15.6366 13.2729C17.7549 13.2729 22.0004 14.3365 22.0004 16.4548V17.8184C22.0004 18.3185 21.5913 18.7276 21.0913 18.7276H16.3821C16.4821 18.4457 16.5458 18.1366 16.5458 17.8184V16.4548C16.5458 15.1184 15.8276 14.1093 14.7912 13.3547C14.7884 13.3519 14.7857 13.3483 14.7827 13.3444C14.7757 13.3354 14.7675 13.3247 14.7548 13.3183Z",
      fill: "#545454"
    })
  });
};
const PitchTrainerIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M12 22C13.375 22 14.5 20.875 14.5 19.5V4.5C14.5 3.125 13.375 2 12 2C10.625 2 9.5 3.125 9.5 4.5V19.5C9.5 20.875 10.625 22 12 22Z",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("path", {
      d: "M4.5 22C5.875 22 7 20.875 7 19.5V14.5C7 13.125 5.875 12 4.5 12C3.125 12 2 13.125 2 14.5V19.5C2 20.875 3.125 22 4.5 22Z",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("path", {
      d: "M17 10.75V19.5C17 20.875 18.125 22 19.5 22C20.875 22 22 20.875 22 19.5V10.75C22 9.375 20.875 8.25 19.5 8.25C18.125 8.25 17 9.375 17 10.75Z",
      fill: "#545454"
    })]
  });
};
const PlusIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1C12.5523 1 13 1.44772 13 2V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H11V2C11 1.44772 11.4477 1 12 1Z",
      fill: "#545454"
    })
  });
};
const PostsIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.05263 2.52631H20.9474C21.5263 2.52631 22 2.99999 22 3.57894V9.89473C22 10.4737 21.5263 10.9474 20.9474 10.9474H3.05263C2.47368 10.9474 2 10.4737 2 9.89473V3.57894C2 2.99999 2.47368 2.52631 3.05263 2.52631ZM3.05263 13.0527H20.9474C21.5263 13.0527 22 13.5263 22 14.1053V20.4211C22 21 21.5263 21.4737 20.9474 21.4737H3.05263C2.47368 21.4737 2 21 2 20.4211V14.1053C2 13.5263 2.47368 13.0527 3.05263 13.0527Z",
      fill: "#545454"
    })
  });
};
const QuestionIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("path", {
      d: "M8.28418 9.21802C8.30697 8.11857 8.64022 7.26123 9.28394 6.646C9.96183 6.03076 10.8021 5.72314 11.8047 5.72314C12.7845 5.72314 13.6077 6.01937 14.2742 6.61182C14.9521 7.20426 15.2882 8.02173 15.2825 9.06421C15.2825 10.1466 14.9521 11.0324 14.2913 11.7217C14.1602 11.8641 13.9609 12.0578 13.6931 12.3027C13.4254 12.5477 13.2174 12.7442 13.0693 12.8923C12.9269 13.0347 12.7902 13.2227 12.6592 13.4563C12.5339 13.6899 12.4712 13.9177 12.4712 14.1399V14.7466H10.9417V14.0886C10.9417 13.3196 11.2806 12.636 11.9585 12.0378C12.0155 11.9923 12.1322 11.8897 12.3088 11.7302C12.4854 11.5707 12.6108 11.4539 12.6848 11.3799C12.7589 11.3058 12.87 11.1947 13.0181 11.0466C13.1662 10.8928 13.2744 10.759 13.3428 10.645C13.4111 10.5254 13.488 10.3801 13.5735 10.2092C13.6646 10.0383 13.7273 9.86458 13.7615 9.68799C13.7957 9.5057 13.8127 9.31486 13.8127 9.11548C13.8127 8.43758 13.6305 7.91634 13.2659 7.55176C12.907 7.18148 12.4256 6.99634 11.8218 6.99634C11.1667 6.99634 10.654 7.19002 10.2837 7.57739C9.91911 7.95907 9.73682 8.50594 9.73682 9.21802H8.28418ZM10.6084 17.3613C10.6084 17.048 10.7138 16.7888 10.9246 16.5837C11.1353 16.3787 11.3974 16.2761 11.7107 16.2761C12.0297 16.2761 12.2946 16.3787 12.5054 16.5837C12.7161 16.7888 12.8215 17.048 12.8215 17.3613C12.8215 17.6632 12.7133 17.9196 12.4968 18.1304C12.2804 18.3411 12.0212 18.4465 11.7192 18.4465C11.4059 18.4465 11.141 18.3411 10.9246 18.1304C10.7138 17.9196 10.6084 17.6632 10.6084 17.3613Z",
      fill: "white"
    })]
  });
};
const RecordAudioIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M11.9991 14.6316C13.7465 14.6316 15.157 13.221 15.157 11.4737V5.15789C15.157 3.41053 13.7465 2 11.9991 2C10.2518 2 8.84123 3.41053 8.84123 5.15789V11.4737C8.84123 13.221 10.2518 14.6316 11.9991 14.6316Z",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("path", {
      d: "M18.2199 11.4737C17.7041 11.4737 17.2725 11.8526 17.1883 12.3684C16.7568 14.8421 14.5989 16.7368 11.9989 16.7368C9.39887 16.7368 7.24097 14.8421 6.8094 12.3684C6.72519 11.8526 6.29361 11.4737 5.77782 11.4737C5.13571 11.4737 4.63045 12.0421 4.72519 12.6737C5.24098 15.8316 7.76729 18.3053 10.9462 18.7579V20.9474C10.9462 21.5263 11.4199 22 11.9989 22C12.5778 22 13.0515 21.5263 13.0515 20.9474V18.7579C16.2304 18.3053 18.7568 15.8316 19.2725 12.6737C19.3778 12.0421 18.862 11.4737 18.2199 11.4737Z",
      fill: "#545454"
    })]
  });
};
const RecordVideoIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M17.5556 10.4375V6.79167C17.5556 6.21875 17.0556 5.75 16.4444 5.75H3.11111C2.5 5.75 2 6.21875 2 6.79167V17.2083C2 17.7812 2.5 18.25 3.11111 18.25H16.4444C17.0556 18.25 17.5556 17.7812 17.5556 17.2083V13.5625L20.1 15.9479C20.8 16.6042 22 16.1354 22 15.2083V8.78125C22 7.85417 20.8 7.38542 20.1 8.04167L17.5556 10.4375Z",
      fill: "#545454"
    })
  });
};
const ReplyIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.55014 12.5972L11.8677 22.5V16.7631C15.4288 16.3834 18.3729 17.3962 20.7904 19.8137L22.6272 21.6505V19.0529C22.6272 12.3115 18.9137 8.64994 11.8677 8.31813V2.69435L0.55014 12.5972ZM3.81766 12.5972L9.7154 7.43665V10.4453H10.7914C16.387 10.4453 19.4533 12.4369 20.2584 16.596C17.5221 14.7647 14.2884 14.1514 10.6145 14.7637L9.7154 14.9136V17.7577L3.81766 12.5972Z",
      fill: "#545454"
    })
  });
};
const SaveIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19 21.8L12 16.3556L5 21.8V4.37777C5 3.17502 5.89543 2.2 7 2.2H17C18.1046 2.2 19 3.17502 19 4.37777V21.8Z",
      fill: "#545454"
    })
  });
};
const ShareIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M17.1667 16.1021C16.4489 16.1021 15.8067 16.4008 15.3156 16.8687L8.58167 12.7368C8.62889 12.5078 8.66667 12.2788 8.66667 12.0398C8.66667 11.8009 8.62889 11.5719 8.58167 11.3429L15.24 7.25076C15.75 7.74859 16.4206 8.05724 17.1667 8.05724C18.7344 8.05724 20 6.72307 20 5.07029C20 3.41751 18.7344 2.08334 17.1667 2.08334C15.5989 2.08334 14.3333 3.41751 14.3333 5.07029C14.3333 5.30925 14.3711 5.53825 14.4183 5.76725L7.76 9.85936C7.25 9.36154 6.57944 9.05289 5.83333 9.05289C4.26556 9.05289 3 10.3871 3 12.0398C3 13.6926 4.26556 15.0268 5.83333 15.0268C6.57944 15.0268 7.25 14.7181 7.76 14.2203L14.4844 18.3622C14.4372 18.5713 14.4089 18.7903 14.4089 19.0094C14.4089 20.6124 15.6461 21.9167 17.1667 21.9167C18.6872 21.9167 19.9244 20.6124 19.9244 19.0094C19.9244 17.4064 18.6872 16.1021 17.1667 16.1021Z",
      fill: "#545454"
    })
  });
};
const SidebarIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("rect", {
      x: "1.5",
      y: "4.5",
      width: "21",
      height: "3",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("rect", {
      x: "1.5",
      y: "10.5",
      width: "21",
      height: "3",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("rect", {
      x: "1.5",
      y: "16.5",
      width: "21",
      height: "3",
      fill: "#545454"
    })]
  });
};
const StudioIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      d: "M21.7433 12.8359L17.1958 10.9731L15.3017 6.501C15.1717 6.19532 14.6617 6.19532 14.5317 6.501L12.6375 10.9731L8.09 12.8359C7.93417 12.8998 7.83333 13.049 7.83333 13.2145C7.83333 13.3801 7.93417 13.5292 8.09 13.5932L12.6375 15.4559L14.5317 19.9281C14.5967 20.0813 14.7483 20.1805 14.9167 20.1805C15.085 20.1805 15.2367 20.0813 15.3017 19.9281L17.1958 15.4559L21.7433 13.5932C21.8992 13.5292 22 13.3801 22 13.2145C22 13.049 21.8992 12.8998 21.7433 12.8359ZM10.8817 7.0886L7.955 6.12894L6.97917 3.25077C6.865 2.91641 6.30167 2.91641 6.18833 3.25077L5.21167 6.12894L2.285 7.0886C2.115 7.14515 2 7.30167 2 7.47787C2 7.65407 2.115 7.8106 2.285 7.86715L5.2125 8.82681L6.18833 11.7058C6.245 11.8722 6.40417 11.9852 6.58333 11.9852C6.7625 11.9852 6.92167 11.8722 6.97917 11.705L7.955 8.82599L10.8825 7.86633C11.0517 7.8106 11.1667 7.65407 11.1667 7.47787C11.1667 7.30167 11.0517 7.14515 10.8817 7.0886ZM9.215 17.7424L7.5375 17.1925L6.97833 15.5428C6.86417 15.2084 6.30083 15.2084 6.1875 15.5428L5.62833 17.1925L3.95083 17.7424C3.78167 17.7989 3.66667 17.9555 3.66667 18.1317C3.66667 18.3079 3.78167 18.4644 3.95167 18.5209L5.62917 19.0708L6.18833 20.7205C6.245 20.8869 6.40417 21 6.58333 21C6.7625 21 6.92167 20.8869 6.97917 20.7197L7.53833 19.07L9.21583 18.5201C9.385 18.4644 9.5 18.3079 9.5 18.1317C9.5 17.9555 9.385 17.7989 9.215 17.7424Z",
      fill: "#545454"
    })
  });
};
const UnderlineIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.3333 11.9244C17.3333 14.6356 15.3956 17.0533 12.7022 17.4C9.44889 17.8178 6.66667 15.2844 6.66667 12.1111V6.11111C6.66667 5.49778 7.16445 5 7.77778 5C8.39111 5 8.88889 5.49778 8.88889 6.11111V12.1111C8.88889 14.04 10.6489 15.5689 12.6489 15.1511C14.1067 14.8578 15.1111 13.5067 15.1111 12.0222V6.11111C15.1111 5.49778 15.6089 5 16.2222 5C16.8356 5 17.3333 5.49778 17.3333 6.11111V11.9244ZM6.66667 21C6.17778 21 5.77778 20.6 5.77778 20.1111C5.77778 19.6222 6.17778 19.2222 6.66667 19.2222H17.3333C17.8222 19.2222 18.2222 19.6222 18.2222 20.1111C18.2222 20.6 17.8222 21 17.3333 21H6.66667Z",
      fill: "#545454"
    })
  });
};
const UploadAudioIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M19.5 2H4.5C3.125 2 2 3.125 2 4.5V19.5C2 20.875 3.125 22 4.5 22H19.5C20.875 22 22 20.875 22 19.5V4.5C22 3.125 20.875 2 19.5 2Z",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("path", {
      d: "M15.7503 8.25H13.2503V14.9625C13.2503 16.55 12.1253 18.0125 10.5503 18.2125C8.43777 18.5 6.66277 16.65 7.05027 14.525C7.30027 13.15 8.52527 12.0875 9.92527 12C10.7128 11.95 11.4253 12.2 12.0003 12.6375V7C12.0003 6.3125 12.5628 5.75 13.2503 5.75H15.7503C16.4378 5.75 17.0003 6.3125 17.0003 7C17.0003 7.6875 16.4378 8.25 15.7503 8.25Z",
      fill: "white"
    })]
  });
};
const UploadVideoIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM10 8.50001V15.5C10 15.91 10.47 16.15 10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.10001C10.47 7.85001 10 8.09001 10 8.50001Z",
      fill: "#545454"
    })
  });
};
const WarningIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M11.261 3.87908C11.5861 3.30436 12.4139 3.30436 12.739 3.87908L21.2835 18.9867C21.6035 19.5526 21.1947 20.2536 20.5445 20.2536H3.45554C2.80533 20.2536 2.39646 19.5526 2.71655 18.9867L11.261 3.87908Z",
      fill: "#545454"
    }), /* @__PURE__ */ jsx("path", {
      d: "M11.3632 17.0255C11.1967 16.8617 11.1134 16.6559 11.1134 16.4081C11.1134 16.1603 11.1967 15.9605 11.3632 15.8086C11.5379 15.6448 11.7491 15.5628 11.9969 15.5628C12.2487 15.5628 12.462 15.6448 12.6366 15.8086C12.8113 15.9605 12.8986 16.1603 12.8986 16.4081C12.8986 16.6559 12.8113 16.8617 12.6366 17.0255C12.462 17.1894 12.2487 17.2713 11.9969 17.2713C11.7491 17.2713 11.5379 17.1894 11.3632 17.0255ZM11.9999 14.6037C11.6297 14.6037 11.3246 14.3132 11.3064 13.9434L11.085 9.42781C11.0612 8.94318 11.4477 8.53723 11.9329 8.53723H12.0669C12.5521 8.53723 12.9386 8.94318 12.9148 9.42781L12.6934 13.9434C12.6752 14.3132 12.3701 14.6037 11.9999 14.6037Z",
      fill: "white"
    })]
  });
};
const FacebookIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.1217 12.0054H8.84479V9.56619H11.1217V8.34125C11.1217 6.32057 12.7598 4.6825 14.7804 4.6825H16V7.12166H14.7804C14.1069 7.12166 13.5609 7.66769 13.5609 8.34125V9.56619H15.9786V12.0054H13.5609V19.3175H11.1217V12.0054Z",
      fill: "#3B5998"
    })
  });
};
const InstagramIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.2 4H8.8C6.14903 4 4 6.14903 4 8.8V15.2C4 17.851 6.14903 20 8.8 20H15.2C17.851 20 20 17.851 20 15.2V8.8C20 6.14903 17.851 4 15.2 4ZM5.60002 8.79993C5.60002 7.03262 7.03271 5.59993 8.80002 5.59993H15.2C16.9673 5.59993 18.4 7.03262 18.4 8.79993V15.1999C18.4 16.9672 16.9673 18.3999 15.2 18.3999H8.80002C7.03271 18.3999 5.60002 16.9672 5.60002 15.1999V8.79993ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14.3999C13.3255 14.3999 14.4 13.3254 14.4 11.9999C14.4 10.6745 13.3255 9.59994 12 9.59994C10.6745 9.59994 9.60002 10.6745 9.60002 11.9999C9.60002 13.3254 10.6745 14.3999 12 14.3999ZM16.8 8.00003C16.8 8.44186 16.4418 8.80003 16 8.80003C15.5582 8.80003 15.2 8.44186 15.2 8.00003C15.2 7.5582 15.5582 7.20003 16 7.20003C16.4418 7.20003 16.8 7.5582 16.8 8.00003Z",
      fill: "url(#paint0_linear_30_366)"
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint0_linear_30_366",
        x1: "16.4",
        y1: "4",
        x2: "5.6",
        y2: "20",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          offset: "0.0311768",
          stopColor: "#A044C3"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.363837",
          stopColor: "#C34083"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.684451",
          stopColor: "#D97144"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F0C86B"
        })]
      })
    })]
  });
};
const SoundcloudIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M10.5914 14.6066L10.4747 10.1887C10.4747 10.0514 10.3657 9.94644 10.2412 9.94644C10.1089 9.94644 10.0078 10.0514 10.0078 10.1887L9.8988 14.6066L10.0078 16.7308C10.0078 16.8681 10.1167 16.973 10.2412 16.973C10.3735 16.973 10.4747 16.8681 10.4747 16.7308L10.5914 14.6066Z",
      fill: "url(#paint0_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M9.75099 14.6066L9.61869 10.0191C9.61869 9.88992 9.51752 9.793 9.40079 9.793C9.28406 9.793 9.18289 9.88992 9.18289 10.0191L9.06616 14.5986L9.18289 16.7388C9.18289 16.8681 9.28406 16.965 9.40079 16.965C9.51752 16.965 9.61869 16.8681 9.61869 16.7388L9.75099 14.6066Z",
      fill: "url(#paint1_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M7.93772 10.0514C7.92994 9.94645 7.85212 9.8576 7.75095 9.8576C7.64978 9.8576 7.57196 9.93837 7.56418 10.0514L7.43188 14.5985L7.56418 16.7711C7.56418 16.8761 7.64978 16.9569 7.75095 16.9569C7.85212 16.9569 7.92994 16.8761 7.93772 16.7631L8.09336 14.5905L7.93772 10.0514Z",
      fill: "url(#paint2_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M8.77821 9.89798C8.77821 9.78491 8.68482 9.68799 8.57587 9.68799C8.46692 9.68799 8.37354 9.77683 8.37354 9.89798L8.24902 14.5985L8.37354 16.755C8.37354 16.868 8.46692 16.965 8.57587 16.965C8.68482 16.965 8.77042 16.8761 8.77821 16.755L8.91828 14.5985L8.77821 9.89798Z",
      fill: "url(#paint3_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M4.53693 16.9085C4.59919 16.9085 4.64588 16.86 4.65366 16.7873L4.856 14.5986L4.65366 12.3371C4.64588 12.2725 4.59919 12.216 4.53693 12.216C4.47467 12.216 4.42798 12.2644 4.4202 12.3371L4.24121 14.5986L4.4202 16.7873C4.4202 16.86 4.47467 16.9085 4.53693 16.9085Z",
      fill: "url(#paint4_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M11.4397 14.6066L11.3308 9.35686C11.3308 9.26802 11.2841 9.18725 11.214 9.13879C11.1751 9.11456 11.1284 9.09033 11.0739 9.09033C11.0273 9.09033 10.9806 9.10649 10.9339 9.13071C10.8638 9.17917 10.8171 9.25994 10.8171 9.34878V9.39724L10.7238 14.5985L10.8171 16.7065V16.7146C10.8171 16.7711 10.8405 16.8277 10.8794 16.8681C10.9261 16.9246 10.9961 16.965 11.0739 16.965C11.144 16.965 11.2062 16.9327 11.2529 16.8923C11.2996 16.8438 11.3308 16.7792 11.3308 16.7065L11.3385 16.4965L11.4397 14.6066Z",
      fill: "url(#paint5_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M5.46299 12.4986C5.45521 12.4179 5.40073 12.3613 5.33069 12.3613C5.26065 12.3613 5.1984 12.4179 5.1984 12.4986L5.03497 14.5985L5.1984 16.8034C5.20618 16.8842 5.26065 16.9407 5.33069 16.9407C5.40073 16.9407 5.46299 16.8842 5.46299 16.8034L5.64976 14.5985L5.46299 12.4986Z",
      fill: "url(#paint6_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M6.1323 11.0287C6.05448 11.0287 5.98444 11.0933 5.98444 11.1822L5.8288 14.5986L5.98444 16.8035C5.99222 16.8923 6.05448 16.9569 6.1323 16.9569C6.21012 16.9569 6.28016 16.8923 6.28016 16.8035L6.45915 14.5986L6.28016 11.1822C6.28016 11.1014 6.21012 11.0287 6.1323 11.0287Z",
      fill: "url(#paint7_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M7.09733 16.8035L7.26075 14.6066L7.09733 10.4068C7.08955 10.3099 7.01951 10.2372 6.92612 10.2372C6.83274 10.2372 6.7627 10.3099 6.75492 10.4068L6.60706 14.6066L6.75492 16.8035C6.75492 16.9004 6.83274 16.9731 6.92612 16.9731C7.01951 16.9811 7.08955 16.9004 7.09733 16.8035Z",
      fill: "url(#paint8_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M12.0545 8.63804C12.0156 8.61381 11.9689 8.59766 11.9144 8.59766C11.8521 8.59766 11.7899 8.62189 11.7432 8.66227C11.6809 8.71073 11.642 8.79149 11.642 8.88034V8.91264L11.5331 14.6147L11.5876 15.6646L11.642 16.6904C11.642 16.8438 11.7665 16.965 11.9144 16.965C12.0623 16.965 12.179 16.8357 12.1868 16.6823L12.3035 14.6066L12.1868 8.88034C12.179 8.77534 12.1323 8.6865 12.0545 8.63804Z",
      fill: "url(#paint9_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M2.22568 15.81C2.26459 15.81 2.29572 15.7777 2.3035 15.7293L2.47471 14.5985L2.3035 13.4517C2.29572 13.4032 2.26459 13.3709 2.22568 13.3709C2.18677 13.3709 2.14786 13.4032 2.14786 13.4517L2 14.5985L2.14786 15.7293C2.14786 15.7777 2.18677 15.81 2.22568 15.81Z",
      fill: "url(#paint10_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M2.96497 16.4965C3.00388 16.4965 3.04279 16.4642 3.05057 16.4158L3.27625 14.5985L3.05057 12.7409C3.04279 12.6925 3.01166 12.6602 2.96497 12.6602C2.92606 12.6602 2.88715 12.6925 2.87937 12.7409L2.68481 14.5985L2.87937 16.4158C2.88715 16.4642 2.91828 16.4965 2.96497 16.4965Z",
      fill: "url(#paint11_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M3.7432 16.8277C3.79767 16.8277 3.83658 16.7873 3.84437 16.7227L4.05448 14.5986L3.84437 12.3937C3.83658 12.3371 3.79767 12.2887 3.7432 12.2887C3.68872 12.2887 3.64981 12.329 3.64203 12.3937L3.45526 14.5986L3.64203 16.7227C3.64981 16.7792 3.68872 16.8277 3.7432 16.8277Z",
      fill: "url(#paint12_linear_30_370)"
    }), /* @__PURE__ */ jsx("path", {
      d: "M19.4707 11.8929C19.1361 11.8929 18.8171 11.9656 18.5213 12.0867C18.3268 9.80107 16.4746 8 14.2178 8C13.6653 8 13.1283 8.11307 12.6536 8.30691C12.4669 8.3796 12.4202 8.46036 12.4202 8.60574V16.6742C12.4202 16.8277 12.5369 16.9488 12.6848 16.965H19.4785C20.8326 16.965 21.9299 15.8423 21.9299 14.437C21.9221 13.0317 20.8248 11.8929 19.4707 11.8929Z",
      fill: "url(#paint13_linear_30_370)"
    }), /* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        id: "paint0_linear_30_370",
        x1: "10.2432",
        y1: "7.99999",
        x2: "10.2432",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint1_linear_30_370",
        x1: "9.41",
        y1: "8",
        x2: "9.41",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint2_linear_30_370",
        x1: "7.76283",
        y1: "7.99999",
        x2: "7.76283",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint3_linear_30_370",
        x1: "8.58323",
        y1: "7.99999",
        x2: "8.58323",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint4_linear_30_370",
        x1: "4.54568",
        y1: "8",
        x2: "4.54568",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint5_linear_30_370",
        x1: "11.0828",
        y1: "8",
        x2: "11.0828",
        y2: "16.9791",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint6_linear_30_370",
        x1: "5.34027",
        y1: "7.99999",
        x2: "5.34027",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint7_linear_30_370",
        x1: "6.14143",
        y1: "8",
        x2: "6.14143",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint8_linear_30_370",
        x1: "6.93661",
        y1: "8",
        x2: "6.93661",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint9_linear_30_370",
        x1: "11.9186",
        y1: "7.99999",
        x2: "11.9186",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint10_linear_30_370",
        x1: "2.23889",
        y1: "8",
        x2: "2.23889",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint11_linear_30_370",
        x1: "2.97556",
        y1: "7.99998",
        x2: "2.97556",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint12_linear_30_370",
        x1: "3.7574",
        y1: "8.00001",
        x2: "3.7574",
        y2: "16.979",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2393",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6262",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      }), /* @__PURE__ */ jsxs("linearGradient", {
        id: "paint13_linear_30_370",
        x1: "17.1684",
        y1: "8",
        x2: "17.1684",
        y2: "16.9665",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#F6871F"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.2402",
          stopColor: "#F57E20"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "0.6306",
          stopColor: "#F36621"
        }), /* @__PURE__ */ jsx("stop", {
          offset: "1",
          stopColor: "#F04923"
        })]
      })]
    })]
  });
};
const TwitterIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsx("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.0985 5.98076L20.2157 6.11123L19.7135 7.11769C19.4686 7.60851 19.2235 8.09932 18.9781 8.59013C18.949 8.69409 18.8978 8.78522 18.8222 8.90387C18.7906 8.95345 18.6826 9.11115 18.6776 9.11873C18.6491 9.16148 18.628 9.19519 18.6128 9.22221V11.1084C18.6128 15.935 13.9418 19.0021 9.53062 19.0021C8.62799 19.0021 7.94218 18.9588 7.1569 18.7875C5.86458 18.5055 4.90283 17.9449 4.46274 16.9651L4.00964 15.9564L5.11077 15.8552C6.1069 15.7636 6.97057 15.5738 7.63383 15.3197C5.81295 15.0268 4.79253 14.2271 4.79253 12.7252V11.9355H5.58222C5.75573 11.9355 5.91218 11.9214 6.05204 11.8956C4.68545 11.0785 4.00096 9.76773 4.00096 7.94965C4.00082 7.87216 4.00082 7.87216 4.00035 7.78931C3.99522 6.87291 4.04444 6.38326 4.2953 5.75832C4.45608 5.3578 4.68848 4.98702 5.00125 4.64728L5.59716 4L6.17652 4.66213C8.08581 6.84415 9.97317 8.16795 11.9002 8.32807C11.9084 6.31462 13.4301 4.79089 15.4539 4.79089C16.3974 4.79089 17.2532 5.14901 17.9258 5.79475C18.2939 5.87039 18.6848 5.93244 19.0985 5.98076ZM17.3527 7.28675L17.1106 7.23194L16.9435 7.04847C16.5392 6.60488 16.0318 6.37032 15.4541 6.37032C14.2988 6.37032 13.4797 7.19348 13.4797 8.34455C13.4797 8.53266 13.4748 8.65087 13.4514 8.80622C13.3579 9.42614 13.0102 9.92393 12.2951 9.92393C9.92762 9.92393 7.79174 8.6556 5.70896 6.48938C5.60159 6.81578 5.57633 7.15129 5.57986 7.78051C5.58034 7.86466 5.58034 7.86466 5.5805 7.9497C5.5805 9.56699 6.23572 10.4516 7.78709 10.9447L8.33757 11.1197V11.6973C8.33757 12.3978 7.67397 13.0571 6.70301 13.3525C7.14811 13.6901 8.05837 13.8724 9.53106 13.8724H10.3207V14.6621C10.3207 15.7935 9.0207 16.6794 7.05685 17.142C7.69731 17.3382 8.55008 17.4228 9.53078 17.4228C13.1747 17.4228 17.0336 14.8889 17.0336 11.1085V9.13424C17.0336 8.90224 17.1008 8.70087 17.2126 8.49149C17.2563 8.40962 17.3044 8.33158 17.3637 8.24256C17.3749 8.2258 17.4163 8.16508 17.4493 8.11654L17.5118 7.99137C17.6133 7.78855 17.7146 7.58573 17.816 7.3829C17.6585 7.35307 17.5041 7.32102 17.3527 7.28675Z",
      fill: "#7ABAED"
    })
  });
};
const YoutubeIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.6656 7.80444C19.4816 7.09414 18.9395 6.53482 18.251 6.34499C17.0034 6 12 6 12 6C12 6 6.99664 6 5.74891 6.34499C5.06045 6.53482 4.51827 7.09414 4.33427 7.80444C4 9.09176 4 11.7778 4 11.7778C4 11.7778 4 14.4637 4.33427 15.7511C4.51827 16.4614 5.06045 17.0207 5.74891 17.2107C6.99664 17.5556 12 17.5556 12 17.5556C12 17.5556 17.0034 17.5556 18.251 17.2107C18.9395 17.0207 19.4816 16.4614 19.6656 15.7511C20 14.4637 20 11.7778 20 11.7778C20 11.7778 20 9.09176 19.6656 7.80444Z",
      fill: "#FF0000"
    }), /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.2222 14.8889V9.55554L14.6667 12.2223L10.2222 14.8889Z",
      fill: "white"
    })]
  });
};
const ClapIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    className,
    viewBox: "0 0 38 39",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsx("path", {
        d: "M4.814 1.696a1.922 1.922 0 0 1 2.075.484l9.26 9.79.574-.525-7.29-7.712c-.708-.748-.656-1.937.092-2.644a1.837 1.837 0 0 1 2.613.077l9.817 10.38 2.197 2.339.912-3.656a3.816 3.816 0 0 1 4.704-2.763l.699.217-2.199 12.8a6.874 6.874 0 0 1-2.139 5.5L23.172 28.8c-2.717 2.565-7.01 2.426-9.573-.287l-7.05-7.483-5.223-5.51a1.933 1.933 0 0 1 .09-2.723 1.894 1.894 0 0 1 2.692.075l5.231 5.533.527-.508-8.235-8.713a1.965 1.965 0 0 1 .073-2.77c.784-.737 2.033-.71 2.77.074l8.244 8.736.603-.589-9.237-9.799c-.735-.778-.72-2.003.059-2.738a2.03 2.03 0 0 1 .67-.402z",
        id: "clap-path-1"
      }), /* @__PURE__ */ jsx("path", {
        d: "M4.814 1.696a1.922 1.922 0 0 1 2.075.484l9.26 9.79.574-.525-7.29-7.712c-.708-.748-.656-1.937.092-2.644a1.837 1.837 0 0 1 2.613.077l9.817 10.38 2.197 2.339.912-3.656a3.816 3.816 0 0 1 4.704-2.763l.699.217-2.199 12.8a6.874 6.874 0 0 1-2.139 5.5L23.172 28.8c-2.717 2.565-7.01 2.426-9.573-.287l-7.05-7.483-5.223-5.51a1.933 1.933 0 0 1 .09-2.723 1.894 1.894 0 0 1 2.692.075l5.231 5.533.527-.508-8.235-8.713a1.965 1.965 0 0 1 .073-2.77c.784-.737 2.033-.71 2.77.074l8.244 8.736.603-.589-9.237-9.799c-.735-.778-.72-2.003.059-2.738a2.03 2.03 0 0 1 .67-.402z",
        id: "clap-path-2"
      }), /* @__PURE__ */ jsx("path", {
        d: "M4.814 1.696a1.922 1.922 0 0 1 2.075.484l9.26 9.79.574-.525-7.29-7.712c-.708-.748-.656-1.937.092-2.644a1.837 1.837 0 0 1 2.613.077l9.817 10.38 2.197 2.339.912-3.656a3.816 3.816 0 0 1 4.704-2.763l.699.217-2.199 12.8a6.874 6.874 0 0 1-2.139 5.5L23.172 28.8c-2.717 2.565-7.01 2.426-9.573-.287l-7.05-7.483-5.223-5.51a1.933 1.933 0 0 1 .09-2.723 1.894 1.894 0 0 1 2.692.075l5.231 5.533.527-.508-8.235-8.713a1.965 1.965 0 0 1 .073-2.77c.784-.737 2.033-.71 2.77.074l8.244 8.736.603-.589-9.237-9.799c-.735-.778-.72-2.003.059-2.738a2.03 2.03 0 0 1 .67-.402z",
        id: "clap-path3"
      }), /* @__PURE__ */ jsx("path", {
        d: "M4.814 1.696a1.922 1.922 0 0 1 2.075.484l9.26 9.79.574-.525-7.29-7.712c-.708-.748-.656-1.937.092-2.644a1.837 1.837 0 0 1 2.613.077l9.817 10.38 2.197 2.339.912-3.656a3.816 3.816 0 0 1 4.704-2.763l.699.217-2.199 12.8a6.874 6.874 0 0 1-2.139 5.5L23.172 28.8c-2.717 2.565-7.01 2.426-9.573-.287l-7.05-7.483-5.223-5.51a1.933 1.933 0 0 1 .09-2.723 1.894 1.894 0 0 1 2.692.075l5.231 5.533.527-.508-8.235-8.713a1.965 1.965 0 0 1 .073-2.77c.784-.737 2.033-.71 2.77.074l8.244 8.736.603-.589-9.237-9.799c-.735-.778-.72-2.003.059-2.738a2.03 2.03 0 0 1 .67-.402z",
        id: "clap-path-4"
      }), /* @__PURE__ */ jsxs("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "clap-gradient",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#D2C8FF",
          offset: "0%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#B09EFC",
          offset: "100%"
        })]
      })]
    }), /* @__PURE__ */ jsxs("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/* @__PURE__ */ jsxs("g", {
        transform: "rotate(-10 24.65 -23.256)",
        children: [/* @__PURE__ */ jsx("path", {
          stroke: "#47367B",
          strokeWidth: "1.7",
          d: "M10.87-.268c.688.02 1.37.304 1.885.85l9.82 10.382 1.13 1.202.534-2.143a4.664 4.664 0 0 1 2.167-2.9 4.643 4.643 0 0 1 3.6-.473l1.425.442-2.308 13.436a7.72 7.72 0 0 1-2.408 6.07l-2.96 2.82a7.577 7.577 0 0 1-5.448 2.068 7.623 7.623 0 0 1-5.327-2.39l-7.048-7.481-5.225-5.513a2.756 2.756 0 0 1-.747-1.987 2.782 2.782 0 0 1 2.462-2.676l.159-.013-1.568-1.658A2.808 2.808 0 0 1 .25 7.954l-.002-.196c.019-.722.313-1.434.875-1.963a2.82 2.82 0 0 1 2.01-.764l.029.002-.066-.103a2.808 2.808 0 0 1-.396-1.308l-.003-.194a2.747 2.747 0 0 1 .864-1.949A2.9 2.9 0 0 1 4.516.9a2.778 2.778 0 0 1 2.99.697l.588.621.004-.054A2.743 2.743 0 0 1 8.785.63l.156-.159a2.68 2.68 0 0 1 1.93-.739z"
        }), /* @__PURE__ */ jsx("mask", {
          id: "clap-mask-1",
          fill: "#fff",
          children: /* @__PURE__ */ jsx("use", {
            xlinkHref: "#clap-path-2"
          })
        }), /* @__PURE__ */ jsx("use", {
          fill: "#A08DF0",
          fillRule: "nonzero",
          xlinkHref: "#clap-path-2"
        }), /* @__PURE__ */ jsx("path", {
          d: "M.647 12.043c0 .698 4.39 5.608 13.17 14.732 1.598 1.409 3.028 2.113 4.29 2.113 1.893 0 4.14-1.36 4.978-2.113.559-.502 2.075-2.195 4.55-5.08l2.594-2.71v7.038l-8.904 6.805-7.999.898L-3 14.903c2.431-2.604 3.647-3.557 3.647-2.86z",
          fill: "#765FC4",
          mask: "url(#clap-mask-1)"
        })]
      }), /* @__PURE__ */ jsxs("g", {
        transform: "translate(.869 6)",
        children: [/* @__PURE__ */ jsx("path", {
          stroke: "#47367B",
          strokeWidth: "1.7",
          d: "M10.87-.268c.688.02 1.37.304 1.885.85l9.82 10.382 1.13 1.202.534-2.143a4.664 4.664 0 0 1 2.167-2.9 4.643 4.643 0 0 1 3.6-.473l1.425.442-2.308 13.436a7.72 7.72 0 0 1-2.408 6.07l-2.96 2.82a7.577 7.577 0 0 1-5.448 2.068 7.623 7.623 0 0 1-5.327-2.39l-7.048-7.481-5.225-5.513a2.756 2.756 0 0 1-.747-1.987 2.782 2.782 0 0 1 2.462-2.676l.159-.013-1.568-1.658A2.808 2.808 0 0 1 .25 7.954l-.002-.196c.019-.722.313-1.434.875-1.963a2.82 2.82 0 0 1 2.01-.764l.029.002-.066-.103a2.808 2.808 0 0 1-.396-1.308l-.003-.194a2.747 2.747 0 0 1 .864-1.949A2.9 2.9 0 0 1 4.516.9a2.778 2.778 0 0 1 2.99.697l.588.621.004-.054A2.743 2.743 0 0 1 8.785.63l.156-.159a2.68 2.68 0 0 1 1.93-.739z"
        }), /* @__PURE__ */ jsx("mask", {
          id: "clap-mask-2",
          fill: "#fff",
          children: /* @__PURE__ */ jsx("use", {
            xlinkHref: "#clap-path-4"
          })
        }), /* @__PURE__ */ jsx("use", {
          fill: "url(#clap-gradient)",
          fillRule: "nonzero",
          xlinkHref: "#clap-path-4"
        }), /* @__PURE__ */ jsx("path", {
          d: "M.647 12.043c0 .698 4.39 5.608 13.17 14.732 1.598 1.409 3.028 2.113 4.29 2.113 1.893 0 4.14-1.36 4.978-2.113.559-.502 2.075-2.195 4.55-5.08l2.594-2.71v7.038l-8.904 6.805-7.999.898L-3 14.903c2.431-2.604 3.647-3.557 3.647-2.86z",
          fill: "#765FC4",
          mask: "url(#clap-mask-2)"
        })]
      }), /* @__PURE__ */ jsx("path", {
        fill: "#47367B",
        d: "m7.972 8.376.566-.547 9.054 9.616-.574.526zM11.95 5.132l.37-.669 10.55 7.831-.474.611zM3.953 11.01l.587-.591 9.65 10.216-.603.589zM1.213 14.876l.465-.535 9.057 9.556-.527.508z"
      })]
    })]
  });
};
const LightBulbIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 31 40",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsxs("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "74.7540513%",
        id: "light-bulb-gradient",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#FFEBC8",
          offset: "0%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#FED686",
          offset: "100%"
        })]
      })
    }), /* @__PURE__ */ jsx("g", {
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: /* @__PURE__ */ jsx("g", {
        transform: "translate(-190.000000, -90.000000)",
        children: /* @__PURE__ */ jsxs("g", {
          transform: "translate(191.735294, 92.253352)",
          children: [/* @__PURE__ */ jsx("path", {
            d: "M19.0588235,29.088304 L19.0588235,33.8823529 L19.0588235,33.8823529 C19.0588235,35.0518971 18.1107206,36 16.9411765,36 L10.5882353,36 C9.41869112,36 8.47058824,35.0518971 8.47058824,33.8823529 L8.47113156,28.0750311 C8.47112569,27.7686744 8.33072033,27.479209 8.09011063,27.289574 C2.69670354,23.0387959 -1.24344979e-14,18.5305066 -1.24344979e-14,13.7647059 C-1.24344979e-14,6.16266874 6.16266874,0 13.7647059,0 C21.366743,0 27.5294118,6.16266874 27.5294118,13.7647059 C27.5294118,18.5831566 25.0892367,22.9037839 20.2088865,26.7265876 C19.4829251,27.2952272 19.0588235,28.1661484 19.0588235,29.088304 Z",
            stroke: "#805E18",
            strokeWidth: "2",
            fill: "url(#light-bulb-gradient)"
          }), /* @__PURE__ */ jsx("rect", {
            fill: "#F5F5F7",
            x: "9.26470588",
            y: "26.7692308",
            width: "9",
            height: "9"
          }), /* @__PURE__ */ jsx("rect", {
            fill: "#CACAE1",
            x: "9.26470588",
            y: "31.7692308",
            width: "9",
            height: "4"
          }), /* @__PURE__ */ jsx("path", {
            d: "M19.0588235,29.088304 L19.0588235,33.8823529 L19.0588235,33.8823529 C19.0588235,35.0518971 18.1107206,36 16.9411765,36 L10.5882353,36 C9.41869112,36 8.47058824,35.0518971 8.47058824,33.8823529 L8.47113156,28.0750311 C8.47112569,27.7686744 8.33072033,27.479209 8.09011063,27.289574 C2.69670354,23.0387959 -1.24344979e-14,18.5305066 -1.24344979e-14,13.7647059 C-1.24344979e-14,6.16266874 6.16266874,0 13.7647059,0 C21.366743,0 27.5294118,6.16266874 27.5294118,13.7647059 C27.5294118,18.5831566 25.0892367,22.9037839 20.2088865,26.7265876 C19.4829251,27.2952272 19.0588235,28.1661484 19.0588235,29.088304 Z",
            stroke: "#805E18",
            strokeWidth: "2"
          }), /* @__PURE__ */ jsx("path", {
            d: "M21.7022059,0.269230769 C17.3529635,0.269230769 13.8272059,4.29866802 13.8272059,9.26923077 C13.8272059,14.2397935 17.3529635,18.2692308 21.7022059,18.2692308",
            stroke: "#FFFFFF",
            strokeWidth: "2",
            transform: "translate(17.764706, 9.269231) scale(-1, 1) rotate(45.000000) translate(-17.764706, -9.269231) "
          })]
        })
      })
    })]
  });
};
const LoveIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    className,
    viewBox: "0 0 35 32",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    children: [/* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "love-gradient",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#07D7FC",
          offset: "0%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#03AEF8",
          offset: "100%"
        })]
      }), /* @__PURE__ */ jsx("path", {
        d: "M15.3697175,27.8626841 L2.5873781,15.0803447 L2.5873781,15.0803447 L2.42570771,14.9144637 C-0.861590171,11.4534825 -0.807700042,5.98245624 2.5873781,2.5873781 C5.9766921,-0.801935903 11.4349111,-0.861397552 14.8968183,2.40899315 L15.0803447,2.5873781 L16.7839311,4.29096446 L17.9196553,3.15524022 C21.3147334,-0.239837924 26.7857597,-0.293728053 30.2467409,2.99356983 L30.4126219,3.15524022 C33.8019359,6.54455422 33.8613976,12.0027732 30.5910068,15.4646804 L30.4126219,15.6482068 L18.1981446,27.8626841 C17.417096,28.6437327 16.1507661,28.6437327 15.3697175,27.8626841 Z",
        id: "love-path-2"
      })]
    }), /* @__PURE__ */ jsx("g", {
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: /* @__PURE__ */ jsx("g", {
        transform: "translate(-30.000000, -95.000000)",
        children: /* @__PURE__ */ jsxs("g", {
          transform: "translate(31.000000, 96.258502)",
          children: [/* @__PURE__ */ jsxs("g", {
            transform: "translate(0.000000, 0.000000)",
            children: [/* @__PURE__ */ jsx("mask", {
              id: "love-mask-1",
              fill: "white",
              children: /* @__PURE__ */ jsx("use", {
                xlinkHref: "#love-path-2"
              })
            }), /* @__PURE__ */ jsx("use", {
              fill: "url(#love-gradient)",
              xlinkHref: "#love-path-2"
            }), /* @__PURE__ */ jsx("path", {
              d: "M-1.78448276,6.92157288 L16.0428932,24.7489489 C16.4334175,25.1394731 17.0665825,25.1394731 17.4571068,24.7489489 L35.2844828,6.92157288 L35.2844828,6.92157288 L38.7327586,10.3698487 L17.1810345,31.9215729 L16.75,31.4905384 L16.3189655,31.9215729 L-5.23275862,10.3698487 L-1.78448276,6.92157288 Z",
              fill: "#2681A9",
              mask: "url(#love-mask-1)"
            })]
          }), /* @__PURE__ */ jsx("path", {
            d: "M15.3697175,27.8626841 L2.5873781,15.0803447 L2.5873781,15.0803447 L2.42570771,14.9144637 C-0.861590171,11.4534825 -0.807700042,5.98245624 2.5873781,2.5873781 C5.9766921,-0.801935903 11.4349111,-0.861397552 14.8968183,2.40899315 L15.0803447,2.5873781 L16.7839311,4.29096446 L17.9196553,3.15524022 C21.3147334,-0.239837924 26.7857597,-0.293728053 30.2467409,2.99356983 L30.4126219,3.15524022 C33.8019359,6.54455422 33.8613976,12.0027732 30.5910068,15.4646804 L30.4126219,15.6482068 L18.1981446,27.8626841 C17.417096,28.6437327 16.1507661,28.6437327 15.3697175,27.8626841 Z",
            stroke: "#105E80",
            strokeWidth: "2"
          })]
        })
      })
    })]
  });
};
const OneHundredIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    children: [/* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "one-hundred-gradient",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#FFB3B2",
          offset: "0%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#FF7B76",
          offset: "100%"
        })]
      }), /* @__PURE__ */ jsx("path", {
        d: "M9.00197706,1.24570217 C7.51799418,5.79361839 6.22692253,9.70567838 5.60090125,12.8922832 C5.18355372,15.0166864 4.52064438,18.2518179 3.61217322,22.5976776 C3.28867549,22.904553 2.91308106,23.1185776 2.48538992,23.2397512 C1.84385322,23.4215117 -0.0444218332,23.4180585 0.00284879392,23.0985016 C0.0805258983,22.4944526 0.149151875,21.9701552 0.223732972,21.4562628 L0.292869012,20.9946966 C0.563185102,19.2474686 0.954384061,17.3800281 2.05627149,12.6667762 C3.07173637,8.32319112 4.16232495,4.56732589 5.32803721,1.39918049 C5.8602249,1.29686161 6.46144324,1.24570217 7.13169223,1.24570217 L9.00197706,1.24570217 L9.00197706,1.24570217 Z M18.0304749,0.417551877 C22.6335839,0.964275027 21.9712456,6.95957858 20.5327308,11.9419949 C19.0940891,16.9243749 15.3128892,22.5804334 10.752468,21.4447135 C7.20384991,20.6799121 6.27261824,16.3502135 8.15141006,9.8324684 C10.030264,3.3147411 13.4273658,-0.129171273 18.0304749,0.417551877 Z M32.4304692,0.417551877 C37.0335782,0.964275027 36.3712399,6.95957858 34.9327251,11.9419949 C33.4940835,16.9243749 29.7128835,22.5804334 25.1524624,21.4447135 C21.6038442,20.6799121 20.6726126,16.3502135 22.5514044,9.8324684 C24.4302584,3.3147411 27.8273602,-0.129171273 32.4304692,0.417551877 Z M11.33723,11.366015 C10.1973818,16.3106212 10.9233087,17.2487837 12.0675111,17.577272 C14.5327885,18.2715087 16.2560313,14.2663928 17.0685483,11.5677193 C17.8810652,8.86904583 18.1544075,4.60901481 16.2560344,4.40118159 C14.3576612,4.19334838 12.4770781,6.42140885 11.33723,11.366015 Z M25.7372243,11.366015 C24.5973761,16.3106212 25.3233031,17.2487837 26.4675054,17.577272 C28.9327828,18.2715087 30.6560257,14.2663928 31.4685426,11.5677193 C32.2810595,8.86904583 32.5544019,4.60901481 30.6560287,4.40118159 C28.7576555,4.19334838 26.8770724,6.42140885 25.7372243,11.366015 Z",
        id: "one-hundred-path-1"
      }), /* @__PURE__ */ jsxs("filter", {
        x: "-3.5%",
        y: "-5.4%",
        width: "107.1%",
        height: "110.9%",
        filterUnits: "objectBoundingBox",
        id: "one-hundred-filter-1",
        children: [/* @__PURE__ */ jsx("feOffset", {
          dx: "0",
          dy: "1",
          in: "SourceAlpha",
          result: "shadowOffsetInner1"
        }), /* @__PURE__ */ jsx("feComposite", {
          in: "shadowOffsetInner1",
          in2: "SourceAlpha",
          operator: "arithmetic",
          k2: "-1",
          k3: "1",
          result: "shadowInnerInner1"
        }), /* @__PURE__ */ jsx("feColorMatrix", {
          values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0",
          type: "matrix",
          in: "shadowInnerInner1"
        })]
      })]
    }), /* @__PURE__ */ jsx("g", {
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: /* @__PURE__ */ jsx("g", {
        transform: "translate(-238.000000, -92.000000)",
        children: /* @__PURE__ */ jsxs("g", {
          transform: "translate(238.998023, 93.661496)",
          children: [/* @__PURE__ */ jsxs("g", {
            children: [/* @__PURE__ */ jsx("use", {
              fill: "url(#one-hundred-gradient)",
              fillRule: "evenodd",
              xlinkHref: "#one-hundred-path-1"
            }), /* @__PURE__ */ jsx("use", {
              fill: "black",
              fillOpacity: "1",
              filter: "url(#one-hundred-filter-1)",
              xlinkHref: "#one-hundred-path-1"
            }), /* @__PURE__ */ jsx("use", {
              stroke: "#71312A",
              strokeWidth: "1.5",
              xlinkHref: "#one-hundred-path-1"
            })]
          }), /* @__PURE__ */ jsx("path", {
            d: "M3.29188733,29.3491309 L29.5080392,27.7221602 L29.5080392,27.7221602 C29.9361918,27.1469067 30.2141878,26.7343106 30.3420272,26.4843719 C30.8869926,25.4189099 31.0019771,24.7735559 31.0019771,24.6850777 C31.0019771,24.5056608 29.1588257,24.2777485 27.6010086,24.3917046 C26.9327465,24.4405888 22.2062461,24.5173839 17.3576081,24.798318 C13.054775,25.0476277 8.60513853,25.3703839 4.00869872,25.7665867 C3.33755095,26.6160939 3.00197706,27.2679517 3.00197706,27.7221602 C3.00197706,28.1299819 3.02811318,28.6120527 3.08038543,29.1683726 C3.0906277,29.2757942 3.18418589,29.3558148 3.29188733,29.3491309 Z",
            stroke: "#71312A",
            strokeWidth: "1.5",
            fill: "#FF7C77"
          }), /* @__PURE__ */ jsx("path", {
            d: "M5.28892934,35.3506083 L26.5780824,34.1797189 L26.5780824,34.1797189 C26.9509178,33.4768357 27.2044579,32.9994836 27.3387026,32.7476625 C27.9109736,31.6741761 28.0019771,30.846155 28.0019771,30.7570105 C28.0019771,30.5762423 26.2020787,30.3703986 24.4642173,30.3703986 C23.6867631,30.3703986 20.3651521,30.2942759 15.2735733,30.5773258 C8.49593366,30.9541068 5.82856326,31.3537005 5.82856326,31.3537005 C5.82856326,31.3537005 5.00197706,32.7213318 5.00197706,33.5946846 C5.00197706,34.1146151 5.02760988,34.6397811 5.07887551,35.1701827 C5.08922192,35.2769017 5.18187174,35.3564964 5.28892934,35.3506083 Z",
            stroke: "#71312A",
            strokeWidth: "1.5",
            fill: "#FF7C77"
          })]
        })
      })
    })]
  });
};
const WowIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height: height2 = DEFAULT_ICON.HEIGHT,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs("svg", {
    width,
    height: height2,
    className,
    viewBox: "0 0 34 35",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [/* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsxs("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "wow-gradient",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#FFEFD6",
          offset: "0%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#FED57F",
          offset: "100%"
        })]
      })
    }), /* @__PURE__ */ jsx("g", {
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: /* @__PURE__ */ jsx("g", {
        transform: "translate(-82.000000, -93.000000)",
        children: /* @__PURE__ */ jsxs("g", {
          id: "wow",
          transform: "translate(83.000000, 94.022583)",
          children: [/* @__PURE__ */ jsx("circle", {
            stroke: "#805E18",
            strokeWidth: "2",
            fill: "url(#wow-gradient)",
            cx: "16",
            cy: "16",
            r: "16"
          }), /* @__PURE__ */ jsx("circle", {
            fill: "#805E18",
            cx: "10",
            cy: "10",
            r: "3"
          }), /* @__PURE__ */ jsx("circle", {
            fill: "#805E18",
            cx: "22",
            cy: "10",
            r: "3"
          }), /* @__PURE__ */ jsx("ellipse", {
            fill: "#805E18",
            cx: "16",
            cy: "19.5",
            rx: "3.5",
            ry: "4.5"
          }), /* @__PURE__ */ jsx("path", {
            d: "M30.9526507,14.7768064 C30.9840177,15.1728788 31,15.5732817 31,15.9774174 C31,24.2616886 24.2842712,30.9774174 16,30.9774174 C7.71572875,30.9774174 1,24.2616886 1,15.9774174 C1,15.5732817 1.01598229,15.1728788 1.0473493,14.7768064 C1.6589663,22.5009398 8.11986446,28.5774174 16,28.5774174 C23.7540424,28.5774174 30.1339036,22.6938481 30.9188157,15.1474774 L30.9526507,14.7768064 Z",
            fill: "#D2AA59"
          })]
        })
      })
    })]
  });
};
const BreadCrumb = ({
  label: label2,
  index,
  activeIndex
}) => {
  const breadCrumbAlreadyPassed = (index2, activeIndex2) => index2 < activeIndex2;
  const isActive = (index2, activeIndex2) => index2 === activeIndex2;
  const DIAMETER = 18;
  return /* @__PURE__ */ jsxs("div", {
    className: breadcrumb,
    children: [breadCrumbAlreadyPassed(index, activeIndex) ? /* @__PURE__ */ jsx(CircleCheckIcon, {
      fill: theme.colors.border.opaque,
      arrowColor: theme.colors.content.tertiary,
      height: DIAMETER,
      width: DIAMETER
    }) : /* @__PURE__ */ jsx("div", {
      className: isActive(index, activeIndex) ? numberVariants.active : numberVariants.inactive,
      children: index + 1
    }), /* @__PURE__ */ jsx("div", {
      className: isActive(index, activeIndex) ? labelVariants.primary : labelVariants.secondary,
      children: label2
    })]
  });
};
const BreadCrumbs = ({
  breadCrumbs,
  activeIndex
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: container$4,
    children: breadCrumbs.map((label2, index) => /* @__PURE__ */ jsx(BreadCrumb, {
      index,
      label: label2,
      activeIndex
    }, index))
  });
};
var designSystem_vanilla$j = "";
var baseButton = "_14w3wt80";
var buttonSpinner = "_14w3wt89";
var buttonTextSize = { large: "_14w3wt85", medium: "_14w3wt86", small: "_14w3wt87" };
var buttonVariant = { primary: "_14w3wt81", secondary: "_14w3wt82", destructive: "_14w3wt83", transparent: "_14w3wt84" };
var label$3 = "_14w3wt8a";
var loadingState = "_14w3wt88";
const Button = (_a) => {
  var _b = _a, {
    variant: variant2 = "primary",
    buttonSize = "medium",
    isLoading = false,
    disabled = false,
    children,
    onClick = () => ({}),
    className,
    accessibilityLabel
  } = _b, htmlButtonProps = __objRest(_b, [
    "variant",
    "buttonSize",
    "isLoading",
    "disabled",
    "children",
    "onClick",
    "className",
    "accessibilityLabel"
  ]);
  return /* @__PURE__ */ jsx("button", __spreadProps(__spreadValues({
    type: "button",
    className: classNames([baseButton, buttonTextSize[buttonSize], buttonVariant[variant2], label$3, className]),
    onClick,
    "aria-label": accessibilityLabel,
    disabled: disabled || isLoading
  }, htmlButtonProps), {
    children: isLoading ? /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(AnimatedSpinner, {
        className: buttonSpinner
      }), /* @__PURE__ */ jsx("span", {
        className: loadingState,
        children
      })]
    }) : children
  }));
};
var designSystem_vanilla$i = "";
var clickableContentWrapperButton = "_16il40h1 _16il40h0";
var emptyButtonStyle = "_16il40h0";
const ClickableContentWrapper = React$2.forwardRef((_c, ref) => {
  var _d = _c, {
    useDefaultFocus = false,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    onKeyDown,
    className = "",
    cypressId = "",
    dataTestId = "",
    id,
    useAutoBlur = useDefaultFocus,
    style,
    disabled = false
  } = _d, otherProps = __objRest(_d, [
    "useDefaultFocus",
    "onClick",
    "onMouseEnter",
    "onMouseLeave",
    "onFocus",
    "onBlur",
    "onKeyDown",
    "className",
    "cypressId",
    "dataTestId",
    "id",
    "useAutoBlur",
    "style",
    "disabled"
  ]);
  const clickHandler = (e) => {
    if (useAutoBlur) {
      e.currentTarget.blur();
    }
    if (onClick) {
      onClick();
    }
  };
  return /* @__PURE__ */ jsx("button", __spreadValues({
    id,
    "data-cy": cypressId,
    "data-testid": dataTestId,
    onClick: clickHandler,
    onMouseEnter,
    onMouseLeave,
    onKeyDown,
    onFocus,
    onBlur,
    className: classNames(useDefaultFocus ? emptyButtonStyle : clickableContentWrapperButton, className),
    ref,
    disabled,
    style
  }, otherProps));
});
ClickableContentWrapper.displayName = "ClickableContentWrapper";
var designSystem_vanilla$h = "";
var container$3 = "_1yxqyh30";
const Footer = ({
  children
}) => {
  return /* @__PURE__ */ jsx("footer", {
    className: container$3,
    children
  });
};
var designSystem_vanilla$g = "";
var header = "fgnzqp0";
const Header = ({
  children,
  logoComponent,
  className,
  style
}) => {
  return /* @__PURE__ */ jsxs("header", {
    className: classNames(header, className),
    style,
    children: [logoComponent, children]
  });
};
var designSystem_vanilla$f = "";
var container$2 = "amw6p50";
var contentContainer$1 = "amw6p54";
var image = "amw6p53";
var mediaContainer = "amw6p51";
var video = "amw6p52";
const Image = (_e) => {
  var _f = _e, {
    crossOrigin
  } = _f, rest = __objRest(_f, [
    "crossOrigin"
  ]);
  return /* @__PURE__ */ jsx("img", __spreadProps(__spreadValues({}, rest), {
    crossOrigin
  }));
};
const QUERY = "(prefers-reduced-motion: no-preference)";
const getInitialState = () => {
  var _a, _b;
  return !((_b = (_a = window.matchMedia) == null ? void 0 : _a.call(window, QUERY)) == null ? void 0 : _b.matches);
};
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React$2.useState(getInitialState);
  React$2.useEffect(() => {
    var _a;
    const mediaQueryList = (_a = window.matchMedia) == null ? void 0 : _a.call(window, QUERY);
    const listener = (event) => {
      setPrefersReducedMotion(!event.matches);
    };
    if (mediaQueryList && typeof mediaQueryList.addEventListener === "function") {
      mediaQueryList == null ? void 0 : mediaQueryList.addEventListener("change", listener);
      return () => {
        mediaQueryList == null ? void 0 : mediaQueryList.removeEventListener("change", listener);
      };
    }
  }, []);
  return prefersReducedMotion;
};
const Hero = ({
  className,
  children,
  videoSrc,
  videoPosterSrc,
  videoType = "video/mp4",
  imageSrc
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  return /* @__PURE__ */ jsxs("div", {
    className: classNames(container$2, className),
    children: [/* @__PURE__ */ jsx("div", {
      className: mediaContainer,
      children: imageSrc && prefersReducedMotion || imageSrc && !videoSrc ? /* @__PURE__ */ jsx(Image, {
        src: imageSrc,
        alt: "hero image",
        className: image
      }) : /* @__PURE__ */ jsx(Fragment, {
        children: /* @__PURE__ */ jsx("video", {
          id: "hero-video",
          loop: true,
          autoPlay: true,
          playsInline: true,
          muted: true,
          "data-wf-ignore": "true",
          preload: "auto",
          poster: videoPosterSrc,
          className: video,
          children: /* @__PURE__ */ jsx("source", {
            src: videoSrc,
            type: videoType
          })
        })
      })
    }), /* @__PURE__ */ jsx("div", {
      className: contentContainer$1,
      children
    })]
  });
};
var designSystem_vanilla$e = "";
var height = "var(--_1pw2rhd0)";
var imageBannerContainer = "_1pw2rhd3";
var imageBannerImage = "_1pw2rhd4";
var mobileHeight = "var(--_1pw2rhd2)";
var tabletHeight = "var(--_1pw2rhd1)";
function getVarName(variable) {
  var matches = variable.match(/^var\((.*)\)$/);
  if (matches) {
    return matches[1];
  }
  return variable;
}
function get(obj, path) {
  var result = obj;
  for (var key of path) {
    if (!(key in result)) {
      throw new Error("Path ".concat(path.join(" -> "), " does not exist in object"));
    }
    result = result[key];
  }
  return result;
}
function walkObject(obj, fn) {
  var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  var clone2 = obj.constructor();
  for (var key in obj) {
    var _value = obj[key];
    var currentPath = [...path, key];
    if (typeof _value === "string" || typeof _value === "number" || _value == null) {
      clone2[key] = fn(_value, currentPath);
    } else if (typeof _value === "object" && !Array.isArray(_value)) {
      clone2[key] = walkObject(_value, fn, currentPath);
    } else {
      console.warn('Skipping invalid key "'.concat(currentPath.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(_value) ? "Array" : typeof _value, '"'));
    }
  }
  return clone2;
}
function assignInlineVars(varsOrContract, tokens) {
  var styles = {};
  if (typeof tokens === "object") {
    var _contract = varsOrContract;
    walkObject(tokens, (value, path) => {
      var varName2 = get(_contract, path);
      styles[getVarName(varName2)] = String(value);
    });
  } else {
    var _vars = varsOrContract;
    for (var varName in _vars) {
      styles[getVarName(varName)] = _vars[varName];
    }
  }
  Object.defineProperty(styles, "toString", {
    value: function value() {
      return Object.keys(this).map((key) => "".concat(key, ":").concat(this[key])).join(";");
    },
    writable: false
  });
  return styles;
}
const ImageBanner = ({
  height: height$1 = "100%",
  tabletHeight: tabletHeight$1 = height$1,
  mobileHeight: mobileHeight$1 = height$1,
  src,
  alt,
  children
}) => {
  return /* @__PURE__ */ jsxs("div", {
    style: assignInlineVars({
      [height]: height$1,
      [tabletHeight]: tabletHeight$1,
      [mobileHeight]: mobileHeight$1
    }),
    className: imageBannerContainer,
    children: [/* @__PURE__ */ jsx("img", {
      src,
      alt,
      className: imageBannerImage
    }), children]
  });
};
var designSystem_vanilla$d = "";
var blurredBox = "_1yjoso50";
const ImageBannerWithBlurredBox = ({
  src,
  alt,
  height: height2,
  tabletHeight: tabletHeight2,
  mobileHeight: mobileHeight2,
  blurredBoxClassName,
  children
}) => {
  return /* @__PURE__ */ jsx(ImageBanner, {
    src,
    alt,
    height: height2,
    tabletHeight: tabletHeight2,
    mobileHeight: mobileHeight2,
    children: /* @__PURE__ */ jsx(BlurredBox, {
      className: classNames(blurredBox, blurredBoxClassName),
      children
    })
  });
};
var designSystem_vanilla$c = "";
var inputField = "b1n67y0";
var inputFieldError = "b1n67y1";
const InputField = (_g) => {
  var _h = _g, {
    hasError = false
  } = _h, inputProps = __objRest(_h, [
    "hasError"
  ]);
  return /* @__PURE__ */ jsx("input", __spreadValues({
    className: classNames(inputField, hasError && inputFieldError)
  }, inputProps));
};
var designSystem_vanilla$b = "";
var container$1 = "_1dsytcd0";
var errorText = "_1dsytcd6";
var icon$1 = "_1dsytcd5";
var innerContainer$1 = "_1dsytcd1";
var input = { "default": "_1dsytcd9", withIcon: "_1dsytcdd _1dsytcd9" };
var inputBorder = { "default": "_1dsytcda", error: "_1dsytcdb" };
var label$2 = { primary: "_1dsytcd3 _1dsytcd2", error: "_1dsytcd4 _1dsytcd2" };
var text$1 = { muted: "_1dsytcd7", "default": "_1dsytcd8" };
const InputFieldSmall = (_i) => {
  var _j = _i, {
    icon: icon2,
    label: label2,
    errorMessage: errorMessage2,
    showErrorOutline,
    className,
    maxLength,
    dataTestId,
    inputId,
    autoComplete,
    onChange,
    textType = "default"
  } = _j, inputProps = __objRest(_j, [
    "icon",
    "label",
    "errorMessage",
    "showErrorOutline",
    "className",
    "maxLength",
    "dataTestId",
    "inputId",
    "autoComplete",
    "onChange",
    "textType"
  ]);
  const [characterCount, setCharacterCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", {
    className: container$1,
    children: [label2 && /* @__PURE__ */ jsx("label", {
      className: characterCount === 0 && (errorMessage2 || showErrorOutline) ? label$2["error"] : label$2["primary"],
      htmlFor: inputId,
      children: label2
    }), /* @__PURE__ */ jsxs("div", {
      className: innerContainer$1,
      children: [icon2 && /* @__PURE__ */ jsx("div", {
        className: icon$1,
        children: icon2
      }), /* @__PURE__ */ jsx("input", __spreadValues({
        "data-testid": dataTestId,
        className: classNames(className, icon2 ? input["withIcon"] : input["default"], characterCount === 0 && (errorMessage2 || showErrorOutline) ? inputBorder["error"] : inputBorder["default"], text$1[textType]),
        id: inputId,
        maxLength,
        autoComplete,
        "data-lpignore": "true",
        onChange: (e) => {
          onChange(e);
          setCharacterCount(e.target.value.length);
        }
      }, inputProps))]
    }), characterCount === 0 && (errorMessage2 || showErrorOutline) && /* @__PURE__ */ jsx("div", {
      className: errorText,
      children: errorMessage2
    })]
  });
};
var designSystem_vanilla$a = "";
var base = "_1rvail30";
var icon = "_1rvail35";
var variant = { grey: "_1rvail31", green: "_1rvail32", yellow: "_1rvail33", red: "_1rvail34" };
function Label({
  children,
  dataTestId,
  showLock = false,
  variant: variant$1 = "grey"
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: classNames(base, variant[variant$1]),
    "data-testid": dataTestId,
    children: [showLock && /* @__PURE__ */ jsx(LockIcon, {
      height: 12,
      width: 12,
      className: icon,
      fill: "currentColor"
    }), children]
  });
}
var designSystem_vanilla$9 = "";
var container = "s0vr8l0";
var inputContainer = "s0vr8l1";
var inputVariant = { "default": "s0vr8l3 s0vr8l2", error: "s0vr8l4 s0vr8l2" };
var messageVariant = { error: "s0vr8lg s0vr8lf", info: "s0vr8lh s0vr8lf" };
var placeholderActiveFocusedVariant = { "default": "s0vr8lb", error: "s0vr8lc" };
var placeholderActiveVariant = { "default": "s0vr8l9 s0vr8l8", error: "s0vr8la s0vr8l8" };
var placeholderVariant = { "default": "s0vr8l5", error: "s0vr8l7 s0vr8l5" };
var showPasswordIcon = "s0vr8le";
var showPasswordIconContainer = "s0vr8ld";
var dist = {};
var Linkify$1 = {};
var defaultComponentDecorator = {};
Object.defineProperty(defaultComponentDecorator, "__esModule", {
  value: true
});
var _react$1 = React$2;
var React$1 = _interopRequireWildcard$1(_react$1);
function _interopRequireWildcard$1(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
defaultComponentDecorator.default = function(decoratedHref, decoratedText, key) {
  return React$1.createElement("a", { href: decoratedHref, key }, decoratedText);
};
var defaultHrefDecorator = {};
Object.defineProperty(defaultHrefDecorator, "__esModule", {
  value: true
});
defaultHrefDecorator.default = function(href) {
  return href;
};
var defaultMatchDecorator = {};
var regex$3 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var regex$2 = /[\0-\x1F\x7F-\x9F]/;
var regex$1 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
var regex = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
var re = function(opts) {
  var re2 = {};
  re2.src_Any = regex$3.source;
  re2.src_Cc = regex$2.source;
  re2.src_Z = regex$1.source;
  re2.src_P = regex.source;
  re2.src_ZPCc = [re2.src_Z, re2.src_P, re2.src_Cc].join("|");
  re2.src_ZCc = [re2.src_Z, re2.src_Cc].join("|");
  var text_separators = "[><\uFF5C]";
  re2.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re2.src_ZPCc + ")" + re2.src_Any + ")";
  re2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  re2.src_auth = "(?:(?:(?!" + re2.src_ZCc + "|[@/\\[\\]()]).)+@)?";
  re2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
  re2.src_host_terminator = "(?=$|" + text_separators + "|" + re2.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + re2.src_ZPCc + "))";
  re2.src_path = "(?:[/?#](?:(?!" + re2.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!` + re2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re2.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re2.src_ZCc + "|[']).)+\\'|\\'(?=" + re2.src_pseudo_letter + "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" + re2.src_ZCc + "|[.]).|" + (opts && opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + re2.src_ZCc + ").|\\!(?!" + re2.src_ZCc + "|[!]).|\\?(?!" + re2.src_ZCc + "|[?]).)+|\\/)?";
  re2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
  re2.src_xn = "xn--[a-z0-9\\-]{1,59}";
  re2.src_domain_root = "(?:" + re2.src_xn + "|" + re2.src_pseudo_letter + "{1,63})";
  re2.src_domain = "(?:" + re2.src_xn + "|(?:" + re2.src_pseudo_letter + ")|(?:" + re2.src_pseudo_letter + "(?:-|" + re2.src_pseudo_letter + "){0,61}" + re2.src_pseudo_letter + "))";
  re2.src_host = "(?:(?:(?:(?:" + re2.src_domain + ")\\.)*" + re2.src_domain + "))";
  re2.tpl_host_fuzzy = "(?:" + re2.src_ip4 + "|(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%)))";
  re2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re2.src_domain + ")\\.)+(?:%TLDS%))";
  re2.src_host_strict = re2.src_host + re2.src_host_terminator;
  re2.tpl_host_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_host_terminator;
  re2.src_host_port_strict = re2.src_host + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_port_fuzzy_strict = re2.tpl_host_fuzzy + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_port_no_ip_fuzzy_strict = re2.tpl_host_no_ip_fuzzy + re2.src_port + re2.src_host_terminator;
  re2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re2.src_ZPCc + "|>|$))";
  re2.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re2.src_ZCc + ")(" + re2.src_email_name + "@" + re2.tpl_host_fuzzy_strict + ")";
  re2.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re2.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re2.tpl_host_port_fuzzy_strict + re2.src_path + ")";
  re2.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re2.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re2.tpl_host_port_no_ip_fuzzy_strict + re2.src_path + ")";
  return re2;
};
function assign(obj) {
  var sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function(source) {
    if (!source) {
      return;
    }
    Object.keys(source).forEach(function(key) {
      obj[key] = source[key];
    });
  });
  return obj;
}
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function isString(obj) {
  return _class(obj) === "[object String]";
}
function isObject(obj) {
  return _class(obj) === "[object Object]";
}
function isRegExp(obj) {
  return _class(obj) === "[object RegExp]";
}
function isFunction(obj) {
  return _class(obj) === "[object Function]";
}
function escapeRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};
function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function(acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}
var defaultSchemas = {
  "http:": {
    validate: function(text2, pos, self) {
      var tail = text2.slice(pos);
      if (!self.re.http) {
        self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(text2, pos, self) {
      var tail = text2.slice(pos);
      if (!self.re.no_http) {
        self.re.no_http = new RegExp("^" + self.re.src_auth + "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
      }
      if (self.re.no_http.test(tail)) {
        if (pos >= 3 && text2[pos - 3] === ":") {
          return 0;
        }
        if (pos >= 3 && text2[pos - 3] === "/") {
          return 0;
        }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  "mailto:": {
    validate: function(text2, pos, self) {
      var tail = text2.slice(pos);
      if (!self.re.mailto) {
        self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};
var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__ = "";
}
function createValidator(re2) {
  return function(text2, pos) {
    var tail = text2.slice(pos);
    if (re2.test(tail)) {
      return tail.match(re2)[0].length;
    }
    return 0;
  };
}
function createNormalizer() {
  return function(match2, self) {
    self.normalize(match2);
  };
}
function compile(self) {
  var re$1 = self.re = re(self.__opts__);
  var tlds2 = self.__tlds__.slice();
  self.onCompile();
  if (!self.__tlds_replaced__) {
    tlds2.push(tlds_2ch_src_re);
  }
  tlds2.push(re$1.src_xn);
  re$1.src_tlds = tlds2.join("|");
  function untpl(tpl) {
    return tpl.replace("%TLDS%", re$1.src_tlds);
  }
  re$1.email_fuzzy = RegExp(untpl(re$1.tpl_email_fuzzy), "i");
  re$1.link_fuzzy = RegExp(untpl(re$1.tpl_link_fuzzy), "i");
  re$1.link_no_ip_fuzzy = RegExp(untpl(re$1.tpl_link_no_ip_fuzzy), "i");
  re$1.host_fuzzy_test = RegExp(untpl(re$1.tpl_host_fuzzy_test), "i");
  var aliases = [];
  self.__compiled__ = {};
  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }
  Object.keys(self.__schemas__).forEach(function(name) {
    var val = self.__schemas__[name];
    if (val === null) {
      return;
    }
    var compiled = { validate: null, link: null };
    self.__compiled__[name] = compiled;
    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }
      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }
      return;
    }
    if (isString(val)) {
      aliases.push(name);
      return;
    }
    schemaError(name, val);
  });
  aliases.forEach(function(alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      return;
    }
    self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
  });
  self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
  var slist = Object.keys(self.__compiled__).filter(function(name) {
    return name.length > 0 && self.__compiled__[name];
  }).map(escapeRE).join("|");
  self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re$1.src_ZPCc + "))(" + slist + ")", "i");
  self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re$1.src_ZPCc + "))(" + slist + ")", "ig");
  self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
  resetScanCache(self);
}
function Match(self, shift) {
  var start = self.__index__, end = self.__last_index__, text2 = self.__text_cache__.slice(start, end);
  this.schema = self.__schema__.toLowerCase();
  this.index = start + shift;
  this.lastIndex = end + shift;
  this.raw = text2;
  this.text = text2;
  this.url = text2;
}
function createMatch(self, shift) {
  var match2 = new Match(self, shift);
  self.__compiled__[match2.schema].normalize(match2, self);
  return match2;
}
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }
  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }
  this.__opts__ = assign({}, defaultOptions, options);
  this.__index__ = -1;
  this.__last_index__ = -1;
  this.__schema__ = "";
  this.__text_cache__ = "";
  this.__schemas__ = assign({}, defaultSchemas, schemas);
  this.__compiled__ = {};
  this.__tlds__ = tlds_default;
  this.__tlds_replaced__ = false;
  this.re = {};
  compile(this);
}
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};
LinkifyIt.prototype.test = function test(text2) {
  this.__text_cache__ = text2;
  this.__index__ = -1;
  if (!text2.length) {
    return false;
  }
  var m2, ml, me, len, shift, next, re2, tld_pos, at_pos;
  if (this.re.schema_test.test(text2)) {
    re2 = this.re.schema_search;
    re2.lastIndex = 0;
    while ((m2 = re2.exec(text2)) !== null) {
      len = this.testSchemaAt(text2, m2[2], re2.lastIndex);
      if (len) {
        this.__schema__ = m2[2];
        this.__index__ = m2.index + m2[1].length;
        this.__last_index__ = m2.index + m2[0].length + len;
        break;
      }
    }
  }
  if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
    tld_pos = text2.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
          shift = ml.index + ml[1].length;
          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__ = "";
            this.__index__ = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }
  if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
    at_pos = text2.indexOf("@");
    if (at_pos >= 0) {
      if ((me = text2.match(this.re.email_fuzzy)) !== null) {
        shift = me.index + me[1].length;
        next = me.index + me[0].length;
        if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
          this.__schema__ = "mailto:";
          this.__index__ = shift;
          this.__last_index__ = next;
        }
      }
    }
  }
  return this.__index__ >= 0;
};
LinkifyIt.prototype.pretest = function pretest(text2) {
  return this.re.pretest.test(text2);
};
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text2, schema, pos) {
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text2, pos, this);
};
LinkifyIt.prototype.match = function match(text2) {
  var shift = 0, result = [];
  if (this.__index__ >= 0 && this.__text_cache__ === text2) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }
  var tail = shift ? text2.slice(shift) : text2;
  while (this.test(tail)) {
    result.push(createMatch(this, shift));
    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }
  if (result.length) {
    return result;
  }
  return null;
};
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [list];
  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }
  this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
    return el !== arr[idx - 1];
  }).reverse();
  compile(this);
  return this;
};
LinkifyIt.prototype.normalize = function normalize(match2) {
  if (!match2.schema) {
    match2.url = "http://" + match2.url;
  }
  if (match2.schema === "mailto:" && !/^mailto:/i.test(match2.url)) {
    match2.url = "mailto:" + match2.url;
  }
};
LinkifyIt.prototype.onCompile = function onCompile() {
};
var linkifyIt = LinkifyIt;
var require$$1 = [
  "aaa",
  "aarp",
  "abarth",
  "abb",
  "abbott",
  "abbvie",
  "abc",
  "able",
  "abogado",
  "abudhabi",
  "ac",
  "academy",
  "accenture",
  "accountant",
  "accountants",
  "aco",
  "actor",
  "ad",
  "adac",
  "ads",
  "adult",
  "ae",
  "aeg",
  "aero",
  "aetna",
  "af",
  "afl",
  "africa",
  "ag",
  "agakhan",
  "agency",
  "ai",
  "aig",
  "airbus",
  "airforce",
  "airtel",
  "akdn",
  "al",
  "alfaromeo",
  "alibaba",
  "alipay",
  "allfinanz",
  "allstate",
  "ally",
  "alsace",
  "alstom",
  "am",
  "amazon",
  "americanexpress",
  "americanfamily",
  "amex",
  "amfam",
  "amica",
  "amsterdam",
  "analytics",
  "android",
  "anquan",
  "anz",
  "ao",
  "aol",
  "apartments",
  "app",
  "apple",
  "aq",
  "aquarelle",
  "ar",
  "arab",
  "aramco",
  "archi",
  "army",
  "arpa",
  "art",
  "arte",
  "as",
  "asda",
  "asia",
  "associates",
  "at",
  "athleta",
  "attorney",
  "au",
  "auction",
  "audi",
  "audible",
  "audio",
  "auspost",
  "author",
  "auto",
  "autos",
  "avianca",
  "aw",
  "aws",
  "ax",
  "axa",
  "az",
  "azure",
  "ba",
  "baby",
  "baidu",
  "banamex",
  "bananarepublic",
  "band",
  "bank",
  "bar",
  "barcelona",
  "barclaycard",
  "barclays",
  "barefoot",
  "bargains",
  "baseball",
  "basketball",
  "bauhaus",
  "bayern",
  "bb",
  "bbc",
  "bbt",
  "bbva",
  "bcg",
  "bcn",
  "bd",
  "be",
  "beats",
  "beauty",
  "beer",
  "bentley",
  "berlin",
  "best",
  "bestbuy",
  "bet",
  "bf",
  "bg",
  "bh",
  "bharti",
  "bi",
  "bible",
  "bid",
  "bike",
  "bing",
  "bingo",
  "bio",
  "biz",
  "bj",
  "black",
  "blackfriday",
  "blockbuster",
  "blog",
  "bloomberg",
  "blue",
  "bm",
  "bms",
  "bmw",
  "bn",
  "bnpparibas",
  "bo",
  "boats",
  "boehringer",
  "bofa",
  "bom",
  "bond",
  "boo",
  "book",
  "booking",
  "bosch",
  "bostik",
  "boston",
  "bot",
  "boutique",
  "box",
  "br",
  "bradesco",
  "bridgestone",
  "broadway",
  "broker",
  "brother",
  "brussels",
  "bs",
  "bt",
  "bugatti",
  "build",
  "builders",
  "business",
  "buy",
  "buzz",
  "bv",
  "bw",
  "by",
  "bz",
  "bzh",
  "ca",
  "cab",
  "cafe",
  "cal",
  "call",
  "calvinklein",
  "cam",
  "camera",
  "camp",
  "cancerresearch",
  "canon",
  "capetown",
  "capital",
  "capitalone",
  "car",
  "caravan",
  "cards",
  "care",
  "career",
  "careers",
  "cars",
  "casa",
  "case",
  "cash",
  "casino",
  "cat",
  "catering",
  "catholic",
  "cba",
  "cbn",
  "cbre",
  "cbs",
  "cc",
  "cd",
  "center",
  "ceo",
  "cern",
  "cf",
  "cfa",
  "cfd",
  "cg",
  "ch",
  "chanel",
  "channel",
  "charity",
  "chase",
  "chat",
  "cheap",
  "chintai",
  "christmas",
  "chrome",
  "church",
  "ci",
  "cipriani",
  "circle",
  "cisco",
  "citadel",
  "citi",
  "citic",
  "city",
  "cityeats",
  "ck",
  "cl",
  "claims",
  "cleaning",
  "click",
  "clinic",
  "clinique",
  "clothing",
  "cloud",
  "club",
  "clubmed",
  "cm",
  "cn",
  "co",
  "coach",
  "codes",
  "coffee",
  "college",
  "cologne",
  "com",
  "comcast",
  "commbank",
  "community",
  "company",
  "compare",
  "computer",
  "comsec",
  "condos",
  "construction",
  "consulting",
  "contact",
  "contractors",
  "cooking",
  "cookingchannel",
  "cool",
  "coop",
  "corsica",
  "country",
  "coupon",
  "coupons",
  "courses",
  "cpa",
  "cr",
  "credit",
  "creditcard",
  "creditunion",
  "cricket",
  "crown",
  "crs",
  "cruise",
  "cruises",
  "cu",
  "cuisinella",
  "cv",
  "cw",
  "cx",
  "cy",
  "cymru",
  "cyou",
  "cz",
  "dabur",
  "dad",
  "dance",
  "data",
  "date",
  "dating",
  "datsun",
  "day",
  "dclk",
  "dds",
  "de",
  "deal",
  "dealer",
  "deals",
  "degree",
  "delivery",
  "dell",
  "deloitte",
  "delta",
  "democrat",
  "dental",
  "dentist",
  "desi",
  "design",
  "dev",
  "dhl",
  "diamonds",
  "diet",
  "digital",
  "direct",
  "directory",
  "discount",
  "discover",
  "dish",
  "diy",
  "dj",
  "dk",
  "dm",
  "dnp",
  "do",
  "docs",
  "doctor",
  "dog",
  "domains",
  "dot",
  "download",
  "drive",
  "dtv",
  "dubai",
  "dunlop",
  "dupont",
  "durban",
  "dvag",
  "dvr",
  "dz",
  "earth",
  "eat",
  "ec",
  "eco",
  "edeka",
  "edu",
  "education",
  "ee",
  "eg",
  "email",
  "emerck",
  "energy",
  "engineer",
  "engineering",
  "enterprises",
  "epson",
  "equipment",
  "er",
  "ericsson",
  "erni",
  "es",
  "esq",
  "estate",
  "et",
  "etisalat",
  "eu",
  "eurovision",
  "eus",
  "events",
  "exchange",
  "expert",
  "exposed",
  "express",
  "extraspace",
  "fage",
  "fail",
  "fairwinds",
  "faith",
  "family",
  "fan",
  "fans",
  "farm",
  "farmers",
  "fashion",
  "fast",
  "fedex",
  "feedback",
  "ferrari",
  "ferrero",
  "fi",
  "fiat",
  "fidelity",
  "fido",
  "film",
  "final",
  "finance",
  "financial",
  "fire",
  "firestone",
  "firmdale",
  "fish",
  "fishing",
  "fit",
  "fitness",
  "fj",
  "fk",
  "flickr",
  "flights",
  "flir",
  "florist",
  "flowers",
  "fly",
  "fm",
  "fo",
  "foo",
  "food",
  "foodnetwork",
  "football",
  "ford",
  "forex",
  "forsale",
  "forum",
  "foundation",
  "fox",
  "fr",
  "free",
  "fresenius",
  "frl",
  "frogans",
  "frontdoor",
  "frontier",
  "ftr",
  "fujitsu",
  "fun",
  "fund",
  "furniture",
  "futbol",
  "fyi",
  "ga",
  "gal",
  "gallery",
  "gallo",
  "gallup",
  "game",
  "games",
  "gap",
  "garden",
  "gay",
  "gb",
  "gbiz",
  "gd",
  "gdn",
  "ge",
  "gea",
  "gent",
  "genting",
  "george",
  "gf",
  "gg",
  "ggee",
  "gh",
  "gi",
  "gift",
  "gifts",
  "gives",
  "giving",
  "gl",
  "glass",
  "gle",
  "global",
  "globo",
  "gm",
  "gmail",
  "gmbh",
  "gmo",
  "gmx",
  "gn",
  "godaddy",
  "gold",
  "goldpoint",
  "golf",
  "goo",
  "goodyear",
  "goog",
  "google",
  "gop",
  "got",
  "gov",
  "gp",
  "gq",
  "gr",
  "grainger",
  "graphics",
  "gratis",
  "green",
  "gripe",
  "grocery",
  "group",
  "gs",
  "gt",
  "gu",
  "guardian",
  "gucci",
  "guge",
  "guide",
  "guitars",
  "guru",
  "gw",
  "gy",
  "hair",
  "hamburg",
  "hangout",
  "haus",
  "hbo",
  "hdfc",
  "hdfcbank",
  "health",
  "healthcare",
  "help",
  "helsinki",
  "here",
  "hermes",
  "hgtv",
  "hiphop",
  "hisamitsu",
  "hitachi",
  "hiv",
  "hk",
  "hkt",
  "hm",
  "hn",
  "hockey",
  "holdings",
  "holiday",
  "homedepot",
  "homegoods",
  "homes",
  "homesense",
  "honda",
  "horse",
  "hospital",
  "host",
  "hosting",
  "hot",
  "hoteles",
  "hotels",
  "hotmail",
  "house",
  "how",
  "hr",
  "hsbc",
  "ht",
  "hu",
  "hughes",
  "hyatt",
  "hyundai",
  "ibm",
  "icbc",
  "ice",
  "icu",
  "id",
  "ie",
  "ieee",
  "ifm",
  "ikano",
  "il",
  "im",
  "imamat",
  "imdb",
  "immo",
  "immobilien",
  "in",
  "inc",
  "industries",
  "infiniti",
  "info",
  "ing",
  "ink",
  "institute",
  "insurance",
  "insure",
  "int",
  "international",
  "intuit",
  "investments",
  "io",
  "ipiranga",
  "iq",
  "ir",
  "irish",
  "is",
  "ismaili",
  "ist",
  "istanbul",
  "it",
  "itau",
  "itv",
  "jaguar",
  "java",
  "jcb",
  "je",
  "jeep",
  "jetzt",
  "jewelry",
  "jio",
  "jll",
  "jm",
  "jmp",
  "jnj",
  "jo",
  "jobs",
  "joburg",
  "jot",
  "joy",
  "jp",
  "jpmorgan",
  "jprs",
  "juegos",
  "juniper",
  "kaufen",
  "kddi",
  "ke",
  "kerryhotels",
  "kerrylogistics",
  "kerryproperties",
  "kfh",
  "kg",
  "kh",
  "ki",
  "kia",
  "kids",
  "kim",
  "kinder",
  "kindle",
  "kitchen",
  "kiwi",
  "km",
  "kn",
  "koeln",
  "komatsu",
  "kosher",
  "kp",
  "kpmg",
  "kpn",
  "kr",
  "krd",
  "kred",
  "kuokgroup",
  "kw",
  "ky",
  "kyoto",
  "kz",
  "la",
  "lacaixa",
  "lamborghini",
  "lamer",
  "lancaster",
  "lancia",
  "land",
  "landrover",
  "lanxess",
  "lasalle",
  "lat",
  "latino",
  "latrobe",
  "law",
  "lawyer",
  "lb",
  "lc",
  "lds",
  "lease",
  "leclerc",
  "lefrak",
  "legal",
  "lego",
  "lexus",
  "lgbt",
  "li",
  "lidl",
  "life",
  "lifeinsurance",
  "lifestyle",
  "lighting",
  "like",
  "lilly",
  "limited",
  "limo",
  "lincoln",
  "linde",
  "link",
  "lipsy",
  "live",
  "living",
  "lk",
  "llc",
  "llp",
  "loan",
  "loans",
  "locker",
  "locus",
  "loft",
  "lol",
  "london",
  "lotte",
  "lotto",
  "love",
  "lpl",
  "lplfinancial",
  "lr",
  "ls",
  "lt",
  "ltd",
  "ltda",
  "lu",
  "lundbeck",
  "luxe",
  "luxury",
  "lv",
  "ly",
  "ma",
  "macys",
  "madrid",
  "maif",
  "maison",
  "makeup",
  "man",
  "management",
  "mango",
  "map",
  "market",
  "marketing",
  "markets",
  "marriott",
  "marshalls",
  "maserati",
  "mattel",
  "mba",
  "mc",
  "mckinsey",
  "md",
  "me",
  "med",
  "media",
  "meet",
  "melbourne",
  "meme",
  "memorial",
  "men",
  "menu",
  "merckmsd",
  "mg",
  "mh",
  "miami",
  "microsoft",
  "mil",
  "mini",
  "mint",
  "mit",
  "mitsubishi",
  "mk",
  "ml",
  "mlb",
  "mls",
  "mm",
  "mma",
  "mn",
  "mo",
  "mobi",
  "mobile",
  "moda",
  "moe",
  "moi",
  "mom",
  "monash",
  "money",
  "monster",
  "mormon",
  "mortgage",
  "moscow",
  "moto",
  "motorcycles",
  "mov",
  "movie",
  "mp",
  "mq",
  "mr",
  "ms",
  "msd",
  "mt",
  "mtn",
  "mtr",
  "mu",
  "museum",
  "music",
  "mutual",
  "mv",
  "mw",
  "mx",
  "my",
  "mz",
  "na",
  "nab",
  "nagoya",
  "name",
  "natura",
  "navy",
  "nba",
  "nc",
  "ne",
  "nec",
  "net",
  "netbank",
  "netflix",
  "network",
  "neustar",
  "new",
  "news",
  "next",
  "nextdirect",
  "nexus",
  "nf",
  "nfl",
  "ng",
  "ngo",
  "nhk",
  "ni",
  "nico",
  "nike",
  "nikon",
  "ninja",
  "nissan",
  "nissay",
  "nl",
  "no",
  "nokia",
  "northwesternmutual",
  "norton",
  "now",
  "nowruz",
  "nowtv",
  "np",
  "nr",
  "nra",
  "nrw",
  "ntt",
  "nu",
  "nyc",
  "nz",
  "obi",
  "observer",
  "office",
  "okinawa",
  "olayan",
  "olayangroup",
  "oldnavy",
  "ollo",
  "om",
  "omega",
  "one",
  "ong",
  "onl",
  "online",
  "ooo",
  "open",
  "oracle",
  "orange",
  "org",
  "organic",
  "origins",
  "osaka",
  "otsuka",
  "ott",
  "ovh",
  "pa",
  "page",
  "panasonic",
  "paris",
  "pars",
  "partners",
  "parts",
  "party",
  "passagens",
  "pay",
  "pccw",
  "pe",
  "pet",
  "pf",
  "pfizer",
  "pg",
  "ph",
  "pharmacy",
  "phd",
  "philips",
  "phone",
  "photo",
  "photography",
  "photos",
  "physio",
  "pics",
  "pictet",
  "pictures",
  "pid",
  "pin",
  "ping",
  "pink",
  "pioneer",
  "pizza",
  "pk",
  "pl",
  "place",
  "play",
  "playstation",
  "plumbing",
  "plus",
  "pm",
  "pn",
  "pnc",
  "pohl",
  "poker",
  "politie",
  "porn",
  "post",
  "pr",
  "pramerica",
  "praxi",
  "press",
  "prime",
  "pro",
  "prod",
  "productions",
  "prof",
  "progressive",
  "promo",
  "properties",
  "property",
  "protection",
  "pru",
  "prudential",
  "ps",
  "pt",
  "pub",
  "pw",
  "pwc",
  "py",
  "qa",
  "qpon",
  "quebec",
  "quest",
  "racing",
  "radio",
  "re",
  "read",
  "realestate",
  "realtor",
  "realty",
  "recipes",
  "red",
  "redstone",
  "redumbrella",
  "rehab",
  "reise",
  "reisen",
  "reit",
  "reliance",
  "ren",
  "rent",
  "rentals",
  "repair",
  "report",
  "republican",
  "rest",
  "restaurant",
  "review",
  "reviews",
  "rexroth",
  "rich",
  "richardli",
  "ricoh",
  "ril",
  "rio",
  "rip",
  "ro",
  "rocher",
  "rocks",
  "rodeo",
  "rogers",
  "room",
  "rs",
  "rsvp",
  "ru",
  "rugby",
  "ruhr",
  "run",
  "rw",
  "rwe",
  "ryukyu",
  "sa",
  "saarland",
  "safe",
  "safety",
  "sakura",
  "sale",
  "salon",
  "samsclub",
  "samsung",
  "sandvik",
  "sandvikcoromant",
  "sanofi",
  "sap",
  "sarl",
  "sas",
  "save",
  "saxo",
  "sb",
  "sbi",
  "sbs",
  "sc",
  "sca",
  "scb",
  "schaeffler",
  "schmidt",
  "scholarships",
  "school",
  "schule",
  "schwarz",
  "science",
  "scot",
  "sd",
  "se",
  "search",
  "seat",
  "secure",
  "security",
  "seek",
  "select",
  "sener",
  "services",
  "ses",
  "seven",
  "sew",
  "sex",
  "sexy",
  "sfr",
  "sg",
  "sh",
  "shangrila",
  "sharp",
  "shaw",
  "shell",
  "shia",
  "shiksha",
  "shoes",
  "shop",
  "shopping",
  "shouji",
  "show",
  "showtime",
  "si",
  "silk",
  "sina",
  "singles",
  "site",
  "sj",
  "sk",
  "ski",
  "skin",
  "sky",
  "skype",
  "sl",
  "sling",
  "sm",
  "smart",
  "smile",
  "sn",
  "sncf",
  "so",
  "soccer",
  "social",
  "softbank",
  "software",
  "sohu",
  "solar",
  "solutions",
  "song",
  "sony",
  "soy",
  "spa",
  "space",
  "sport",
  "spot",
  "sr",
  "srl",
  "ss",
  "st",
  "stada",
  "staples",
  "star",
  "statebank",
  "statefarm",
  "stc",
  "stcgroup",
  "stockholm",
  "storage",
  "store",
  "stream",
  "studio",
  "study",
  "style",
  "su",
  "sucks",
  "supplies",
  "supply",
  "support",
  "surf",
  "surgery",
  "suzuki",
  "sv",
  "swatch",
  "swiss",
  "sx",
  "sy",
  "sydney",
  "systems",
  "sz",
  "tab",
  "taipei",
  "talk",
  "taobao",
  "target",
  "tatamotors",
  "tatar",
  "tattoo",
  "tax",
  "taxi",
  "tc",
  "tci",
  "td",
  "tdk",
  "team",
  "tech",
  "technology",
  "tel",
  "temasek",
  "tennis",
  "teva",
  "tf",
  "tg",
  "th",
  "thd",
  "theater",
  "theatre",
  "tiaa",
  "tickets",
  "tienda",
  "tiffany",
  "tips",
  "tires",
  "tirol",
  "tj",
  "tjmaxx",
  "tjx",
  "tk",
  "tkmaxx",
  "tl",
  "tm",
  "tmall",
  "tn",
  "to",
  "today",
  "tokyo",
  "tools",
  "top",
  "toray",
  "toshiba",
  "total",
  "tours",
  "town",
  "toyota",
  "toys",
  "tr",
  "trade",
  "trading",
  "training",
  "travel",
  "travelchannel",
  "travelers",
  "travelersinsurance",
  "trust",
  "trv",
  "tt",
  "tube",
  "tui",
  "tunes",
  "tushu",
  "tv",
  "tvs",
  "tw",
  "tz",
  "ua",
  "ubank",
  "ubs",
  "ug",
  "uk",
  "unicom",
  "university",
  "uno",
  "uol",
  "ups",
  "us",
  "uy",
  "uz",
  "va",
  "vacations",
  "vana",
  "vanguard",
  "vc",
  "ve",
  "vegas",
  "ventures",
  "verisign",
  "verm\xF6gensberater",
  "verm\xF6gensberatung",
  "versicherung",
  "vet",
  "vg",
  "vi",
  "viajes",
  "video",
  "vig",
  "viking",
  "villas",
  "vin",
  "vip",
  "virgin",
  "visa",
  "vision",
  "viva",
  "vivo",
  "vlaanderen",
  "vn",
  "vodka",
  "volkswagen",
  "volvo",
  "vote",
  "voting",
  "voto",
  "voyage",
  "vu",
  "vuelos",
  "wales",
  "walmart",
  "walter",
  "wang",
  "wanggou",
  "watch",
  "watches",
  "weather",
  "weatherchannel",
  "webcam",
  "weber",
  "website",
  "wed",
  "wedding",
  "weibo",
  "weir",
  "wf",
  "whoswho",
  "wien",
  "wiki",
  "williamhill",
  "win",
  "windows",
  "wine",
  "winners",
  "wme",
  "wolterskluwer",
  "woodside",
  "work",
  "works",
  "world",
  "wow",
  "ws",
  "wtc",
  "wtf",
  "xbox",
  "xerox",
  "xfinity",
  "xihuan",
  "xin",
  "xxx",
  "xyz",
  "yachts",
  "yahoo",
  "yamaxun",
  "yandex",
  "ye",
  "yodobashi",
  "yoga",
  "yokohama",
  "you",
  "youtube",
  "yt",
  "yun",
  "za",
  "zappos",
  "zara",
  "zero",
  "zip",
  "zm",
  "zone",
  "zuerich",
  "zw",
  "\u03B5\u03BB",
  "\u03B5\u03C5",
  "\u0431\u0433",
  "\u0431\u0435\u043B",
  "\u0434\u0435\u0442\u0438",
  "\u0435\u044E",
  "\u043A\u0430\u0442\u043E\u043B\u0438\u043A",
  "\u043A\u043E\u043C",
  "\u043C\u043A\u0434",
  "\u043C\u043E\u043D",
  "\u043C\u043E\u0441\u043A\u0432\u0430",
  "\u043E\u043D\u043B\u0430\u0439\u043D",
  "\u043E\u0440\u0433",
  "\u0440\u0443\u0441",
  "\u0440\u0444",
  "\u0441\u0430\u0439\u0442",
  "\u0441\u0440\u0431",
  "\u0443\u043A\u0440",
  "\u049B\u0430\u0437",
  "\u0570\u0561\u0575",
  "\u05D9\u05E9\u05E8\u05D0\u05DC",
  "\u05E7\u05D5\u05DD",
  "\u0627\u0628\u0648\u0638\u0628\u064A",
  "\u0627\u062A\u0635\u0627\u0644\u0627\u062A",
  "\u0627\u0631\u0627\u0645\u0643\u0648",
  "\u0627\u0644\u0627\u0631\u062F\u0646",
  "\u0627\u0644\u0628\u062D\u0631\u064A\u0646",
  "\u0627\u0644\u062C\u0632\u0627\u0626\u0631",
  "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
  "\u0627\u0644\u0639\u0644\u064A\u0627\u0646",
  "\u0627\u0644\u0645\u063A\u0631\u0628",
  "\u0627\u0645\u0627\u0631\u0627\u062A",
  "\u0627\u06CC\u0631\u0627\u0646",
  "\u0628\u0627\u0631\u062A",
  "\u0628\u0627\u0632\u0627\u0631",
  "\u0628\u064A\u062A\u0643",
  "\u0628\u06BE\u0627\u0631\u062A",
  "\u062A\u0648\u0646\u0633",
  "\u0633\u0648\u062F\u0627\u0646",
  "\u0633\u0648\u0631\u064A\u0629",
  "\u0634\u0628\u0643\u0629",
  "\u0639\u0631\u0627\u0642",
  "\u0639\u0631\u0628",
  "\u0639\u0645\u0627\u0646",
  "\u0641\u0644\u0633\u0637\u064A\u0646",
  "\u0642\u0637\u0631",
  "\u0643\u0627\u062B\u0648\u0644\u064A\u0643",
  "\u0643\u0648\u0645",
  "\u0645\u0635\u0631",
  "\u0645\u0644\u064A\u0633\u064A\u0627",
  "\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627",
  "\u0645\u0648\u0642\u0639",
  "\u0647\u0645\u0631\u0627\u0647",
  "\u067E\u0627\u06A9\u0633\u062A\u0627\u0646",
  "\u0680\u0627\u0631\u062A",
  "\u0915\u0949\u092E",
  "\u0928\u0947\u091F",
  "\u092D\u093E\u0930\u0924",
  "\u092D\u093E\u0930\u0924\u092E\u094D",
  "\u092D\u093E\u0930\u094B\u0924",
  "\u0938\u0902\u0917\u0920\u0928",
  "\u09AC\u09BE\u0982\u09B2\u09BE",
  "\u09AD\u09BE\u09B0\u09A4",
  "\u09AD\u09BE\u09F0\u09A4",
  "\u0A2D\u0A3E\u0A30\u0A24",
  "\u0AAD\u0ABE\u0AB0\u0AA4",
  "\u0B2D\u0B3E\u0B30\u0B24",
  "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE",
  "\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8",
  "\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD",
  "\u0C2D\u0C3E\u0C30\u0C24\u0C4D",
  "\u0CAD\u0CBE\u0CB0\u0CA4",
  "\u0D2D\u0D3E\u0D30\u0D24\u0D02",
  "\u0DBD\u0D82\u0D9A\u0DCF",
  "\u0E04\u0E2D\u0E21",
  "\u0E44\u0E17\u0E22",
  "\u0EA5\u0EB2\u0EA7",
  "\u10D2\u10D4",
  "\u307F\u3093\u306A",
  "\u30A2\u30DE\u30BE\u30F3",
  "\u30AF\u30E9\u30A6\u30C9",
  "\u30B0\u30FC\u30B0\u30EB",
  "\u30B3\u30E0",
  "\u30B9\u30C8\u30A2",
  "\u30BB\u30FC\u30EB",
  "\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3",
  "\u30DD\u30A4\u30F3\u30C8",
  "\u4E16\u754C",
  "\u4E2D\u4FE1",
  "\u4E2D\u56FD",
  "\u4E2D\u570B",
  "\u4E2D\u6587\u7F51",
  "\u4E9A\u9A6C\u900A",
  "\u4F01\u4E1A",
  "\u4F5B\u5C71",
  "\u4FE1\u606F",
  "\u5065\u5EB7",
  "\u516B\u5366",
  "\u516C\u53F8",
  "\u516C\u76CA",
  "\u53F0\u6E7E",
  "\u53F0\u7063",
  "\u5546\u57CE",
  "\u5546\u5E97",
  "\u5546\u6807",
  "\u5609\u91CC",
  "\u5609\u91CC\u5927\u9152\u5E97",
  "\u5728\u7EBF",
  "\u5927\u62FF",
  "\u5929\u4E3B\u6559",
  "\u5A31\u4E50",
  "\u5BB6\u96FB",
  "\u5E7F\u4E1C",
  "\u5FAE\u535A",
  "\u6148\u5584",
  "\u6211\u7231\u4F60",
  "\u624B\u673A",
  "\u62DB\u8058",
  "\u653F\u52A1",
  "\u653F\u5E9C",
  "\u65B0\u52A0\u5761",
  "\u65B0\u95FB",
  "\u65F6\u5C1A",
  "\u66F8\u7C4D",
  "\u673A\u6784",
  "\u6DE1\u9A6C\u9521",
  "\u6E38\u620F",
  "\u6FB3\u9580",
  "\u70B9\u770B",
  "\u79FB\u52A8",
  "\u7EC4\u7EC7\u673A\u6784",
  "\u7F51\u5740",
  "\u7F51\u5E97",
  "\u7F51\u7AD9",
  "\u7F51\u7EDC",
  "\u8054\u901A",
  "\u8BFA\u57FA\u4E9A",
  "\u8C37\u6B4C",
  "\u8D2D\u7269",
  "\u901A\u8CA9",
  "\u96C6\u56E2",
  "\u96FB\u8A0A\u76C8\u79D1",
  "\u98DE\u5229\u6D66",
  "\u98DF\u54C1",
  "\u9910\u5385",
  "\u9999\u683C\u91CC\u62C9",
  "\u9999\u6E2F",
  "\uB2F7\uB137",
  "\uB2F7\uCEF4",
  "\uC0BC\uC131",
  "\uD55C\uAD6D"
];
Object.defineProperty(defaultMatchDecorator, "__esModule", {
  value: true
});
var _linkifyIt = linkifyIt;
var _linkifyIt2 = _interopRequireDefault$2(_linkifyIt);
var _tlds = require$$1;
var _tlds2 = _interopRequireDefault$2(_tlds);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var linkify = new _linkifyIt2.default();
linkify.tlds(_tlds2.default);
defaultMatchDecorator.default = function(text2) {
  return linkify.match(text2);
};
var defaultTextDecorator = {};
Object.defineProperty(defaultTextDecorator, "__esModule", {
  value: true
});
defaultTextDecorator.default = function(text2) {
  return text2;
};
Object.defineProperty(Linkify$1, "__esModule", {
  value: true
});
var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _react = React$2;
var React = _interopRequireWildcard(_react);
var _defaultComponentDecorator = defaultComponentDecorator;
var _defaultComponentDecorator2 = _interopRequireDefault$1(_defaultComponentDecorator);
var _defaultHrefDecorator = defaultHrefDecorator;
var _defaultHrefDecorator2 = _interopRequireDefault$1(_defaultHrefDecorator);
var _defaultMatchDecorator = defaultMatchDecorator;
var _defaultMatchDecorator2 = _interopRequireDefault$1(_defaultMatchDecorator);
var _defaultTextDecorator = defaultTextDecorator;
var _defaultTextDecorator2 = _interopRequireDefault$1(_defaultTextDecorator);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Linkify = function(_React$Component) {
  _inherits(Linkify2, _React$Component);
  function Linkify2() {
    _classCallCheck(this, Linkify2);
    return _possibleConstructorReturn(this, (Linkify2.__proto__ || Object.getPrototypeOf(Linkify2)).apply(this, arguments));
  }
  _createClass(Linkify2, [{
    key: "parseString",
    value: function parseString(string) {
      var _this2 = this;
      if (string === "") {
        return string;
      }
      var matches = this.props.matchDecorator(string);
      if (!matches) {
        return string;
      }
      var elements = [];
      var lastIndex = 0;
      matches.forEach(function(match2, i) {
        if (match2.index > lastIndex) {
          elements.push(string.substring(lastIndex, match2.index));
        }
        var decoratedHref = _this2.props.hrefDecorator(match2.url);
        var decoratedText = _this2.props.textDecorator(match2.text);
        var decoratedComponent = _this2.props.componentDecorator(decoratedHref, decoratedText, i);
        elements.push(decoratedComponent);
        lastIndex = match2.lastIndex;
      });
      if (string.length > lastIndex) {
        elements.push(string.substring(lastIndex));
      }
      return elements.length === 1 ? elements[0] : elements;
    }
  }, {
    key: "parse",
    value: function parse(children) {
      var _this3 = this;
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (typeof children === "string") {
        return this.parseString(children);
      } else if (React.isValidElement(children) && children.type !== "a" && children.type !== "button") {
        return React.cloneElement(children, { key }, this.parse(children.props.children));
      } else if (Array.isArray(children)) {
        return children.map(function(child, i) {
          return _this3.parse(child, i);
        });
      }
      return children;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, this.parse(this.props.children));
    }
  }]);
  return Linkify2;
}(React.Component);
Linkify.defaultProps = {
  componentDecorator: _defaultComponentDecorator2.default,
  hrefDecorator: _defaultHrefDecorator2.default,
  matchDecorator: _defaultMatchDecorator2.default,
  textDecorator: _defaultTextDecorator2.default
};
Linkify$1.default = Linkify;
Object.defineProperty(dist, "__esModule", {
  value: true
});
var _Linkify = Linkify$1;
var _Linkify2 = _interopRequireDefault(_Linkify);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _default = dist.default = _Linkify2.default;
const SHOW_PASSWORD_ICON_LABEL = "show-password-icon";
const LargeInput = ({
  errorMessage: errorMessage2,
  infoMessage,
  className,
  style,
  type: type2 = "text",
  placeholder,
  value,
  shouldAutoFocus,
  onChange,
  maxLength,
  onKeyDown,
  autoComplete,
  autoFocus,
  testLabel,
  id,
  variant: variant2 = "default"
}) => {
  var _a;
  const [isFocused, setIsFocused] = useState(false);
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  variant2 = errorMessage2 ? "error" : variant2;
  if (type2 === "password") {
    type2 = isShowingPassword ? "text" : "password";
  }
  const inputRef = useRef(null);
  const selectionLocation = ((_a = inputRef.current) == null ? void 0 : _a.selectionStart) || 0;
  useEffect(() => {
    let timeout;
    if (shouldAutoFocus && inputRef && inputRef.current) {
      timeout = setTimeout(() => {
        var _a2;
        (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
      }, 300);
    }
    return () => timeout && clearTimeout(timeout);
  }, [shouldAutoFocus]);
  const focusPasswordInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(selectionLocation, selectionLocation);
    }
  };
  const toggleShowingPassword = () => {
    setIsShowingPassword(!isShowingPassword);
    setTimeout(focusPasswordInput, 0);
  };
  const inputId = id ? id : placeholder.replace(" ", "-");
  return /* @__PURE__ */ jsxs("div", {
    className: classNames(container, className),
    style,
    children: [/* @__PURE__ */ jsx("label", {
      className: classNames(placeholderVariant[variant2], (isFocused || value) && placeholderActiveVariant[variant2], isFocused && placeholderActiveFocusedVariant[variant2]),
      htmlFor: inputId,
      children: placeholder
    }), /* @__PURE__ */ jsxs("div", {
      className: inputContainer,
      children: [/* @__PURE__ */ jsx("input", {
        className: classNames(inputVariant[variant2]),
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false),
        ref: inputRef,
        "data-cy": testLabel,
        "data-testid": testLabel,
        id: inputId,
        autoFocus,
        autoComplete,
        onKeyDown,
        maxLength,
        value,
        onChange,
        type: type2
      }), (type2 === "password" || isShowingPassword) && /* @__PURE__ */ jsx(ClickableContentWrapper, {
        className: showPasswordIconContainer,
        onClick: toggleShowingPassword,
        dataTestId: SHOW_PASSWORD_ICON_LABEL,
        onMouseDown: (e) => e.preventDefault(),
        children: /* @__PURE__ */ jsx("div", {
          className: showPasswordIcon,
          children: isShowingPassword ? /* @__PURE__ */ jsx(EyeClosedIcon, {}) : /* @__PURE__ */ jsx(EyeOpenIcon, {})
        })
      })]
    }), infoMessage && /* @__PURE__ */ jsx("div", {
      className: messageVariant.info,
      children: infoMessage
    }), errorMessage2 && /* @__PURE__ */ jsx("div", {
      className: messageVariant.error,
      children: /* @__PURE__ */ jsx(_default, {
        componentDecorator: (href, text2, key) => /* @__PURE__ */ jsx("a", {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          children: text2
        }, key),
        children: errorMessage2
      })
    })]
  });
};
var designSystem_vanilla$8 = "";
var baseLink = "_3mqqul0";
var linkVariant = { underline: "_3mqqul1", noUnderline: "_3mqqul2" };
function UnstyledLink({
  url,
  external = false,
  children,
  className,
  onClick = () => ({}),
  accessibilityLabel
}) {
  return external ? /* @__PURE__ */ jsx("a", {
    href: url,
    "aria-label": accessibilityLabel,
    rel: "noopener noreferrer",
    target: "_blank",
    className,
    onClick,
    children
  }) : /* @__PURE__ */ jsx("a", {
    "aria-label": accessibilityLabel,
    className,
    onClick,
    children
  });
}
function Link({
  url,
  children,
  underline = false,
  onClick,
  accessibilityLabel,
  external = false,
  className
}) {
  return /* @__PURE__ */ jsx(UnstyledLink, {
    className: classNames([baseLink, underline ? linkVariant["underline"] : linkVariant["noUnderline"], className]),
    onClick,
    external,
    url,
    accessibilityLabel,
    children
  });
}
const LogoLightMode = (props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    viewBox: "128.5 249.15 481.84 105.83"
  }, props), {
    children: [/* @__PURE__ */ jsxs("g", {
      children: [/* @__PURE__ */ jsx("path", {
        d: "M525.61,275.4c5.59,0,9.97-4.26,9.97-9.71c0-5.45-4.39-9.84-9.97-9.84c-5.45,0-9.97,4.39-9.97,9.84   C515.64,271.15,520.16,275.4,525.61,275.4"
      }), /* @__PURE__ */ jsx("path", {
        d: "M292.72,290.34c-15.04-7.1-23.82-10.79-23.82-20.31c0-7.95,8.01-12.07,16.83-12.07c9.65,0,18.8,8.77,23.31,18.37   l12.27-13.61c0,0-13.78-13.57-36.45-13.57c-13.92,0-29.94,9.52-29.94,25.99c0,14.06,4.75,22.44,28.12,32.81   c16.25,7.24,24.45,11.79,24.45,21.87c0,9.8-6.85,15.75-18.67,15.75c-14.26,0-18.43-12.23-22.71-22.4l-16.24,17.42   c7.52,9.41,25.39,14.37,38.28,14.37c24.31,0,35.32-16.48,35.19-31.25C323.21,306.25,311.52,299.15,292.72,290.34"
      }), /* @__PURE__ */ jsx("path", {
        d: "M576.32,282.54c-17.61,0.18-33.23,14.68-33.01,36.41c0.22,22.01,16.13,36.2,33.74,36.02c18.04-0.18,33.51-14.68,33.29-36.7   C610.13,296.55,594.36,282.36,576.32,282.54 M576.69,347.59c-11.5,0.12-15.3-10.64-15.49-28.68c-0.18-18.32,3.54-28.87,15.05-28.99   c10.93-0.11,15.59,10.36,15.77,28.68C592.21,336.64,587.63,347.48,576.69,347.59"
      }), /* @__PURE__ */ jsx("path", {
        d: "M428.99,331.36l0.01-47.4l-20.15,5.6l2.07,5.29c1.55,3.97,2.36,8.18,2.46,12.43l-0.02,0.01v8.05v21.82l0,0.17   c-3.58,3.72-7.39,6.01-12.21,6.01c-7.39-0.43-11.93-5.25-11.93-19.59v-39.08h-40.6v-17.33l-15.04,5.83v11.54h-10.36v8.86h10.36   v0.04v41.2c0,11.79,5,20.17,14.66,20.17c9.15,0,15.16-8.57,16.02-11.62c-10.13,2.66-15.64-3.15-15.64-12.1l0.04-37.65h24.95v21.75   v16.06h0c0,0,0,0.01,0,0.01v0.12c0,13.21,5.54,23.29,20.59,23.29c8.1,0,15.04-4.71,20.17-10.27l0.06-0.01l3.02,8.16h17.67   l-3.22-7.4C429.97,340.91,428.98,336.16,428.99,331.36"
      }), /* @__PURE__ */ jsx("path", {
        d: "M501.57,331.93l0.01-47.96l-0.07,0.03l0.01-33.27l-20.15,5.6l2.07,5.29c1.47,3.77,2.27,7.75,2.43,11.79v11.69   c-4.26-1.7-9.38-2.56-15.06-2.56c-18.04,0-32.81,14.49-32.81,36.64c0,20.88,12.64,35.79,31.25,35.79c8.38,0,14.2-4.83,17.61-8.52   c0.22-0.29,0.47-0.61,0.73-0.93l2.25,7.19h18.42l-2.77-5.15C502.92,342.75,501.57,337.38,501.57,331.93 M485.87,337.28   c0,2.53-1.64,4.78-4.06,5.53c-1.35,0.41-2.71,0.65-4.04,0.65c-14.35,0-23.15-14.06-23.15-29.4c0-15.77,4.55-24.15,15.62-24.15   c7.95,0,15.62,5.82,15.62,12.07V337.28z"
      }), /* @__PURE__ */ jsx("path", {
        d: "M533.68,335.09l-0.05-18.32l0.01-33.15l-20.15,5.6l2.07,5.29c1.66,4.24,2.5,8.76,2.5,13.32l-0.07,27.01   c-0.11,2.78-0.4,5.54-0.88,8.28l-1.68,9.58h20.8l-1.68-9.58C534.09,340.47,533.8,337.79,533.68,335.09"
      })]
    }), /* @__PURE__ */ jsx("polygon", {
      points: "246.83,302.41 246.82,300.38 201.47,293.53 217.99,250.75 216.22,249.74 187.62,285.59 158.82,249.89   157.07,250.91 173.81,293.61 128.5,300.7 128.51,302.73 173.86,309.58 157.34,352.37 159.1,353.38 187.71,317.52 216.5,353.22   218.26,352.2 201.51,309.5 "
    })]
  }));
};
const LogoDarkMode = (props) => {
  return /* @__PURE__ */ jsxs("svg", __spreadProps(__spreadValues({
    width: "378",
    height: "82",
    viewBox: "0 0 378 82",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {
    children: [/* @__PURE__ */ jsx("path", {
      d: "M307.692 20.3392C312.023 20.3392 315.417 17.0385 315.417 12.8156C315.417 8.59283 312.015 5.19135 307.692 5.19135C303.469 5.19135 299.967 8.59283 299.967 12.8156C299.967 17.0462 303.469 20.3392 307.692 20.3392Z",
      fill: "white"
    }), /* @__PURE__ */ jsx("path", {
      d: "M127.242 31.9151C115.589 26.4139 108.786 23.5548 108.786 16.1784C108.786 10.0185 114.992 6.82623 121.826 6.82623C129.303 6.82623 136.393 13.6215 139.887 21.0598L149.394 10.5144C149.394 10.5144 138.717 0 121.152 0C110.366 0 97.9537 7.37637 97.9537 20.1378C97.9537 31.0319 101.634 37.5249 119.742 45.5599C132.333 51.1696 138.686 54.6951 138.686 62.5053C138.686 70.0986 133.379 74.7089 124.22 74.7089C113.171 74.7089 109.94 65.2327 106.624 57.3527L94.0408 70.8502C99.8675 78.1413 113.714 81.9845 123.701 81.9845C142.537 81.9845 151.068 69.2153 150.967 57.7711C150.867 44.2426 141.809 38.7414 127.242 31.9151Z",
      fill: "white"
    }), /* @__PURE__ */ jsx("path", {
      d: "M346.983 25.8715C333.338 26.011 321.236 37.246 321.406 54.083C321.577 71.1369 333.904 82.1317 347.549 81.9923C361.527 81.8528 373.513 70.6178 373.343 53.5561C373.18 36.7268 360.961 25.7321 346.983 25.8715ZM347.27 76.274C338.359 76.367 335.415 68.0299 335.268 54.052C335.128 39.8572 338.011 31.6827 346.929 31.5898C355.398 31.5045 359.009 39.617 359.148 53.8118C359.295 67.7897 355.746 76.1888 347.27 76.274Z",
      fill: "white"
    }), /* @__PURE__ */ jsx("path", {
      d: "M232.828 63.6986L232.836 26.9717L217.223 31.3108L218.827 35.4096C220.028 38.4857 220.655 41.7477 220.733 45.0407L220.717 45.0485V51.2858V68.1926V68.3243C217.943 71.2066 214.991 72.981 211.257 72.981C205.531 72.6478 202.013 68.9132 202.013 57.8021V27.5219H170.555V14.0941L158.902 18.6114V27.5529H150.874V34.4178H158.902V34.4488V66.3717C158.902 75.5069 162.776 82 170.261 82C177.35 82 182.007 75.3597 182.673 72.9965C174.824 75.0575 170.555 70.5558 170.555 63.6211L170.586 34.4488H189.918V51.3013V63.7451V63.7528V63.8458C189.918 74.0812 194.21 81.8915 205.872 81.8915C212.148 81.8915 217.525 78.2421 221.5 73.934L221.546 73.9263L223.886 80.2489H237.578L235.083 74.5152C233.587 71.0982 232.82 67.4177 232.828 63.6986Z",
      fill: "white"
    }), /* @__PURE__ */ jsx("path", {
      d: "M289.065 64.1402L289.073 26.9795L289.018 27.0028L289.026 1.22424L273.413 5.56327L275.017 9.66211C276.156 12.5832 276.776 15.667 276.9 18.7973V27.8551C273.599 26.5379 269.632 25.8715 265.231 25.8715C251.253 25.8715 239.809 37.0988 239.809 54.2612C239.809 70.4396 249.603 81.9923 264.022 81.9923C270.515 81.9923 275.025 78.2499 277.667 75.3907C277.838 75.166 278.031 74.9181 278.233 74.6701L279.976 80.2411H294.248L292.102 76.2508C290.111 72.5239 289.065 68.363 289.065 64.1402ZM276.9 68.2856C276.9 70.2459 275.629 71.9892 273.754 72.5704C272.708 72.888 271.654 73.074 270.624 73.074C259.505 73.074 252.687 62.1799 252.687 50.2941C252.687 38.075 256.212 31.582 264.79 31.582C270.949 31.582 276.892 36.0915 276.892 40.9342V68.2856H276.9Z",
      fill: "white"
    }), /* @__PURE__ */ jsx("path", {
      d: "M313.945 66.5886L313.906 52.3938L313.914 26.7083L298.301 31.0473L299.905 35.1462C301.191 38.4314 301.842 41.9336 301.842 45.4668L301.788 66.3949C301.702 68.549 301.478 70.6875 301.106 72.8105L299.804 80.2334H315.92L314.619 72.8105C314.262 70.7572 314.038 68.6807 313.945 66.5886Z",
      fill: "white"
    }), /* @__PURE__ */ jsx("path", {
      d: "M91.6853 41.2673L91.6776 39.6944L56.5392 34.3868L69.3393 1.23972L67.9679 0.457153L45.8078 28.2347L23.4928 0.573373L22.1368 1.3637L35.1074 34.4488L0 39.9424L0.00774402 41.5153L35.1462 46.8228L22.346 79.9777L23.7097 80.7603L45.8775 52.9749L68.1848 80.6363L69.5485 79.846L56.5701 46.7608L91.6853 41.2673Z",
      fill: "white"
    })]
  }));
};
const sizeValues = {
  large: {
    height: 30,
    width: 138
  },
  medium: {
    height: 22,
    width: 99
  },
  small: {
    height: 11,
    width: 49.5
  }
};
const Logo = ({
  size = "medium",
  theme: theme2 = "light"
}) => {
  if (theme2 === "dark") {
    return /* @__PURE__ */ jsx(LogoDarkMode, __spreadValues({}, sizeValues[size]));
  } else {
    return /* @__PURE__ */ jsx(LogoLightMode, __spreadValues({}, sizeValues[size]));
  }
};
var designSystem_vanilla$7 = "";
var baseRadioButton = "_2cww4l0";
var radioButtonSelected = "_2cww4l3";
var radioButtonVariant = { small: "_2cww4l1", medium: "_2cww4l2" };
var radioButtonWhiteCircle = "_2cww4l4";
const RadioButton = ({
  className,
  onClick,
  isSelected,
  variant: variant2 = "small"
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: classNames(baseRadioButton, radioButtonVariant[variant2], isSelected && radioButtonSelected, className),
    onClick,
    children: /* @__PURE__ */ jsx("div", {
      className: radioButtonWhiteCircle
    })
  });
};
var designSystem_vanilla$6 = "";
var boundingContainer = "_1dmcc2e1";
var hiddenRender = "_1dmcc2e0";
var designSystem_vanilla$5 = "";
var tag = "_36msrc0";
const Tag = forwardRef(({
  children
}, ref) => /* @__PURE__ */ jsx("div", {
  ref,
  className: tag,
  children
}));
Tag.displayName = "Tag";
const RowLimitTags = ({
  tags,
  rowLimit
}) => {
  const [displayedTags, setDisplayedTags] = useState([]);
  const boundingContainerRef = useRef(null);
  const hiddenTagRef = useRef(null);
  const calculateTagDisplay = useCallback((tags2, rowLimit2, boundingContainer2, hiddenTag, tagsCut) => {
    var _a;
    const rows = [];
    let currentRow = [];
    let currentSumWidth = 0;
    const iterTags = tagsCut.length > 0 ? [...tags2.slice(0, tags2.length - tagsCut.length), `+ ${tagsCut.length}`] : tags2;
    for (const [idx, t] of iterTags.entries()) {
      hiddenTag.innerText = t;
      const computedStyle = (_a = document.defaultView) == null ? void 0 : _a.getComputedStyle(hiddenTag);
      const currentTagWidth = hiddenTag.getBoundingClientRect().width + (parseInt((computedStyle == null ? void 0 : computedStyle.marginLeft) || "", 10) || 0) + (parseInt((computedStyle == null ? void 0 : computedStyle.marginRight) || "", 10) || 0) + (parseInt((computedStyle == null ? void 0 : computedStyle.borderLeft) || "", 10) || 0) + (parseInt((computedStyle == null ? void 0 : computedStyle.borderRight) || "", 10) || 0);
      if (currentSumWidth + currentTagWidth < boundingContainer2.getBoundingClientRect().width) {
        currentRow.push(t);
        currentSumWidth += currentTagWidth;
      } else {
        rows.push(currentRow);
        if (rows.length == rowLimit2) {
          let excessTags;
          if (tagsCut.length > 0) {
            iterTags.pop();
            excessTags = [iterTags.pop(), ...tagsCut];
          } else {
            excessTags = iterTags.slice(idx);
          }
          return calculateTagDisplay(tags2, rowLimit2, boundingContainer2, hiddenTag, excessTags);
        }
        currentRow = [t];
        currentSumWidth = currentTagWidth;
      }
    }
    rows.push(currentRow);
    return rows.flat();
  }, []);
  const initCalculation = useCallback(() => {
    if ((boundingContainerRef == null ? void 0 : boundingContainerRef.current) && (hiddenTagRef == null ? void 0 : hiddenTagRef.current)) {
      const finalizedTags = calculateTagDisplay(tags, rowLimit, boundingContainerRef.current, hiddenTagRef.current, []);
      setDisplayedTags(finalizedTags);
    }
  }, [calculateTagDisplay, rowLimit, tags]);
  useEffect(() => {
    initCalculation();
    window.addEventListener("resize", initCalculation);
    return () => {
      window.removeEventListener("resize", initCalculation);
    };
  }, [initCalculation]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: hiddenRender,
      children: /* @__PURE__ */ jsx(Tag, {
        ref: hiddenTagRef
      })
    }), /* @__PURE__ */ jsx("div", {
      ref: boundingContainerRef,
      className: boundingContainer,
      children: displayedTags == null ? void 0 : displayedTags.map((tag2, idx) => /* @__PURE__ */ jsx(Tag, {
        children: tag2
      }, idx))
    })]
  });
};
var designSystem_vanilla$4 = "";
var disclaimer = "_1izhgxd0";
var link = "_1izhgxd1";
const ACCESSIBILITY_LABELS = {
  TERMS: "Studio Terms",
  PRIVACY: "Studio Privacy Policy"
};
const TermsAndPrivacyDisclaimer = ({
  preface = "By continuing, you agree to Studio's"
}) => /* @__PURE__ */ jsxs("div", {
  className: disclaimer,
  children: [preface, " ", /* @__PURE__ */ jsx(Link, {
    url: "https://studio.com/terms",
    className: link,
    accessibilityLabel: ACCESSIBILITY_LABELS.TERMS,
    external: true,
    children: "Terms"
  }), " ", "and", " ", /* @__PURE__ */ jsx(Link, {
    url: "https://studio.com/privacy",
    className: link,
    accessibilityLabel: ACCESSIBILITY_LABELS.PRIVACY,
    external: true,
    children: "Privacy Policy"
  })]
});
var designSystem_vanilla$3 = "";
var characterLimit = { primary: "sb7krr8 sb7krr7", error: "sb7krr9 sb7krr7" };
var errorContainer = "sb7krr1";
var errorMessage = "sb7krr2";
var label$1 = "sb7krr4";
var multiTextContainer = "sb7krr5";
var singleTextContainer = "sb7krr6";
var textArea = "sb7krr0";
var textAreaContainer = "sb7krr3";
const TextArea = (_k) => {
  var _l = _k, {
    className,
    label: label2,
    rows,
    errorMessage: errorMessage$1,
    characterLimit: characterLimit$1,
    onChange
  } = _l, cleanProps = __objRest(_l, [
    "className",
    "label",
    "rows",
    "errorMessage",
    "characterLimit",
    "onChange"
  ]);
  const [characterCount, setCharacterCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", {
    className: textAreaContainer,
    children: [label2 && /* @__PURE__ */ jsx("label", {
      className: label$1,
      children: label2
    }), /* @__PURE__ */ jsx("textarea", __spreadValues({
      className: classNames(textArea, errorMessage$1 && characterCount === 0 && errorContainer, className && className),
      rows: rows || 3,
      onChange: (e) => {
        setCharacterCount(e.target.value.length);
        onChange(e);
      }
    }, cleanProps)), /* @__PURE__ */ jsxs("div", {
      className: errorMessage$1 && characterCount === 0 ? multiTextContainer : singleTextContainer,
      children: [errorMessage$1 && characterCount === 0 && /* @__PURE__ */ jsx("span", {
        className: errorMessage,
        children: errorMessage$1
      }), characterLimit$1 && /* @__PURE__ */ jsxs("div", {
        className: errorMessage$1 && characterCount === 0 ? characterLimit["error"] : characterLimit["primary"],
        children: [characterCount, "/", characterLimit$1]
      })]
    })]
  });
};
var designSystem_vanilla$2 = "";
var backgroundHighlight = "k8ar4p2";
var inheritedText = "k8ar4p1";
var textColorHighlight = "k8ar4p3";
/*! @license DOMPurify 2.3.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.6/LICENSE */
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasOwnProperty = Object.hasOwnProperty, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze, seal = Object.seal, create = Object.create;
var _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
if (!apply) {
  apply = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!freeze) {
  freeze = function freeze2(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal2(x) {
    return x;
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
  };
}
var arrayForEach = unapply(Array.prototype.forEach);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set2, array) {
  if (setPrototypeOf) {
    setPrototypeOf(set2, null);
  }
  var l = array.length;
  while (l--) {
    var element = array[l];
    if (typeof element === "string") {
      var lcElement = stringToLowerCase(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }
        element = lcElement;
      }
    }
    set2[element] = true;
  }
  return set2;
}
function clone(object) {
  var newObject = create(null);
  var property = void 0;
  for (property in object) {
    if (apply(hasOwnProperty, object, [property])) {
      newObject[property] = object[property];
    }
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    var desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue(element) {
    console.warn("fallback value for", element);
    return null;
  }
  return fallbackValue;
}
var html = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var svg = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var mathMl = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var text = freeze(["#text"]);
var html$1 = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
var svg$1 = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var mathMl$1 = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm);
var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var DOCTYPE_NAME = seal(/^html$/i);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
function _toConsumableArray$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, document2) {
  if ((typeof trustedTypes === "undefined" ? "undefined" : _typeof(trustedTypes)) !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  var suffix = null;
  var ATTR_NAME = "data-tt-policy-suffix";
  if (document2.currentScript && document2.currentScript.hasAttribute(ATTR_NAME)) {
    suffix = document2.currentScript.getAttribute(ATTR_NAME);
  }
  var policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML: function createHTML(html$$1) {
        return html$$1;
      }
    });
  } catch (_) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
function createDOMPurify() {
  var window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  var DOMPurify = function DOMPurify2(root) {
    return createDOMPurify(root);
  };
  DOMPurify.version = "2.3.6";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== 9) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  var originalDocument = window2.document;
  var document2 = window2.document;
  var DocumentFragment = window2.DocumentFragment, HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap, NamedNodeMap = _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap, HTMLFormElement = window2.HTMLFormElement, DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
  var ElementPrototype = Element.prototype;
  var cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  var getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  var getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  var getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    var template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
  var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML("") : "";
  var _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
  var importNode = originalDocument.importNode;
  var documentMode = {};
  try {
    documentMode = clone(document2).documentMode ? document2.documentMode : {};
  } catch (_) {
  }
  var hooks = {};
  DOMPurify.isSupported = typeof getParentNode === "function" && implementation && typeof implementation.createHTMLDocument !== "undefined" && documentMode !== 9;
  var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR, ERB_EXPR$$1 = ERB_EXPR, DATA_ATTR$$1 = DATA_ATTR, ARIA_ATTR$$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
  var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;
  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));
  var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  var FORBID_TAGS = null;
  var FORBID_ATTR = null;
  var ALLOW_ARIA_ATTR = true;
  var ALLOW_DATA_ATTR = true;
  var ALLOW_UNKNOWN_PROTOCOLS = false;
  var SAFE_FOR_TEMPLATES = false;
  var WHOLE_DOCUMENT = false;
  var SET_CONFIG = false;
  var FORCE_BODY = false;
  var RETURN_DOM = false;
  var RETURN_DOM_FRAGMENT = false;
  var RETURN_TRUSTED_TYPE = false;
  var SANITIZE_DOM = true;
  var KEEP_CONTENT = true;
  var IN_PLACE = false;
  var USE_PROFILES = {};
  var FORBID_CONTENTS = null;
  var DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  var DATA_URI_TAGS = null;
  var DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  var URI_SAFE_ATTRIBUTES = null;
  var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  var MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  var NAMESPACE = HTML_NAMESPACE;
  var IS_EMPTY_INPUT = false;
  var PARSER_MEDIA_TYPE = void 0;
  var SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  var DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  var transformCaseFunc = void 0;
  var CONFIG = null;
  var formElement = document2.createElement("form");
  var isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  var _parseConfig = function _parseConfig2(cfg) {
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || (typeof cfg === "undefined" ? "undefined" : _typeof(cfg)) !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
    URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
    FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
    USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? function(x) {
      return x;
    } : stringToLowerCase;
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html);
        addToSet(ALLOWED_ATTR, html$1);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl);
        addToSet(ALLOWED_ATTR, mathMl$1);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  var HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
  var ALL_SVG_TAGS = addToSet({}, svg);
  addToSet(ALL_SVG_TAGS, svgFilters);
  addToSet(ALL_SVG_TAGS, svgDisallowed);
  var ALL_MATHML_TAGS = addToSet({}, mathMl);
  addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
  var _checkValidNamespace = function _checkValidNamespace2(element) {
    var parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: HTML_NAMESPACE,
        tagName: "template"
      };
    }
    var tagName = stringToLowerCase(element.tagName);
    var parentTagName = stringToLowerCase(parent.tagName);
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      var commonSvgAndHTMLElements = addToSet({}, ["title", "style", "font", "a", "script"]);
      return !ALL_MATHML_TAGS[tagName] && (commonSvgAndHTMLElements[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    return false;
  };
  var _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, { element: node });
    try {
      node.parentNode.removeChild(node);
    } catch (_) {
      try {
        node.outerHTML = emptyHTML;
      } catch (_2) {
        node.remove();
      }
    }
  };
  var _removeAttribute = function _removeAttribute2(name, node) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: node
      });
    }
    node.removeAttribute(name);
    if (name === "is" && !ALLOWED_ATTR[name]) {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(node);
        } catch (_) {
        }
      } else {
        try {
          node.setAttribute(name, "");
        } catch (_) {
        }
      }
    }
  };
  var _initDocument = function _initDocument2(dirty) {
    var doc = void 0;
    var leadingWhitespace = void 0;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      var matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml") {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? "" : dirtyPayload;
      } catch (_) {
      }
    }
    var body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  var _createIterator = function _createIterator2(root) {
    return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
  };
  var _isClobbered = function _isClobbered2(elm) {
    return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function");
  };
  var _isNode = function _isNode2(object) {
    return (typeof Node === "undefined" ? "undefined" : _typeof(Node)) === "object" ? object instanceof Node : object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
  };
  var _executeHook = function _executeHook2(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }
    arrayForEach(hooks[entryPoint], function(hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };
  var _sanitizeElements = function _sanitizeElements2(currentNode) {
    var content = void 0;
    _executeHook("beforeSanitizeElements", currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if (stringMatch(currentNode.nodeName, /[\u0080-\uFFFF]/)) {
      _forceRemove(currentNode);
      return true;
    }
    var tagName = transformCaseFunc(currentNode.nodeName);
    _executeHook("uponSanitizeElement", currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (!_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (tagName === "select" && regExpTest(/<template/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName))
          return false;
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName))
          return false;
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        var parentNode = getParentNode(currentNode) || currentNode.parentNode;
        var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          var childCount = childNodes.length;
          for (var i = childCount - 1; i >= 0; --i) {
            parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed") && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      content = currentNode.textContent;
      content = stringReplace(content, MUSTACHE_EXPR$$1, " ");
      content = stringReplace(content, ERB_EXPR$$1, " ");
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }
    _executeHook("afterSanitizeElements", currentNode, null);
    return false;
  };
  var _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$$1, lcName))
      ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName))
      ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (_basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)))
        ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName])
      ;
    else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, "")))
      ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
      ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, "")))
      ;
    else if (!value)
      ;
    else {
      return false;
    }
    return true;
  };
  var _basicCustomElementTest = function _basicCustomElementTest2(tagName) {
    return tagName.indexOf("-") > 0;
  };
  var _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    var attr = void 0;
    var value = void 0;
    var lcName = void 0;
    var l = void 0;
    _executeHook("beforeSanitizeAttributes", currentNode, null);
    var attributes = currentNode.attributes;
    if (!attributes) {
      return;
    }
    var hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;
    while (l--) {
      attr = attributes[l];
      var _attr = attr, name = _attr.name, namespaceURI = _attr.namespaceURI;
      value = stringTrim(attr.value);
      lcName = transformCaseFunc(name);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      _removeAttribute(name, currentNode);
      if (!hookEvent.keepAttr) {
        continue;
      }
      if (regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        value = stringReplace(value, MUSTACHE_EXPR$$1, " ");
        value = stringReplace(value, ERB_EXPR$$1, " ");
      }
      var lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          currentNode.setAttribute(name, value);
        }
        arrayPop(DOMPurify.removed);
      } catch (_) {
      }
    }
    _executeHook("afterSanitizeAttributes", currentNode, null);
  };
  var _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    var shadowNode = void 0;
    var shadowIterator = _createIterator(fragment);
    _executeHook("beforeSanitizeShadowDOM", fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHook("uponSanitizeShadowNode", shadowNode, null);
      if (_sanitizeElements(shadowNode)) {
        continue;
      }
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
      _sanitizeAttributes(shadowNode);
    }
    _executeHook("afterSanitizeShadowDOM", fragment, null);
  };
  DOMPurify.sanitize = function(dirty, cfg) {
    var body = void 0;
    var importedNode = void 0;
    var currentNode = void 0;
    var oldNode = void 0;
    var returnNode = void 0;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString !== "function") {
        throw typeErrorCreate("toString is not a function");
      } else {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      }
    }
    if (!DOMPurify.isSupported) {
      if (_typeof(window2.toStaticHTML) === "object" || typeof window2.toStaticHTML === "function") {
        if (typeof dirty === "string") {
          return window2.toStaticHTML(dirty);
        }
        if (_isNode(dirty)) {
          return window2.toStaticHTML(dirty.outerHTML);
        }
      }
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        var tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }
      if (_sanitizeElements(currentNode)) {
        continue;
      }
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
      _sanitizeAttributes(currentNode);
      oldNode = currentNode;
    }
    oldNode = null;
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, " ");
      serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, " ");
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function(cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag2, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    var lcTag = transformCaseFunc(tag2);
    var lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    hooks[entryPoint] = hooks[entryPoint] || [];
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint) {
    if (hooks[entryPoint]) {
      arrayPop(hooks[entryPoint]);
    }
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };
  DOMPurify.removeAllHooks = function() {
    hooks = {};
  };
  return DOMPurify;
}
var purify = createDOMPurify();
const TextWithHighlights = ({
  children,
  className,
  highlightVariant = "background",
  highlightClassName
}) => {
  const childrenArray = Children.toArray(children);
  return /* @__PURE__ */ jsx("div", {
    className,
    children: childrenArray.map((child, index) => {
      if (typeof child === "string") {
        const highlightClasses = classNames({
          [backgroundHighlight]: highlightVariant === "background",
          [textColorHighlight]: highlightVariant === "textColor"
        }, highlightClassName);
        const html2 = child.replace(/\=\=(.*?)\=\=/gm, `<mark class="${inheritedText} ${highlightClasses}">$1</mark>`);
        const sanitized = purify.sanitize(html2);
        return /* @__PURE__ */ jsx("div", {
          className: inheritedText,
          dangerouslySetInnerHTML: {
            __html: sanitized
          }
        }, index);
      } else {
        return /* @__PURE__ */ jsx(React$2.Fragment, {
          children: child
        }, index);
      }
    })
  });
};
var designSystem_vanilla$1 = "";
var attentionContainer = "v4d9mbb";
var contentContainer = "v4d9mb2";
var description = "v4d9mba";
var dotSeparator = "v4d9mbd";
var innerContainer = "v4d9mb1";
var label = "v4d9mb7";
var labelContainer = "v4d9mb6";
var mediaSlot = "v4d9mb3";
var outerContainer = "v4d9mb0";
var reactionIcon = "v4d9mbc";
var reactionsCommentsContainer = "v4d9mbe";
var title = "v4d9mb9";
var titleDescriptionContainer = "v4d9mb8";
var titleLabelContainer = "v4d9mb4";
var type = "v4d9mb5";
var Breakpoint = { Mobile: "400px", Small: "600px", Tablet: "834px", Desktop: "1120px", Large: "1200px" };
const makeCustomBreakpoint = (breakpoint) => (styles) => ({
  [`(max-width: ${breakpoint})`]: __spreadValues({}, styles)
});
const atLargeBreakpoint = (styles) => makeCustomBreakpoint(Breakpoint.Large)(styles);
const atDesktopBreakpoint = (styles) => makeCustomBreakpoint(Breakpoint.Desktop)(styles);
const atTabletBreakpoint = (styles) => makeCustomBreakpoint(Breakpoint.Tablet)(styles);
const atSmallBreakpoint = (styles) => makeCustomBreakpoint(Breakpoint.Small)(styles);
const atMobileBreakpoint = (styles) => makeCustomBreakpoint(Breakpoint.Mobile)(styles);
const pluralize = (num, singular, plural) => num === 1 ? singular : plural;
const TEST_LABELS = {
  TIMELINE_PROJECT_CARD: "timeline_project_card"
};
const TimelineProjectCard = ({
  project: {
    type: type$1,
    label: label$12,
    title: title$1,
    description: description$1
  },
  attention: {
    numReactions,
    numComments
  },
  mediaSlot: mediaSlot$1,
  onClick = () => ({})
}) => {
  const reactionsText = `${numReactions} ${pluralize(numReactions, "reaction", "reactions")}`;
  const commentsText = `${numComments} ${pluralize(numComments, "comment", "comments")}`;
  return /* @__PURE__ */ jsx("div", {
    "data-testid": TEST_LABELS.TIMELINE_PROJECT_CARD,
    className: outerContainer,
    onClick,
    children: /* @__PURE__ */ jsxs("div", {
      className: innerContainer,
      children: [/* @__PURE__ */ jsxs("div", {
        className: contentContainer,
        children: [/* @__PURE__ */ jsxs("div", {
          className: titleLabelContainer,
          children: [/* @__PURE__ */ jsx("div", {
            className: type,
            children: type$1
          }), /* @__PURE__ */ jsx("div", {
            className: labelContainer,
            children: /* @__PURE__ */ jsx("div", {
              className: label,
              title: label$12,
              children: label$12
            })
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: titleDescriptionContainer,
          children: [/* @__PURE__ */ jsx("div", {
            className: title,
            children: title$1
          }), /* @__PURE__ */ jsx("div", {
            className: description,
            children: description$1
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: attentionContainer,
          children: [/* @__PURE__ */ jsx(WowIcon, {
            width: 16,
            height: 16,
            className: reactionIcon
          }), /* @__PURE__ */ jsx(LoveIcon, {
            width: 16,
            height: 16,
            className: reactionIcon
          }), /* @__PURE__ */ jsx(ClapIcon, {
            width: 16,
            height: 16,
            className: reactionIcon
          }), /* @__PURE__ */ jsxs("div", {
            className: reactionsCommentsContainer,
            title: `${reactionsText} \xB7 ${commentsText}`,
            children: [reactionsText, /* @__PURE__ */ jsx("span", {
              className: dotSeparator,
              children: "\xB7"
            }), commentsText]
          })]
        })]
      }), mediaSlot$1 && /* @__PURE__ */ jsx("div", {
        className: mediaSlot,
        children: mediaSlot$1
      })]
    })
  });
};
var designSystem_vanilla = "";
var selectionCard = "_1fz6wtl0";
const SelectionCard = ({
  className,
  children
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: classNames(selectionCard, className),
    children
  });
};
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === "string" && REGEX.test(uuid);
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify(rnds);
}
function isExcludedFromClickOutside(element) {
  if (element.getAttribute && element.getAttribute("data-ignore-click-outside")) {
    return true;
  }
  element.parentNode;
  return !!(element.parentElement && isExcludedFromClickOutside(element.parentElement));
}
const useSavedHandler = (handler) => {
  const savedHandler = useRef();
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  return savedHandler;
};
const useClickOuter = (isActive, onOutsideClick, ...exceptions) => {
  const savedHandler = useSavedHandler(onOutsideClick);
  const element = useRef();
  const ignoredElements = [element, ...exceptions];
  const isInWrapper = (target) => {
    var _a;
    if (isExcludedFromClickOutside(target)) {
      return true;
    }
    for (const ref of ignoredElements) {
      if ((_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.contains(target)) {
        return true;
      }
    }
    return false;
  };
  const handleClick = (e) => {
    const { target } = e;
    if (isActive && !isInWrapper(target) && savedHandler.current) {
      savedHandler.current(e);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isActive]);
  return element;
};
const useClickWhiteSpace = (isActive, onWhiteSpaceClick, customDetector, ...exceptions) => {
  const ref = useClickOuter(isActive, onWhiteSpaceClick, ...exceptions);
  const savedHandler = useSavedHandler(onWhiteSpaceClick);
  const id = useMemo(() => v4(), []);
  const shouldFire = (target) => {
    const customDetected = !!(customDetector && customDetector(target));
    return isActive && (customDetected || target.id === id) && savedHandler.current;
  };
  const internalClick = (e) => {
    const { target } = e;
    if (shouldFire(target)) {
      savedHandler.current && savedHandler.current();
    }
  };
  return { ref, onClick: internalClick, id };
};
const ClickOuterWrapper = (props) => {
  const _a = props, {
    isOpen,
    onOutsideClick,
    exceptions = []
  } = _a, otherProps = __objRest(_a, [
    "isOpen",
    "onOutsideClick",
    "exceptions"
  ]);
  const element = useClickOuter(isOpen, onOutsideClick, ...exceptions);
  return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({
    ref: element
  }, otherProps), {
    children: props.children
  }));
};
const useEventListener = ({
  type: type2,
  handler,
  element = window,
  useCapture = false,
  shouldListen = true
}) => {
  const handlerRef = useRef(null);
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);
  useEffect(() => {
    if (!(element == null ? void 0 : element.addEventListener))
      return;
    const eventListener = (event) => handlerRef.current && handlerRef.current(event);
    if (shouldListen) {
      element.addEventListener(type2, eventListener, useCapture);
    }
    return () => {
      element.removeEventListener(type2, eventListener, useCapture);
    };
  }, [type2, element, handlerRef, useCapture, shouldListen]);
};
const useElementPosition = (element) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const updateRefPosition = useCallback(() => {
    if (element.current) {
      const { x, y } = element.current.getBoundingClientRect();
      setPosition({ x, y });
    }
  }, [element.current]);
  if (!loaded && element.current) {
    updateRefPosition();
    setLoaded(true);
  }
  useEventListener({ type: "resize", handler: updateRefPosition });
  useEventListener({ type: "scroll", handler: updateRefPosition, useCapture: true });
  return position;
};
const useIntersectionObserver = (onObservation, element, options) => {
  const { threshold, root, rootMargin } = options || {};
  const observer = useMemo(() => new IntersectionObserver((entries) => onObservation == null ? void 0 : onObservation(entries), {
    threshold,
    root,
    rootMargin
  }), [onObservation, threshold, root, rootMargin]);
  useEffect(() => {
    if (element) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, [observer, element]);
};
const useIsOnScreen = (_m) => {
  var _n = _m, {
    element,
    minimumIntersectionRatio = 0
  } = _n, options = __objRest(_n, [
    "element",
    "minimumIntersectionRatio"
  ]);
  const [isOnScreen, setIsOnScreen] = useState(true);
  const onObservation = useCallback(([entry]) => setIsOnScreen(entry.intersectionRatio > minimumIntersectionRatio), [minimumIntersectionRatio]);
  useIntersectionObserver(onObservation, element, __spreadValues({
    threshold: minimumIntersectionRatio
  }, options));
  return isOnScreen;
};
const NUM_THRESHOLDS = 200;
const THRESHOLDS = [...Array(NUM_THRESHOLDS).keys()].map((num) => num / NUM_THRESHOLDS);
const useOnScreenRatio = (_o) => {
  var _p = _o, {
    element,
    threshold = THRESHOLDS
  } = _p, options = __objRest(_p, [
    "element",
    "threshold"
  ]);
  const [ratio, setRatio] = useState(0);
  const onObservation = useCallback(([entry]) => setRatio(entry.intersectionRatio), []);
  useIntersectionObserver(onObservation, element, __spreadValues({ threshold }, options));
  return ratio;
};
const useInfiniteScroll = (onVisible, isActive) => {
  const observer = useRef();
  const callback = useCallback((entries) => {
    if (entries.length === 0) {
      return;
    }
    if (entries[0].isIntersecting && isActive) {
      onVisible();
    }
  }, [onVisible, isActive]);
  const infiniteScrollRef = useCallback((node) => {
    var _a;
    if (!node) {
      return;
    }
    (_a = observer.current) == null ? void 0 : _a.disconnect();
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(node);
  }, [callback]);
  useEffect(() => {
    return () => {
      var _a;
      return (_a = observer.current) == null ? void 0 : _a.disconnect();
    };
  }, []);
  return infiniteScrollRef;
};
export { ACCESSIBILITY_LABELS, AboutIcon, AnimatedSpinner, AtMentionsIcon, AttachFileIcon, BackIcon, BellNoNotificationIcon, BellNotificationIcon, BlurredBox, BoldIcon, BreadCrumbs, Breakpoint$1 as Breakpoint, BulletListIcon, Button, CameraIcon, CircleCheckIcon, ClapIcon, ClickOuterWrapper, ClickableContentWrapper, CloseIcon, CodeIcon, CollapseLessonIcon, CollapseListIcon, CompleteCheckIcon, DiamondIcon, DiscussionIcon, DownloadIcon, EmojiPickerIcon, ExpandCardIcon, ExpandIcon, ExpandLessonIcon, ExpandListIcon, EyeClosedIcon, EyeOpenIcon, FacebookIcon, FlagIcon, FlipCameraIcon, FontStyle, FontWeight, Footer, FullscreenExitIcon, FullscreenIcon, Header, HeartEmptyIcon, HeartFilledIcon, Hero, Image, ImageBanner, ImageBannerWithBlurredBox, ImageIcon, ImagesIcon, InputField, InputFieldSmall, InstagramIcon, ItalicsIcon, Label, LargeInput, LightBulbIcon, Link, LinkIcon, LockIcon, Logo, LoveIcon, MessagingIcon, MoreDropdownIcon, MoreIcon, OneHundredIcon, OrderedListIcon, PeersIcon, PitchTrainerIcon, PlusIcon, PostsIcon, QuestionIcon, RadioButton, RecordAudioIcon, RecordVideoIcon, ReplyIcon, RowLimitTags, SHOW_PASSWORD_ICON_LABEL, SaveIcon, SelectionCard, ShareIcon, SidebarIcon, SoundcloudIcon, StudioIcon, TEST_LABELS, Tag, TermsAndPrivacyDisclaimer, TextArea, TextWithHighlights, ThemeContext, ThemeProvider, ThemeType, ThemeWrapper, TimelineProjectCard, TwitterIcon, UnderlineIcon, UnstyledLink, UploadAudioIcon, UploadVideoIcon, WarningIcon, WowIcon, YoutubeIcon, atDesktopBreakpoint, atLargeBreakpoint, atMobileBreakpoint, atSmallBreakpoint, atTabletBreakpoint, darkThemeClass, darkThemeRawValues, lightThemeRawValues, makeCustomBreakpoint, pluralize, theme, themeClass, useClickOuter, useClickWhiteSpace, useElementPosition, useEventListener, useInfiniteScroll, useIsOnScreen, useOnScreenRatio, usePrefersReducedMotion, useTheme };
