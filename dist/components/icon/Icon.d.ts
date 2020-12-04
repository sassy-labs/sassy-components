import React from 'react';
export interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
    name?: string;
    width?: string;
    height?: string;
    color?: string;
    src?: string;
    label?: string;
}
export declare const Icon: React.FC<Props>;
