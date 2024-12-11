import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BreadcrumbProvider, useBreadcrumbs } from './BreadcrumbContext';

const TestComponent = () => {
  const { breadcrumbs } = useBreadcrumbs();
  return (
    <div>
      {breadcrumbs.map((crumb, index) => (
        <span key={index} data-testid={`crumb-${index}`}>{crumb}</span>
      ))}
    </div>
  );
};

describe('BreadcrumbContext', () => {
  it('provides initial breadcrumbs', () => {
    render(
      <BreadcrumbProvider>
        <TestComponent />
      </BreadcrumbProvider>
    );

    expect(screen.getByTestId('crumb-0')).toHaveTextContent('Dashboard');
  });
});