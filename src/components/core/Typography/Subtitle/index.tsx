import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

type SubtitleComponentProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size?: 'nano' | 'small' | 'large';
  onContrast?: boolean;
  css?: Stitches.CSS;
  children: React.ReactNode;
};

export default function Subtitle({
  tag,
  size,
  onContrast,
  css,
  children,
  ...props
}: SubtitleComponentProps) {
  return (
    <Wrapper css={css} as={tag} size={size} onContrast={onContrast} {...props}>
      {children}
    </Wrapper>
  );
}
