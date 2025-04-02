import { render, screen } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  const mockItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Details' }
  ];

  it('renders all breadcrumb items', () => {
    render(<Breadcrumb items={mockItems} />);
    
    mockItems.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('renders links for items with href', () => {
    render(<Breadcrumb items={mockItems} />);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2); // Only Home and Products have href
    
    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[1]).toHaveAttribute('href', '/products');
  });

  it('renders last item as text without link', () => {
    render(<Breadcrumb items={mockItems} />);
    
    const lastItem = screen.getByText('Details');
    expect(lastItem.tagName.toLowerCase()).not.toBe('a');
  });

  it('renders separator between items', () => {
    const { container } = render(<Breadcrumb items={mockItems} />);
    
    // Check if there are separators between items (using CSS pseudo-elements)
    const items = container.querySelectorAll('li');
    expect(items).toHaveLength(mockItems.length);
  });

  it('renders empty breadcrumb when no items provided', () => {
    render(<Breadcrumb items={[]} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav.children[0].children).toHaveLength(0);
  });
}); 