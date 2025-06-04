import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './shared/routes/AppRoutes.tsx';
import Header from './shared/components/Header.tsx';
import Footer from './shared/components/Footer.tsx';
import { ThemeProvider } from '@emotion/react';
import { LightTheme, DarkTheme } from './shared/themes';
import { ThemeContext } from './shared/contexts/ThemeContext.ts';

function App() {

  return (
    <ThemeContext.Provider value={{themeName: 'light'}}>
      <ThemeProvider theme={DarkTheme}>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
