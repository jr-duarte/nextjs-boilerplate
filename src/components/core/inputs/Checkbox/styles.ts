import { styled } from '@Styles/theme/stitches.config';

export const Wrapper = styled('div', {
  display: 'block',
  position: 'relative',
  paddingLeft: '30px',

  '> label': {
    position: 'absolute',
    top: '4px',
    left: '0',
    width: '18px',
    height: '18px',
    '> input[type="checkbox"]': {
      position: 'absolute',
      visibility: 'hidden',
      '&:checked': {
        '+ span.checkbox': {
          borderColor: '$brandPrimaryPure',
          backgroundColor: '$brandPrimaryPure',
          '&::before': {
            display: 'block',
          },
        },
      },
    },
    '> span.checkbox': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      width: '18px',
      height: '18px',
      border: '2px solid $neutralLowLight',
      borderRadius: '4px',
      position: 'relative',
      '&::before': {
        display: 'none',
        position: 'absolute',
        top: '3px',
        left: '3px',
        content: '',
        width: '10px',
        height: '6px',
        border: '2px solid $neutralHighPure',
        borderTop: '0',
        borderRight: '0',
        transform: 'rotate(-45deg)',
      },
    },
  },

  '> p': {
    fontFamily: '$base',
    fontSize: '$nano',
    lineHeight: '$medium',
    color: '$neutralLowDark',
    fontWeight: '$normal',

    a: {
      textDecoration: 'none',
      fontWeight: '$bold',
      color: '$brandPrimaryPure',
    },
  },

  '> span.error': {
    display: 'block',
    fontFamily: '$base',
    fontSize: '$xnano',
    lineHeight: '$medium',
    fontWeight: '$normal',
    color: '$statusNegativeMedium',
    marginTop: '$xsmall',
  },
});

export const WrapperOne = styled('div', {
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

  '> input': {
    height: '48px',
    width: '100%',

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
