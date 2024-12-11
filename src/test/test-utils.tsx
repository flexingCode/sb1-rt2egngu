import React, { PropsWithChildren } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../contexts/AppContext';
import { BreadcrumbProvider } from '../contexts/BreadcrumbContext';
import { theme } from '../theme';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <BreadcrumbProvider>
            {children}
          </BreadcrumbProvider>
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const customRender = (ui: React.ReactElement, options = {}) =>
  rtlRender(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };