import React from 'react';
export interface SassyThemeProviderProps {
    mode?: 'light' | 'dark';
    theme?: any;
    children?: React.ReactChild;
}
export interface makeSassyChildInterface extends React.ComponentClass<{
    theme: any;
}> {
}
export declare const makeSassy: (Child: makeSassyChildInterface) => ({ ...props }: {
    [x: string]: any;
}) => JSX.Element;
export declare const SassyThemeProvider: React.FC<SassyThemeProviderProps>;
