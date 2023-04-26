import { globalFontFace } from "@vanilla-extract/css";
import {
  fontFamily,
  fontFamilyMono,
  FontStyle,
  FontWeight,
  displayFontFamily,
} from "./typography.css";

// Maison Neue
// Body (Book)
globalFontFace(fontFamily, {
  src: `url("https://d1b2grdnesao2u.cloudfront.net/fonts/MaisonNeue-Book.woff2") format("woff2"), url("https://d1b2grdnesao2u.cloudfront.net/fonts/MaisonNeue-Book.woff") format("woff")`,
  fontWeight: FontWeight.normal,
  fontStyle: FontStyle.normal,
  fontDisplay: "block",
});

// Body Italic
globalFontFace(fontFamily, {
  src: `url("https://d1b2grdnesao2u.cloudfront.net/fonts/MaisonNeue-BookItalic.woff2") format("woff2"), url("https://d1b2grdnesao2u.cloudfront.net/fonts/MaisonNeue-BookItalic.woff") format("woff")`,
  fontWeight: FontWeight.normal,
  fontStyle: FontStyle.italic,
  fontDisplay: "block",
});

// Headers
globalFontFace(fontFamily, {
  src: `url("https://d1b2grdnesao2u.cloudfront.net/fonts/MaisonNeue-Bold.woff2") format("woff2"), url("https://d1b2grdnesao2u.cloudfront.net/fonts/MaisonNeue-Bold.woff") format("woff")`,
  fontWeight: FontWeight.bold,
  fontStyle: FontStyle.normal,
  fontDisplay: "block",
});

// Body Demi
globalFontFace(fontFamily, {
  src: `url("https://d1b2grdnesao2u.cloudfront.net/fonts/MaisonNeue-Demi.woff2") format("woff2"), url("https://d1b2grdnesao2u.cloudfront.net/fonts/MaisonNeue-Demi.woff") format("woff")`,
  fontWeight: FontWeight.semibold,
  fontStyle: FontStyle.normal,
  fontDisplay: "block",
});

// Label (Mono)
globalFontFace(fontFamilyMono, {
  src: `url("https://d1b2grdnesao2u.cloudfront.net/fonts/MaisonNeue-Mono.woff2") format("woff2"), url("https://d1b2grdnesao2u.cloudfront.net/fonts/MaisonNeue-Mono.woff") format("woff")`,
  fontWeight: FontWeight.normal,
  fontStyle: FontStyle.normal,
  fontDisplay: "block",
});

// Tusker Grotesk
// Display
globalFontFace(displayFontFamily, {
  src: `url("https://d1b2grdnesao2u.cloudfront.net/fonts/TuskerGrotesk-7600Semibold.woff2") format("woff2"), url("https://d1b2grdnesao2u.cloudfront.net/fonts/TuskerGrotesk-7600Semibold.woff") format("woff")`,
  fontWeight: FontWeight.semibold,
  fontStyle: FontStyle.normal,
  fontDisplay: "block",
});

globalFontFace(displayFontFamily, {
  src: `url("https://d1b2grdnesao2u.cloudfront.net/fonts/TuskerGrotesk-7600Semibold.woff2") format("woff2"), url("https://d1b2grdnesao2u.cloudfront.net/fonts/TuskerGrotesk-7600Semibold.woff") format("woff")`,
  fontWeight: FontWeight.normal,
  fontStyle: FontStyle.normal,
  fontDisplay: "block",
});

globalFontFace(displayFontFamily, {
  src: `url("https://d1b2grdnesao2u.cloudfront.net/fonts/TuskerGrotesk-7600Semibold.woff2") format("woff2"), url("https://d1b2grdnesao2u.cloudfront.net/fonts/TuskerGrotesk-7600Semibold.woff") format("woff")`,
  fontWeight: FontWeight.bold,
  fontStyle: FontStyle.normal,
  fontDisplay: "block",
});

globalFontFace(displayFontFamily, {
  src: `url("https://d1b2grdnesao2u.cloudfront.net/fonts/TuskerGrotesk-7600Semibold.woff2") format("woff2"), url("https://d1b2grdnesao2u.cloudfront.net/fonts/TuskerGrotesk-7600Semibold.woff") format("woff")`,
  fontWeight: FontWeight.normal,
  fontStyle: FontStyle.italic,
  fontDisplay: "block",
});
