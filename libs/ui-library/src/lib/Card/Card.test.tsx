import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <div>Test Content</div>
      </Card>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('handles onClick event', () => {
    const handleClick = vi.fn();
    render(
      <Card onClick={handleClick}>
        <div>Test Content</div>
      </Card>
    );
    const card = screen.getByText('Test Content').parentElement;
    card?.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('adds button role when onClick is provided', () => {
    render(
      <Card onClick={() => console.log('clicked')}>
        <div>Test Content</div>
      </Card>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('does not add button role when onClick is not provided', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});

describe('Card.Header', () => {
  it('renders header content correctly', () => {
    render(
      <Card.Header>
        <div>Header Content</div>
      </Card.Header>
    );
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });
});

describe('Card.Content', () => {
  it('renders content correctly', () => {
    render(
      <Card.Content>
        <div>Main Content</div>
      </Card.Content>
    );
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });
});

describe('Card.Footer', () => {
  it('renders footer content correctly', () => {
    render(
      <Card.Footer>
        <button>Footer Button</button>
      </Card.Footer>
    );
    expect(screen.getByText('Footer Button')).toBeInTheDocument();
  });
});

describe('Card Composition', () => {
  it('renders full card structure correctly', () => {
    render(
      <Card>
        <Card.Header>
          <h2>Card Title</h2>
        </Card.Header>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
          <button>Action</button>
        </Card.Footer>
      </Card>
    );

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });
}); 