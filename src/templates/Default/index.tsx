import React from 'react';

import mainCss from '@Styles/mainCss';

type DefaultTemplateProps = {
  children: React.ReactNode;
};

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  mainCss();
  return <main>{children}</main>;
}
