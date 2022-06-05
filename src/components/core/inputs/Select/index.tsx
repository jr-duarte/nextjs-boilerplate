import { RefCallback } from 'react';

import type * as Stitches from '@stitches/react';

import Wrapper from './styles';

type SelectComponentProps = {
  refInput?: RefCallback<HTMLSelectElement>;
  value: string | undefined;
  onChange: (value: string) => void;
  label?: string;
  labelColor?: 'green' | 'white';
  error?: string;
  className?: string;
  css?: Stitches.CSS;
  placeholder?: string;
  name: string;
  options: { label: string; value: string }[];
};
export default function SelectComponent({
  refInput,
  onChange,
  value = '',
  label = '',
  placeholder = '',
  labelColor,
  error = '',
  css,
  options,
  name,
  ...props
}: SelectComponentProps) {
  return (
    <Wrapper css={css} labelColor={labelColor} {...props}>
      {!!label && <label>{label}</label>}
      <select
        ref={refInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="new-password"
        name={name}
      >
        {!!placeholder && (
          <option
            value=""
            disabled
            style={{ display: 'none' }}
            className="placeholder"
          >
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {!!error && <span>{error}</span>}
    </Wrapper>
  );
}
