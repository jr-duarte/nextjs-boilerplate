import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

type HeadingComponentProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  onContrast?: boolean;
  css?: Stitches.CSS;
  children: React.ReactNode;
};

export default function Heading({
  tag,
  size,
  onContrast,
  css,
  children,
  ...props
}: HeadingComponentProps) {
  return (
    <Wrapper css={css} as={tag} size={size} onContrast={onContrast} {...props}>
      {children}
    </Wrapper>
  );
}
