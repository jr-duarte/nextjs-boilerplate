import React from "react";

import * as S from "./styles";

export type GridColProps = {
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const GridCol = ({ col, colLg, children, ...rest }: GridColProps) => {
  return (
    <S.Wrapper col={col} collg={colLg}>
      {children}
    </S.Wrapper>
  );
};

export default GridCol;
