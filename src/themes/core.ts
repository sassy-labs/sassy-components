import generatePalette from '../util/generatePalette';

const ColorTokens = {
  colors: {
    primary: generatePalette(203, 100),
    success: generatePalette(110, 70),
    info: generatePalette(203, 10),
    warning: generatePalette(40, 90),
    danger: generatePalette(10, 95),
    gray: generatePalette(203, 10),
    white: `white`,
    black: `black`
  }
};

const BorderRadiusTokens = {
  borderRadiusSmall: `0.125rem`,
  borderRadiusMedium: `0.25rem`,
  borderRadiusLarge: `0.5rem`,
  borderRadiusXLarge: `1rem`,
  borderRadiusCircle: `50%`,
  borderRadiusPill: `9999px`
};

const ElevationTokens = {
  shadowXSmall: `0 1px 0 rgba(0, 0, 0, 0.05)`,
  shadowSmall: `0 1px 2px rgba(0, 0, 0, 0.1)`,
  shadowMedium: `0 2px 4px rgba(0, 0, 0, 0.1)`,
  shadowLarge: `0 2px 8px rgba(0, 0, 0, 0.1)`,
  shadowXLarge: `0 4px 16px rgba(0, 0, 0, 0.1)`
};

const SpacingTokens = {
  spacingXXXSmall: `0.125rem`,
  spacingXXSmall: `0.25rem`,
  spacingXSmall: `0.5rem`,
  spacingSmall: `0.75rem`,
  spacingMedium: `1rem `,
  spacingLarge: `1.25rem`,
  spacingXLarge: `1.75rem`,
  spacingXXLarge: `2.25rem`,
  spacingXXXLarge: `3rem `,
  spacingXXXXLarge: `4.5rem`
};

const TransitionTokens = {
  transitionXSlow: `1000ms`,
  transitionSlow: `500ms`,
  transitionMedium: `250ms`,
  transitionFast: `150ms`,
  transitionXFast: `50ms`
};

const TypographyTokens = {
  // font families
  fontMono: `'SFMono Regular', Consolas, 'Liberation Mono', Menlo, monospace`,
  fontSans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  fontSerif: `Georgia, 'Times New Roman', serif`,
  // font sizes
  fontSizeXXSmall: `0.625rem`,
  fontSizeXSmall: `0.75rem`,
  fontSizeSmall: `0.875rem`,
  fontSizeMedium: `1rem`,
  fontSizeLarge: `1.25rem`,
  fontSizeXLarge: `1.5rem`,
  fontSizeXXLarge: `2.25rem`,
  fontSizeXXXLarge: `3rem`,
  fontSizeXXXXLarge: `4.5rem`,
  // font weights
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightSemibold: 500,
  fontWeightBold: 700,
  // letter spacings
  letterSpacingDense: `-0.015em`,
  letterSpacingNormal: `normal`,
  letterSpacingLoose: `0.075em`,
  // line heights
  lineHeightDense: `1.4`,
  lineHeightNormal: `1.8`,
  lineHeightLoose: `2.2`
};

export default {
  ...ColorTokens,
  ...TransitionTokens,
  ...BorderRadiusTokens,
  ...ElevationTokens,
  ...SpacingTokens,
  ...TypographyTokens
};
