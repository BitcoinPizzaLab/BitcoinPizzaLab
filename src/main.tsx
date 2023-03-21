import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import {
  Routes,
  Route,
  Router,
  BrowserRouter,
} from "react-router-dom";

import { Fonts, theme } from './theme'
import { Container } from './components/Container';
import Index from './pages/Index';
import Gallery from './pages/Gallery';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="" element={<Index />}></Route>
            <Route path="gallery" element={<Gallery />}></Route>
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
    {/* <ParticleCollisionBackground /> */}
  </React.StrictMode>,
)
