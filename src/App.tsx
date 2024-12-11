import React from 'react';
import { Layout } from './components/layout';
import { AppRoutes } from './routes';
import { AppProvider } from './contexts/AppContext';
import { BreadcrumbProvider } from './contexts/BreadcrumbContext';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <BreadcrumbProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </BreadcrumbProvider>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;