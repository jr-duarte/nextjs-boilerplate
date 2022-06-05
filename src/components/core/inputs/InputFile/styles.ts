import { styled } from '@Styles/theme/stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  '> label': {
    cursor: 'pointer',
    display: 'block',
    fontFamily: '$base',
    fontSize: '$nano',
    lineHeight: '$medium',
    fontWeight: '$bold',
    marginBottom: '$xxsmall',
    backgroundColor: '$neutralHighPure',

    borderWidth: '$hairline',
    borderStyle: 'solid',
    borderColor: '$neutralHighDark',

    '> input': {
      display: 'none',
    },
  },
});

export const Error = styled('span', {
  display: 'block',
  fontFamily: '$base',
  fontSize: '$xnano',
  lineHeight: '$medium',
  fontWeight: '$normal',
  color: '$statusNegativeMedium',
  marginBottom: '$xxsmall',
});

export const Label = styled('span', {
  display: 'block',
  fontFamily: '$base',
  fontSize: '$nano',
  lineHeight: '$medium',
  fontWeight: '$bold',
  color: '$brandPrimaryPure',
  marginBottom: '$xsmall',
});

export const ButtonFake = styled('span', {
  width: '105px',
  height: '48px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$base',
  fontSize: '$nano',
  lineHeight: '$medium',
  fontWeight: '$bold',
  color: '$neutralHighPure',
  backgroundColor: '$brandPrimaryPure',
});

export const AmountFiles = styled('span', {
  display: 'inline-block',
  fontFamily: '$base',
  fontSize: '$xnano',
  lineHeight: '$medium',
  fontWeight: '$normal',
  color: '$neutralLowPure',
  marginLeft: '$medium',
});

export const ContentFile = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$small',
});

export const ContentFileNameSize = styled('div', {
  width: '85%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderWidth: '$hairline',
  borderStyle: 'solid',
  borderColor: '$neutralHighDark',
  padding: '$xsmall $medium',
});

export const FileName = styled('span', {
  display: 'inline-block',
  overflow: 'hidden',

  fontFamily: '$base',
  fontSize: '$nano',
  lineHeight: '$medium',
  fontWeight: '$normal',
  color: '$neutralLowPure',
  marginRight: '$medium',
});

export const FileSize = styled('span', {
  display: 'inline-block',
  fontFamily: '$base',
  fontSize: '$nano',
  lineHeight: '$medium',
  fontWeight: '$normal',
  color: '$neutralLowDark',
});

export const FileBtnRemove = styled('button', {
  cursor: 'pointer',
  display: 'block',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  margin: 'none',
  padding: 'none',
});

export const Description = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$base',
  fontSize: '$nano',
  lineHeight: '$medium',
  fontWeight: '$normal',
  color: '$neutralLowDark',

  svg: {
    marginRight: '$nano',
  },
});
