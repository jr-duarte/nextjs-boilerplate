import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

type ContainerComponentProps = {
  children: React.ReactNode;
  css?: Stitches.CSS;
};

export default function Container({
  children,
  css,
  ...props
}: ContainerComponentProps) {
  return (
    <Wrapper css={css} {...props}>
      {children}
    </Wrapper>
  );
}
