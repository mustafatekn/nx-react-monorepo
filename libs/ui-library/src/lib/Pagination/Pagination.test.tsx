import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from './Pagination';
import { vi } from 'vitest';

describe('Pagination', () => {
  const mockOnPageChange = vi.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  it('renders correct number of pages', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);
    
    const pageButtons = screen.getAllByRole('button');
    expect(pageButtons).toHaveLength(7); // 5 pages + prev + next
  });

  it('highlights current page', () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />);
    
    const currentPageButton = screen.getByText('3');
    expect(currentPageButton.parentElement).toHaveStyle({ backgroundColor: '#007bff' });
  });

  it('disables previous button on first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);
    
    const prevButton = screen.getByText('«');
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={mockOnPageChange} />);
    
    const nextButton = screen.getByText('»');
    expect(nextButton).toBeDisabled();
  });

  it('calls onPageChange when clicking page numbers', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);
    
    const pageButton = screen.getByText('2');
    fireEvent.click(pageButton);
    
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when clicking previous and next buttons', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} />);
    
    const prevButton = screen.getByText('«');
    const nextButton = screen.getByText('»');
    
    fireEvent.click(prevButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
    
    fireEvent.click(nextButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });
}); 