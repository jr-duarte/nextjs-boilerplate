import type * as Stitches from '@stitches/react';

import * as S from './styles';

type CheckboxComponentProps = {
  value?: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  error?: string;
  className?: string;
  css?: Stitches.CSS;
  name: string;
};
export default function CheckboxComponent({
  value = false,
  onChange,
  label = '',
  error = '',
  name,
  css,
  ...props
}: CheckboxComponentProps) {
  return (
    <S.Wrapper css={css} {...props}>
      <label htmlFor={`checkbox-${name}`}>
        <input
          type="checkbox"
          name={name}
          id={`checkbox-${name}`}
          checked={value}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />
        <span className="checkbox" />
      </label>
      {!!label && <p dangerouslySetInnerHTML={{ __html: label }} />}
      {!!error && <span className="error">{error}</span>}
    </S.Wrapper>
  );
}
