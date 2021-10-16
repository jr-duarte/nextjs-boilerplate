import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

const gridGutter = {
  width: 16,
};

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      montserrat: 'Montserrat',
    },

    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
      extra_bold: 800,
    },

    fontSizes: {
      1: '3px',
      2: '6px',
      3: '9px',
      4: '12px',
      5: '15px',
      6: '18px',
      7: '21px',
      8: '24px',
      9: '27px',
      10: '30px',
      11: '33px',
      12: '36px',
      13: '39px',
      14: '42px',
      15: '45px',
      16: '48px',
      17: '51px',
    },

    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '30px',
      7: '35px',
      8: '40px',
      9: '45px',
      10: '50px',
      11: '55px',
      12: '60px',
      13: '65px',
      14: '70px',
      15: '75px',
      16: '80px',
      17: '85px',
    },

    colors: {
      red: 'red',
    },
  },

  // Breakpoints
  media: {
    lgUp: '(min-width: 992px)',
    lgDown: '(max-width: 991px)',
  },

  utils: {
    // Fonts
    fontRegular: (size: Stitches.ScaleValue<'fontSizes'>) => ({
      fontFamily: '$montserrat',
      fontWeight: '$regular',
      fontSize: size,
    }),

    fontMedium: (size: Stitches.ScaleValue<'fontSizes'>) => ({
      fontFamily: '$montserrat',
      fontWeight: '$medium',
      fontSize: size,
    }),

    fontBold: (size: Stitches.ScaleValue<'fontSizes'>) => ({
      fontFamily: '$montserrat',
      fontWeight: '$bold',
      fontSize: size,
    }),

    fontExtraBold: (size: Stitches.ScaleValue<'fontSizes'>) => ({
      fontFamily: '$montserrat',
      fontWeight: '$extra_bold',
      fontSize: size,
    }),

    // Grid
    gridCol: (number: number) => {
      return {
        flex: `0 0 ${parseFloat(((number / 12) * 100).toFixed(5))}%`,
        maxWidth: `${parseFloat(((number / 12) * 100).toFixed(5))}%`,
        position: 'relative',
        width: '100%',
        paddingRight: gridGutter.width / 2,
        paddingLeft: gridGutter.width / 2,
      };
    },
  },
});

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Montserrat',
      src: '/public/Montserrat-Regular.woff',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Montserrat',
      src: '/public/Montserrat-Medium.woff',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Montserrat',
      src: '/public/Montserrat-Bold.woff',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Montserrat',
      src: '/public/Montserrat-ExtraBold.woff',
      fontDisplay: 'swap',
    },
  ],
});
