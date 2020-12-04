import React from 'react';
export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    name?: string;
    src?: string;
    label?: string;
    disabled?: boolean;
}
export declare const IconButton: React.FC<Props>;
