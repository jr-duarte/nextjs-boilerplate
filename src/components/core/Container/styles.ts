import { styled } from '@Styles/theme/stitches.config';

const Wrapper = styled('div', {
  width: '100%',
  maxWidth: '1110px',
  paddingLeft: '15px',
  paddingRight: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  overflow: 'hidden',
  '@lgUp': {
    overflow: 'initial',
    paddingLeft: '0px',
    paddingRight: '0px',
  },
});

export default Wrapper;
