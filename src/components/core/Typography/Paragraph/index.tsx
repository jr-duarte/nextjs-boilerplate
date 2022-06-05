import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

type ParagraphComponentProps = {
  tag?: 'p' | 'span';
  size?: 'small' | 'medium' | 'large';
  onContrast?: boolean;
  css?: Stitches.CSS;
  children: React.ReactNode;
};

export default function Paragraph({
  tag,
  size,
  onContrast,
  css,
  children,
  ...props
}: ParagraphComponentProps) {
  return (
    <Wrapper css={css} as={tag} size={size} onContrast={onContrast} {...props}>
      {children}
    </Wrapper>
  );
}
