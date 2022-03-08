import { styled } from '@Styles/theme/stitches.config';

export const Button = styled('button', {
  width: '100%',
  backgroundColor: '$brandPrimaryLight',
  borderRadius: '9999px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: '$brandSecondaryMedium',
  },
  color: 'yellow',
  fontRegular: '$15',
  '@lgUp': {
    color: '$red',
  },
});

export default Button;
