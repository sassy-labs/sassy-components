import React from 'react';
import { Icon } from '../icon/Icon';
import { Variant } from '../../util/Variant.type';
import { StyledComponent } from 'styled-components';
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isClosable?: boolean;
    variant?: Variant;
    duration?: number;
    onClose?: () => {};
    onShow?: () => {};
}
declare type Alert = React.ForwardRefExoticComponent<Props> & {
    Icon: StyledComponent<typeof Icon, any, {}, never>;
    Message: StyledComponent<React.FC, any, {}, never>;
};
declare const Alert: Alert;
export { Alert };
