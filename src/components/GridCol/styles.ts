import { styled } from '@Styles/stitches.config';
import type * as Stitches from '@stitches/react';

const itemsCol: { [item: string]: Stitches.CSS } = {};
const itemsColLg: { [item: string]: Stitches.CSS } = {};

Array(13)
  .fill(0)
  .map((item, index) => {
    itemsCol[`${index}`] = {
      gridCol: `${index}`,
    };
    itemsColLg[`${index}`] = {
      '@lgUp': {
        gridCol: `${index}`,
      },
    };
  });

export const Wrapper = styled('div', {
  variants: {
    col: {
      ...itemsCol,
    },
    collg: {
      ...itemsColLg,
    },
  },
});
