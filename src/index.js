import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Presentation } from './Components/Presentation';
import { ChakraProvider} from '@chakra-ui/react';
import theme from './theme'
import { Proyects } from './Components/Proyects/Proyects';
import { NavMain } from './Components/Nav/Nav';
import { SoftwareSkills } from './Components/SoftwareSkills/SoftwareSkills';
 
ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <NavMain />
      <Presentation />
      <SoftwareSkills />
      <Proyects />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

