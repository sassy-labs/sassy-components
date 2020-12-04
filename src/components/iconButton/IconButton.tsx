import React from 'react';
import { Icon } from '../icon/Icon';

import { StyledIconButton } from './styles';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  name?: string;
  src?: string;
  label?: string;
  disabled?: boolean;
}

export const IconButton: React.FC<Props> = ({
  name,
  src,
  label,
  disabled = false,
  ...otherProps
}) => {
  if (!name && !src)
    throw new Error('At least name or src for IconButton must be defined');

  return (
    <StyledIconButton
      type="button"
      disabled={disabled}
      {...otherProps}
      role="button"
    >
      <Icon name={name} src={src} label={label} />
    </StyledIconButton>
  );
};
