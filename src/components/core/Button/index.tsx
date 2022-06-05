import { HTMLAttributeAnchorTarget } from 'react';

import IconComponent, { icons } from '@Components/core/ReactIcons';
import type * as Stitches from '@stitches/react';
import Link from 'next/link';

import * as S from './styles';

type ButtonComponentProps = {
  tag?: 'button' | 'a';
  disabled?: boolean;
  text: string;
  onContrast?: boolean;
  border?: boolean;
  href?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  css?: Stitches.CSS;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  icon?: keyof typeof icons;
  iconSize?: number;
  iconEnd?: boolean;
};

export default function Button({
  disabled = false,
  tag,
  onContrast,
  border,
  text,
  href,
  target,
  type,
  css,
  onClick,
  icon,
  iconSize,
  iconEnd = false,
  ...props
}: ButtonComponentProps) {
  return (
    <>
      {href ? (
        <Link href={href} passHref {...props}>
          <S.Wrapper
            as={tag}
            css={css}
            onContrast={onContrast}
            border={border}
            target={target}
            onClick={onClick}
          >
            {icon && !iconEnd && (
              <IconComponent
                name={icon}
                size={iconSize}
                className="icon-start"
              />
            )}

            <S.Text>{text}</S.Text>

            {icon && iconEnd && (
              <IconComponent name={icon} size={iconSize} className="icon-end" />
            )}
          </S.Wrapper>
        </Link>
      ) : (
        <S.Wrapper
          as={tag}
          css={css}
          onContrast={onContrast}
          border={border}
          type={type}
          onClick={onClick}
          disabled={disabled}
          disabledStyled={disabled}
          {...props}
        >
          {icon && !iconEnd && (
            <IconComponent name={icon} size={iconSize} className="icon-start" />
          )}

          <S.Text>{text}</S.Text>

          {icon && iconEnd && (
            <IconComponent name={icon} size={iconSize} className="icon-end" />
          )}
        </S.Wrapper>
      )}
    </>
  );
}
