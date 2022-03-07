import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

export type GridColProps = {
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children?: React.ReactNode;
  css?: Stitches.CSS;
};

const GridCol = ({ col, colLg, children, css, ...props }: GridColProps) => {
  return (
    <Wrapper col={col} collg={colLg} css={css} {...props}>
      {children}
    </Wrapper>
  );
};

export default GridCol;
