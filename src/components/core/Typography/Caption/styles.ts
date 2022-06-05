import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('p', {
  fontFamily: '$base',
  fontSize: '$xnano',
  lineHeight: '$medium',
  fontWeight: '$normal',

  variants: {
    onContrast: {
      true: {
        color: '$neutralHighPure',
      },
      false: {
        color: '$neutralLowDark',
      },
    },
  },

  defaultVariants: {
    onContrast: 'false',
  },
});

export default Wrapper;
