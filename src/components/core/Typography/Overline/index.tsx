import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

type OverlineComponentProps = {
  tag?: 'p' | 'span';
  onContrast?: boolean;
  css?: Stitches.CSS;
  children: React.ReactNode;
};

export default function Overline({
  tag,
  onContrast,
  css,
  children,
  ...props
}: OverlineComponentProps) {
  return (
    <Wrapper css={css} as={tag} onContrast={onContrast} {...props}>
      {children}
    </Wrapper>
  );
}
