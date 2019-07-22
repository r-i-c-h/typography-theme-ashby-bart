import gray from "gray-percentage";
import verticalRhythm from "compass-vertical-rhythm";
import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";

//...import COLORS from .........
const COLORS = {
  whiteish: '#FCFCF5',
  light: '#F2EFD9',
  primary: '#E4E0C1',
  accent: '#D2CEAC',
  dark: '#908D76',
  darker: '#4D4C3F',
  blackish: '#0B0A09'
}
const TXT = {
  bodySize: `${18 / 16}rem`,
  baseLineHeight: 1.5,
  modScale: 1.25
}

const theme = {
  title: 'Ashby BART',
  includeNormalize: true, // default, just want to remind myself Normalize.CSS is here
  baseFontSize: TXT.bodySize, // 16
  baseLineHeight: TXT.baseLineHeight, // 1.45
  scaleRatio: TXT.modScale, // 2 [ratio of body to h1]
  googleFonts: [
    {
      name: 'EB Garamond',
      styles: [
        '500',
        '700'
      ],
    },
    {
      name: 'Quicksand',
      styles: [
        '500',
        '700'
      ],
    }
  ],
  headerFontFamily: ['EB Garamond', 'serif'], // array of strings!
  headerColor: COLORS.darker, // default: inherit
  headerWeight: 700,
  bodyFontFamily: ['Quicksand', 'sans-serif'], // defaults is ['georgia', 'serif']
  bodyColor: COLORS.blackish, // hsl(0,0%,0%,0.8)
  bodyGray: 0, // hsl "lightness” value for body text def:20
  bodyGrayHue: 0, // hsl “hue” value for body text def:0. (Also accepts "cool","slate", and "warm".
  bodyWeight: 500, // normal
  boldWeight: 700, // bold
  // blockMarginBottom: // default margin-bottom for blocks. default = rhythm(1) one "rhythm unit" (i.e. the height of the base line height).

  // overrideStyles() adds to or overrides auto-generated styles.
  // Called with a Vertical Rhythm obj{}, options obj{}, the algorithmically generated styles.
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const vr = verticalRhythm({
      baseFontSize: TXT.bodySize,
      baseLineHeight: TXT.baseLineHeight,
    });
    return {
      a: {
        color: COLORS.darker,
        textShadow: ".03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff", // eslint-disable-line
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${LINK_COLOR} 1px, ${LINK_COLOR} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-linetDecoration: "none",
      },
      "a:hover,a:active": {
        textShadow: "none",
        backgroundImage: "none",
      },
      "h1,h2,h3,h4,h5,h6": {
        marginTop: rhythm(1 / 2),
        marginBottom: rhythm(1),
      },
      blockquote: {
        ...scale(1 / 5),
        marginLeft: rhythm(-3 / 4),
        borderLeft: `${rhythm(3 / 16)} solid ${COLORS.darker}`,
        color: gray(41),
        paddingLeft: rhythm(13 / 16),
        fontStyle: "italic",
        marginRight: 0,
      },
      "blockquote > :last-child": {
        marginBottom: 0,
      },
      "blockquote cite": {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontStyle: "normal",
        fontWeight: options.bodyWeight,
      },
      "blockquote cite:before": {
        content: '"— "',
      },
      // RESPONSIVE BIT
      [TABLET_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        h1: {
          //      ...scale(5 / 5),
          letterSpacing: "-2px",
        },
        "h1,h2,h3,h4,h5,h6": {
          marginBottom: rhythm(2),
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
          paddingLeft: rhythm(9 / 16),
        }
      } // end @media query
    };
  } // end overrideStyles()
};

export default theme