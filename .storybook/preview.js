import React from 'react';
import { SassyThemeProvider } from '../src/themes/SassyThemeProvider';

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <SassyThemeProvider>
        <Story />
      </SassyThemeProvider>
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};
