import React, { useEffect, useState } from 'react';
import { Icon } from '../icon/Icon';
import { IconButton } from '../iconButton/IconButton';

import { Variant } from '../../util/Variant.type';
import { StyledAlert, AlertIcon, AlertMessage, AlertClose } from './styles';
import { StyledComponent } from 'styled-components';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  isClosable?: boolean;
  variant?: Variant;
  duration?: number;
  onClose?: () => {};
  onShow?: () => {};
}

const defaultProps: Props = {
  isOpen: true,
  isClosable: true,
  variant: 'primary',
  duration: 5000,
};

type Alert = React.ForwardRefExoticComponent<Props> & {
  Icon: StyledComponent<typeof Icon, any, {}, never>;
  Message: StyledComponent<React.FC, any, {}, never>;
};

const Alert = (React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const {
    isOpen,
    isClosable,
    variant,
    duration,
    children,
    onClose,
    onShow,
    ...otherProps
  } = props;

  const [autoHideTimeout, setAutoHideTimeout] = useState<number>();
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const hide = (): void => {
    setIsShowing(false);
    clearTimeout(autoHideTimeout);
    onClose && onClose();
  };

  const restartAutoHide = (): void => {
    if (autoHideTimeout !== undefined) clearTimeout(autoHideTimeout);
    if (duration !== Infinity) setAutoHideTimeout(setTimeout(hide, duration));
  };

  const show = (): void => {
    if (isOpen) {
      restartAutoHide();
      setIsShowing(true);
      onShow && onShow();
    }
  };

  useEffect(() => {
    show();
    return () => clearTimeout(autoHideTimeout);
  }, []);

  return (
    <StyledAlert
      ref={ref}
      variant={variant}
      hidden={!isShowing}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      aria-hidden={!isShowing}
      onMouseMove={restartAutoHide}
      {...otherProps}
    >
      {children}

      {isClosable && (
        <AlertClose onClick={hide}>
          <IconButton name="x" />
        </AlertClose>
      )}
    </StyledAlert>
  );
}) as unknown) as Alert;

AlertIcon.displayName = 'Alert.Icon';
AlertMessage.displayName = 'Alert.Message';

Alert.displayName = 'Alert';
Alert.defaultProps = defaultProps;
Alert.Icon = AlertIcon;
Alert.Message = AlertMessage;

export { Alert };
