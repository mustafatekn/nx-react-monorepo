import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { vi } from 'vitest';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: 'rgb(0, 123, 255)',
      color: 'rgb(255, 255, 255)',
      padding: '8px 16px',
      borderRadius: '4px'
    });
  });

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: 'rgb(108, 117, 125)'
    });
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 