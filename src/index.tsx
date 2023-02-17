import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {ChakraProvider, extendTheme} from '@chakra-ui/react';


const colors = {
  brand: {
    900: '#024fc9',
    800: '#146af5',
    700: '#2977f2',
    600: '#337df2',
    500: '#4287f5'
  }
}

const fonts = {
  body: 'Tahoma',
  heading: 'Courier New'
}


//Creating custom theme
const theme = extendTheme({
  colors, fonts
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

      {/* pass theme prop for custom theme */}
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
  </React.StrictMode>
);

