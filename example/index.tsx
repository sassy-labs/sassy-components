import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Alert } from '../dist/components';
import { SassyThemeProvider } from '../dist/themes';

const App = () => {
  return (
    <SassyThemeProvider>
      <Alert duration={3000} isClosable isOpen icon="info-circle">
        <p>Hello there</p>
      </Alert>
    </SassyThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
