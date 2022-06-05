import type * as Stitches from '@stitches/react';
import VMasker from 'vanilla-masker';

import Wrapper from './styles';

type InputComponentProps = {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
  css?: Stitches.CSS;
  name: string;
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'date'
    | 'cellphone'
    | 'number'
    | 'cpf'
    | 'cnpj'
    | 'access-key'
    | 'zip-code';
  readOnly?: boolean;
  maxLength?: number;
  onBlur?: () => void;
};
export default function InputComponent({
  onChange,
  value = '',
  placeholder = '',
  type = 'text',
  label = '',
  error = '',
  css,
  name,
  readOnly = false,
  maxLength,
  onBlur,
  ...props
}: InputComponentProps) {
  const fieldConfig = {
    type,
    mask: '',
  };
  switch (type) {
    case 'date':
      fieldConfig.type = 'text';
      fieldConfig.mask = '99/99/9999';
      break;
    case 'cellphone':
      fieldConfig.type = 'text';
      fieldConfig.mask = '(99) 9 9999-9999';
      break;
    case 'cpf':
      fieldConfig.type = 'text';
      fieldConfig.mask = '999.999.999-99';
      break;
    case 'cnpj':
      fieldConfig.type = 'text';
      fieldConfig.mask = '99.999.999/9999-99';
      break;
    case 'access-key':
      fieldConfig.type = 'text';
      fieldConfig.mask =
        '9999 9999 9999 9999 9999 9999 9999 9999 9999 9999 9999';
      break;
    case 'zip-code':
      fieldConfig.type = 'text';
      fieldConfig.mask = '99999-999';
      break;
    default:
      break;
  }

  const handleGetValue = () => {
    if (!fieldConfig.mask) return value;
    return VMasker.toPattern(value, fieldConfig.mask);
  };

  const handleSetValue = (newValue: string) => {
    if (!fieldConfig.mask) return onChange(newValue);
    onChange(VMasker.toPattern(newValue, fieldConfig.mask));
  };

  return (
    <Wrapper {...props} css={css}>
      {!!label && <label>{label}</label>}
      <input
        type={fieldConfig.type}
        placeholder={placeholder}
        value={handleGetValue()}
        onChange={(e) => handleSetValue(e.target.value)}
        autoComplete="new-password"
        name={name}
        readOnly={readOnly}
        maxLength={maxLength}
        onBlur={onBlur}
      />
      {!!error && <span>{error}</span>}
    </Wrapper>
  );
}
