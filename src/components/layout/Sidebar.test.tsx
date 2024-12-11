import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { AppProvider } from '../../contexts/AppContext';

describe('Sidebar Component', () => {
  it('renders navigation menu items', () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <Sidebar />
        </AppProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Sites')).toBeInTheDocument();
    expect(screen.getByText('Org Development')).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <Sidebar />
        </AppProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Onboardian')).toBeInTheDocument();
  });
});