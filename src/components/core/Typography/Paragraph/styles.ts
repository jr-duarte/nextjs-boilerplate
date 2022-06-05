import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('p', {
  fontFamily: '$base',
  fontWeight: '$normal',
  lineHeight: '$medium',

  variants: {
    onContrast: {
      true: {
        color: '$neutralHighPure',
      },
      false: {
        color: '$neutralLowDark',
      },
    },
    size: {
      small: {
        fontSize: '$xnano',
      },
      medium: {
        fontSize: '$nano',
      },
      large: {
        fontSize: '$xxsmall',
      },
    },
  },

  defaultVariants: {
    onContrast: 'false',
    size: 'medium',
  },
});

export default Wrapper;
