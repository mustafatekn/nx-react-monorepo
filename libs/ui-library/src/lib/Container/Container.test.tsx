import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(
      <Container>
        <div>Test Content</div>
      </Container>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Content</div>
      </Container>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies fluid styles when fluid prop is true', () => {
    const { container } = render(
      <Container fluid>
        <div>Fluid Content</div>
      </Container>
    );
    
    const containerContent = container.firstChild?.firstChild;
    expect(containerContent).toHaveStyle({
      maxWidth: 'none',
      padding: '0'
    });
  });

  it('applies default styles when fluid prop is false', () => {
    const { container } = render(
      <Container>
        <div>Default Content</div>
      </Container>
    );
    
    const containerContent = container.firstChild?.firstChild;
    expect(containerContent).toHaveStyle({
      maxWidth: '1200px'
    });
  });
}); 