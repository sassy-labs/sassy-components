import React from 'react';
import { Variant } from '../../util/Variant.type';
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    isOpen?: boolean;
    isClosable?: boolean;
    variant?: Variant;
    duration?: number;
    children?: React.ReactChild;
    icon?: string;
}
export declare const Alert: React.FC<Props>;
