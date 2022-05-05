import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Presentation } from './Components/Presentation';
import { ChakraProvider} from '@chakra-ui/react';
import theme from './theme'
 
ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Presentation />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

