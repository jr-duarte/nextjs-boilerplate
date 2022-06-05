import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('p', {
  fontFamily: '$base',
  fontSize: '$xnano',
  lineHeight: '$xtight',
  fontWeight: '$bold',
  letterSpacing: '$loose',
  textTransform: 'uppercase',

  variants: {
    onContrast: {
      true: {
        color: '$neutralHighPure',
      },
      false: {
        color: '$neutralLowLight',
      },
    },
  },

  defaultVariants: {
    onContrast: 'false',
  },
});

export default Wrapper;
