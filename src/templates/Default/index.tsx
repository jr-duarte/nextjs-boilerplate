import React from 'react';

import { globalStyles } from '@Styles/stitches.config';

type DefaultTemplateProps = {
  children: React.ReactNode;
};

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  globalStyles();
  return <div>{children}</div>;
}
