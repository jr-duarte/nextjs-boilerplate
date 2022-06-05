import { styled } from '@Styles/theme/stitches.config';

export const Text = styled('span', {
  display: 'block',
  fontFamily: '$base',
  fontSize: '$nano',
  lineHeight: '24px',
  fontWeight: '$bold',
  letterSpacing: '$loose',
  textAlign: 'center',
});

export const Wrapper = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  padding: '$small $medium',

  '.icon-start': {
    marginRight: '$xsmall',
  },

  '.icon-end': {
    marginLeft: '$xsmall',
  },

  variants: {
    onContrast: {
      true: {
        backgroundColor: '$neutralHighPure',
        color: '$brandPrimaryPure',

        '&:hover': {
          backgroundColor: '$brandPrimaryLight',
        },

        svg: {
          fill: '$neutralHighPure',
        },
      },
      false: {
        backgroundColor: '$brandPrimaryPure',
        color: '$neutralHighPure',

        svg: {
          fill: '$neutralHighPure',
        },

        '&:hover': {
          backgroundColor: '$brandPrimaryMedium',
        },
      },
    },

    disabledStyled: {
      true: {
        cursor: 'not-allowed',
        backgroundColor: '$neutralHighMedium',
        color: '$neutralLowLight',

        svg: {
          fill: '$neutralLowLight',
        },
      },
    },

    border: {
      true: {
        backgroundColor: 'transparent',
        border: '1px solid $brandPrimaryPure',
        color: '$brandPrimaryPure',

        svg: {
          fill: '$brandPrimaryPure',
        },

        '&:hover': {
          backgroundColor: '$brandPrimaryPure',
          color: '$neutralHighPure',

          svg: {
            fill: '$neutralHighPure',
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      disabledStyled: true,
      onContrast: true,
      css: {
        backgroundColor: '$neutralHighMedium',
        color: '$neutralLowLight',

        svg: {
          fill: '$neutralLowLight',
        },

        '&:hover': {
          backgroundColor: '$neutralHighMedium',
          color: '$neutralLowLight',

          svg: {
            fill: '$neutralLowLight',
          },
        },
      },
    },
    {
      disabledStyled: true,
      onContrast: false,
      css: {
        backgroundColor: '$neutralHighMedium',
        color: '$neutralLowLight',

        svg: {
          fill: '$neutralLowLight',
        },

        '&:hover': {
          backgroundColor: '$neutralHighMedium',
          color: '$neutralLowLight',

          svg: {
            fill: '$neutralLowLight',
          },
        },
      },
    },
    {
      disabledStyled: false,
      onContrast: false,
      border: true,
      css: {
        backgroundColor: 'transparent',
        border: '1px solid $brandPrimaryPure',
        color: '$brandPrimaryPure',

        svg: {
          fill: '$brandPrimaryPure',
        },

        '&:hover': {
          backgroundColor: '$brandPrimaryPure',
          color: '$neutralHighPure',

          svg: {
            fill: '$neutralHighPure',
          },
        },
      },
    },
    {
      disabledStyled: false,
      onContrast: true,
      border: true,
      css: {
        backgroundColor: 'transparent',
        border: '1px solid $neutralHighPure',
        color: '$neutralHighPure',

        svg: {
          fill: '$neutralHighPure',
        },

        '&:hover': {
          backgroundColor: '$neutralHighPure',
          color: '$brandPrimaryPure',

          svg: {
            fill: '$brandPrimaryPure',
          },
        },
      },
    },
  ],

  defaultVariants: {
    onContrast: 'false',
    disabledStyled: 'false',
    border: 'false',
  },
});
