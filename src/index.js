import verticalRhythm from "compass-vertical-rhythm";
import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";
// 480, 768
import { COLORS, TEXT } from "./constants";

const themeObj = {
  title: 'Ashby BART',
  includeNormalize: true, // default, just want to remind myself Normalize.CSS is here
  baseFontSize: TEXT.bodySize, // def:16
  baseLineHeight: TEXT.baseLineHeight, // def:1.45
  scaleRatio: TEXT.modScale, // 2 [ratio of body to h1]
  googleFonts: [
    {
      name: 'Quicksand',
      styles: [
        '700'
      ],
    },
    {
      name: 'EB Garamond',
      styles: [
        '500',
        '700'
      ],
    }
  ],
  headerFontFamily: ['Quicksand', 'sans-serif'], // array of strings
  headerColor: COLORS.darker,                  // default: inherit
  headerWeight: 700,
  bodyFontFamily: ['EB Garamond', 'serif'], // defaults is ['georgia', 'serif']
  bodyColor: COLORS.blackish, // hsl(0,0%,0%,0.8)
  bodyGray: 0, // hsl "lightness” value for body text // def:20
  bodyGrayHue: 0, // hsl “hue” value for body text    // def:0. (Also accepts "cool","slate", and "warm".
  bodyWeight: 500,                                    // normal
  boldWeight: 700,                                    // bold
  // blockMarginBottom:// default margin-bottom for blocks. default = rhythm(1) one "rhythm unit" (i.e. the height of the base line height).

  // overrideStyles() adds to or overrides auto-generated styles.
  // Called with a Vertical Rhythm obj{}, options obj{}, the algorithmically generated styles.
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => { //eslint-disable-line
    const vr = verticalRhythm({
      baseFontSize: TEXT.bodySize,
      baseLineHeight: TEXT.baseLineHeight,
    });
    return {
      "h1,h2,h3,h4,h5,h6": {
        // marginTop: rhythm(1),
        // marginBottom: rhythm(1),
      },
      a: {
        color: COLORS.darker,
        textDecoration: "none",
        // textShadow: `0px 0px 1px ${COLORS.dark}`,
        backgroundImage: `linear-gradient(to bottom, ${COLORS.background} 0%,${COLORS.background} 85%, ${COLORS.darker} 85%, ${COLORS.background} 95%)`
      },
      "a:hover,a:active": {
        textShadow: "none",
        textDecoration: "underline",
      },
      blockquote: {
        color: COLORS.darker,
        fontStyle: "italic",
        marginLeft: rhythm(1),
        paddingLeft: rhythm(1),
        borderLeft: `3px solid ${COLORS.darker}`,
      },
      "blockquote:before": {
        content: `"“"`
      },
      // "blockquote:after": {
      //   content: "close-quote"
      // },
      "blockquote cite": {
        fontSize: "0.9em"
      },
      "blockquote cite:before": {
        content: '"” — "',
      },
      "blockquote cite:after": {
        content: '""',
      },
      // RESPONSIVE BIT
      [TABLET_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline()
        },
        h6: {
          fontStyle: "italic",
        },
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          marginLeft: 0,
          paddingLeft: rhythm(9 / 16),
        }
      } // end @media query
    };
  } // end overrideStyles()
};

export default themeObj;