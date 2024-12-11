import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AssignButton } from './AssignButton';

describe('AssignButton Component', () => {
  it('renders assign button', () => {
    render(<AssignButton />);
    expect(screen.getByText('Assign')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<AssignButton onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('Assign'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies correct styling', () => {
    render(<AssignButton />);
    const button = screen.getByText('Assign');
    
    const styles = window.getComputedStyle(button);
    expect(styles.backgroundColor).toBe('rgb(0, 73, 139)');
    expect(styles.color).toBe('rgb(255, 255, 255)');
  });
});