import React, { useEffect, useState } from 'react';
import { Icon } from '../icon/Icon';
import { IconButton } from '../iconButton/IconButton';

import { Variant } from '../../util/Variant.type';
import { StyledAlert, AlertIcon, AlertMessage, AlertClose } from './styles';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  isClosable?: boolean;
  variant?: Variant;
  duration?: number;
  children?: React.ReactChild;
  icon?: string;
}

export const Alert: React.FC<Props> = ({
  isOpen = true,
  isClosable = true,
  variant = 'primary',
  duration = 5000,
  icon,
  children,
  ...otherProps
}) => {
  const [autoHideTimeout, setAutoHideTimeout] = useState<number>();
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const hide = (): void => {
    setIsShowing(false);
    clearTimeout(autoHideTimeout);
  };

  const restartAutoHide = (): void => {
    if (autoHideTimeout !== undefined) clearTimeout(autoHideTimeout);
    if (duration !== Infinity) setAutoHideTimeout(setTimeout(hide, duration));
  };

  const show = (): void => {
    if (isOpen) {
      restartAutoHide();
      setIsShowing(true);
    }
  };

  useEffect(() => {
    show();
    return () => clearTimeout(autoHideTimeout);
  }, []);

  if (!isOpen) return null;

  return (
    <StyledAlert
      variant={variant}
      hidden={!isShowing}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      aria-hidden={!isShowing}
      onMouseMove={restartAutoHide}
      {...otherProps}
    >
      {icon && (
        <AlertIcon>
          <Icon name={icon} />
        </AlertIcon>
      )}

      <AlertMessage>{children}</AlertMessage>

      {isClosable && (
        <AlertClose onClick={hide}>
          <IconButton name="x" />
        </AlertClose>
      )}
    </StyledAlert>
  );
};
