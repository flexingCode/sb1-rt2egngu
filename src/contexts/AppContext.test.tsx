import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppProvider, useApp } from './AppContext';

const TestComponent = () => {
  const { activeBusinessGroup, activeSite } = useApp();
  return (
    <div>
      <div data-testid="group-name">
        {activeBusinessGroup?.name || 'No Group'}
      </div>
      <div data-testid="site-name">
        {activeSite?.name || 'No Site'}
      </div>
    </div>
  );
};

describe('AppContext', () => {
  it('provides initial context values', () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    // Initial values should be Premier Automotive and Premier Nissan of Metairie
    expect(screen.getByTestId('group-name')).toHaveTextContent('Premier Automotive');
    expect(screen.getByTestId('site-name')).toHaveTextContent('Premier Nissan of Metairie');
  });
});