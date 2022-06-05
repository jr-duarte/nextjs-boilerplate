import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

type CaptionComponentProps = {
  tag?: 'p' | 'span';
  onContrast?: boolean;
  css?: Stitches.CSS;
  children: React.ReactNode;
};

export default function Caption({
  tag,
  onContrast,
  css,
  children,
  ...props
}: CaptionComponentProps) {
  return (
    <Wrapper css={css} as={tag} onContrast={onContrast} {...props}>
      {children}
    </Wrapper>
  );
}
