import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders input element by default', () => {
    render(<Input placeholder="Test Input" />);
    expect(screen.getByPlaceholderText('Test Input')).toBeInTheDocument();
  });

  it('renders textarea when as="textarea" is provided', () => {
    render(<Input as="textarea" placeholder="Test Textarea" />);
    const textarea = screen.getByPlaceholderText('Test Textarea');
    expect(textarea.tagName.toLowerCase()).toBe('textarea');
  });

  it('applies error styles when error prop is true', () => {
    const { container } = render(<Input error placeholder="Error Input" />);
    expect(container.firstChild).toHaveStyle({
      borderColor: '#dc3545'
    });
  });

  it('handles onChange event', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state', () => {
    render(<Input disabled placeholder="Disabled Input" />);
    expect(screen.getByPlaceholderText('Disabled Input')).toBeDisabled();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Input className="custom-class" placeholder="Custom Input" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('handles textarea rows prop', () => {
    render(<Input as="textarea" rows={4} placeholder="Textarea with rows" />);
    const textarea = screen.getByPlaceholderText('Textarea with rows');
    expect(textarea).toHaveAttribute('rows', '4');
  });
}); 