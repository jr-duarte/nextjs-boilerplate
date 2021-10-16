import { styled } from '@Styles/stitches.config';

export const Button = styled('button', {
  width: '100%',
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
  color: 'yellow',
  fontRegular: '$15',
  '@lgUp': {
    color: '$red',
  },
});
