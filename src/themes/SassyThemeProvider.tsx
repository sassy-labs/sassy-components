import React from 'react';
import { ThemeProvider } from 'styled-components';

import LightMode from './light';
import DarkMode from './dark';
import core from './core';

const SassyContext = React.createContext({});

export interface SassyThemeProviderProps {
  mode?: 'light' | 'dark';
  theme?: any;
  children?: React.ReactChild;
}

export interface makeSassyChildInterface
  extends React.ComponentClass<{ theme: any }> {}

export const makeSassy = (Child: makeSassyChildInterface) => ({ ...props }) => (
  <SassyContext.Consumer>
    {value => <Child theme={value} {...props} />}
  </SassyContext.Consumer>
);

export const SassyThemeProvider: React.FC<SassyThemeProviderProps> = ({
  mode = 'light',
  theme,
  children
}) => (
  <ThemeProvider
    theme={() => ({
      sassy: {
        ...(mode === 'light' ? LightMode : DarkMode),
        ...theme,
        ...core
      }
    })}
  >
    {children}
  </ThemeProvider>
);
