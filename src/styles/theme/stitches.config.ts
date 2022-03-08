import { createStitches } from '@stitches/react';

export const gridGutter = {
  width: 15,
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  prefix,
  reset,
} = createStitches({
  // Prefix
  prefix: 'stitches-style',

  // Theme
  theme: {
    fonts: {
      base: 'Arial',
      highLight: 'Ringside Compressed',
    },

    fontWeights: {
      regular: 400,
      bold: 700,
    },

    fontStyles: {
      normal: 'normal',
      italic: 'italic',
    },

    letterSpacings: {
      xtight: '-.04em',
      tight: '-.02em',
      normal: 0,
      loose: '.02em',
      xloose: ' .04em',
    },

    lineHeights: {
      xloose: 2,
      loose: 1.75,
      medium: 1.5,
      tight: 1.2,
      xtight: 1,
    },

    fontSizes: {
      xxnano: '12px',
      xnano: '14px',
      nano: '16px',
      xxsmall: '18px',
      xsmall: '20px',
      small: '24px',
      medium: '28px',
      large: '32px',
      xlarge: '40px',
      xxlarge: '48px',
      huge: '56px',
      xhuge: '64px',
      xxhuge: '72px',
      giant: '80px',
      xgiant: '88px',
      xxgiant: '96px',
    },

    borderWidths: {
      none: 0,
      hairline: '1px',
      thin: '2px',
      thick: '4px',
      heavy: '8px',
    },

    radii: {
      none: 0,
      small: '4px',
      medium: '8px',
      large: '16px',
      pill: '500px',
      circle: '50%',
    },

    shadows: {
      level1X: '0px',
      level1Y: '4px',
      level1B: '8px',
      level1Stack: '0px 4px 8px',
      level2X: '0px',
      level2Y: '8px',
      level2B: '24px',
      level2Stack: '0px 8px 24px',
      level3X: '0px',
      level3Y: '16px',
      level3B: '32px',
      level3Stack: '0px 16px 32px',
      level4X: '0px',
      level4Y: '16px',
      level4B: '48px',
      level4Stack: '0px 16px 48px',
    },

    aspectRatios: {
      '16x9': '56.25%',
      '3x2': '66.67%',
      '4x3': '75%',
      square: '100%',
      '3x4': '133.34%',
      '2x3': '150%',
      '9x16': '177.78%',
    },

    space: {
      nano: '4px',
      xxsmall: '6px',
      xsmall: '8px',
      small: '12px',
      medium: '16px',
      large: '24px',
      xlarge: '32px',
      xxlarge: '40px',
      huge: '48px',
      xhuge: '56px',
      xxhuge: '64px',
      giant: '80px',
      xgiant: '120px',
      xxgiant: '160px',
    },

    colors: {
      brandPrimaryPure: '#ED1C24',
      brandPrimaryLight: '#FBC6CB',
      brandPrimaryMedium: '#D51118',
      brandPrimaryDark: '#5E080B',

      brandSecondaryPure: '#BD8D28',
      brandSecondaryLight: '#EEDAAF',
      brandSecondaryMedium: '#976220',
      brandSecondaryDark: '#6E4017',

      accentPure: '#6339F9',
      accentLight: '#D4C3FE',
      accentMedium: '#3E27B0',
      accentDark: '#2B245D',

      neutralHighPure: '#FFFFFF',
      neutralHighLight: '#F5F5F4',
      neutralHighMedium: '#E4E3E1',
      neutralHighDark: '#B7B2AE',

      neutralLowPure: '#131211',
      neutralLowLight: '#958F88',
      neutralLowMedium: '#645E59',
      neutralLowDark: '#3B3835',

      statusFocusPure: '#009DF2',
      statusFocusLight: '#B3E6F4',
      statusFocusMedium: '#005BAE',
      statusFocusDark: '#143971',

      statusNegativePure: '#C51B62',
      statusNegativeLight: '#FAC7D2',
      statusNegativeMedium: '#9D0261',
      statusNegativeDark: '#5A014A',
    },

    gridGutter: {
      default: 16,
    },
  },

  // Breakpoints
  media: {
    lgUp: '(min-width: 992px)',
    lgDown: '(max-width: 991px)',
  },

  // Utils
  utils: {
    // Grid Col
    gridCol: (number: number) => {
      return {
        flex: `0 0 ${parseFloat(((number / 12) * 100).toFixed(5))}%`,
        maxWidth: `${parseFloat(((number / 12) * 100).toFixed(5))}%`,
        position: 'relative',
        width: '100%',
        paddingRight: gridGutter.width,
        paddingLeft: gridGutter.width,
      };
    },
  },
});

export const globalStyles = globalCss({
  html: {
    scrollBehavior: 'smooth',
    scrollPaddingTop: '80px',
  },

  // '.Toastify': {
  //   fontSize: '$nano',
  //   color: '$neutralLowPure',
  // },

  body: {
    fontFamily: '$base',
    fontSize: '$medium',
    fontWeight: '$normal',
    backgroundColor: '$neutralHighPure',
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },
  },

  '[data-hidden="onDesktop"]': {
    '@lgUp': {
      display: 'none !important',
    },
  },

  '[data-hidden="onMobile"]': {
    '@lgDown': {
      display: 'none !important',
    },
  },

  // Modal
  // '.ReactModalPortal': {
  //   '.ReactModal__Overlay': {
  //     zIndex: 9999,
  //     backgroundColor: 'rgba(000, 000, 000, 0.80) !important',
  //   },
  // },

  // '.ReactModal__Body--open': {
  //   overflow: 'hidden',
  // },

  // Fonts
  // '@import':
  //   "url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap')",

  // '@font-face': [
  //   {
  //     fontFamily: 'Heineken Serif',
  //     src: 'url(/fonts/heineken-serif/HeinekenSerif-Regular.woff2)',
  //     fontDisplay: 'swap',
  //   },
  //   {
  //     fontFamily: 'Heineken Serif',
  //     src: 'url(/fonts/heineken-serif/HeinekenSerif-Bold.woff2)',
  //     fontDisplay: 'swap',
  //   },
  // ],
});
