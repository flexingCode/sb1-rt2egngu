import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../../contexts/AppContext';
import { Header } from './Header';

describe('Header Component', () => {
  it('renders group and site selectors', () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <Header />
        </AppProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Active Group:')).toBeInTheDocument();
    expect(screen.getByText('Active Site:')).toBeInTheDocument();
  });
});