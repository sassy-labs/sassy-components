import React from 'react';
import icons from './bootstrap-icons.svg';
import { StyledIcon } from './styles';

export interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
  name?: string;
  width?: string;
  height?: string;
  color?: string;
  src?: string;
  label?: string;
}

export const Icon: React.FC<Props> = ({
  name,
  width = '1em',
  height = '1em',
  color = 'currentColor',
  src,
  label = `${name?.replaceAll(/-/g, ' ')} icon`,
  ...otherProps
}) => {
  if (!name && !src)
    throw new Error('At least name or src for Icon must be defined');

  return (
    <StyledIcon
      width={width}
      height={height}
      color={color}
      aria-label={label}
      {...otherProps}
    >
      {src ? <use href={src} /> : <use href={`./${icons}#${name}`} />}
    </StyledIcon>
  );
};
