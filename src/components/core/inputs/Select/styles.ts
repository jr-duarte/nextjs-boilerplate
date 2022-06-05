import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('div', {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',

  variants: {
    labelColor: {
      green: {
        '> label': {
          color: '$brandPrimaryPure',
        },
      },
      white: {
        '> label': {
          color: '$neutralHighPure',
        },
      },
    },
  },

  defaultVariants: {
    labelColor: 'green',
  },

  '> label': {
    display: 'block',
    fontFamily: '$base',
    fontSize: '$nano',
    lineHeight: '$medium',
    fontWeight: '$bold',
    marginBottom: '$xsmall',
  },

  '> select': {
    height: '48px',
    width: '100%',

    backgroundColor: '$neutralHighPure',

    borderWidth: '$hairline',
    borderStyle: 'solid',
    borderColor: '$neutralHighDark',

    padding: '$small 0px $small $small',

    fontFamily: '$base',
    fontSize: '$nano',
    lineHeight: '$medium',
    fontWeight: '$normal',
    color: '$neutralLowDark',

    '&:focus': {
      // border: '4px solid $statusFocusPure',
      outline: 'none',
    },

    '.placeholder': {
      color: '$neutralLowMedium',
    },
  },

  '> span': {
    display: 'block',
    fontFamily: '$base',
    fontSize: '$xnano',
    lineHeight: '$medium',
    fontWeight: '$normal',
    color: '$statusNegativeMedium',
    marginTop: '$xsmall',
  },
});

export default Wrapper;
