import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

type GridRowComponentProps = {
  children: React.ReactNode;
  css?: Stitches.CSS;
};

export default function GridRow({
  children,
  css,
  ...props
}: GridRowComponentProps) {
  return (
    <Wrapper css={css} {...props}>
      {children}
    </Wrapper>
  );
}
