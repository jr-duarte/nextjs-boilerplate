import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('h1', {
  fontFamily: '$highLight',
  fontWeight: '$bold',
  lineHeight: '$tight',

  variants: {
    onContrast: {
      true: {
        color: '$neutralHighPure',
      },
      false: {
        color: '$brandPrimaryPure',
      },
    },
    size: {
      xsmall: {
        fontSize: '$nano',
        '@lgUp': {
          fontSize: '$xxsmall',
        },
      },
      small: {
        fontSize: '$xsmall',
        '@lgUp': {
          fontSize: '$small',
        },
      },
      medium: {
        fontSize: '$small',
        '@lgUp': {
          fontSize: '$large',
        },
      },
      large: {
        fontSize: '$medium',
        '@lgUp': {
          fontSize: '$xlarge',
        },
      },
      xlarge: {
        fontSize: '$large',
        '@lgUp': {
          fontSize: '$xxlarge',
        },
      },
      xxlarge: {
        fontSize: 'xlarge',
        '@lgUp': {
          fontSize: '$xhuge',
        },
      },
    },
  },

  defaultVariants: {
    onContrast: 'false',
    size: 'medium',
  },
});

export default Wrapper;
