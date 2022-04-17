import { styled } from '@Styles/theme/stitches.config';

export const Wrapper = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$neutralHighPure',
  padding: '40px 20px',
  width: '90%',
  borderRadius: '10px',
  '@lgUp': {
    width: '650px',
    padding: '50px',
  },
});
