import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './shared/routes/AppRoutes.tsx';
import Header from './shared/components/Header.tsx';
import Footer from './shared/components/Footer.tsx';
import { ThemeProvider } from '@emotion/react';
import { LightTheme, DarkTheme } from './shared/themes';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
