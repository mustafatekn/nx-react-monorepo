import styled from 'styled-components';
import { ReactNode } from 'react';

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 4px;
`;

interface PaginationItemProps {
  active?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

const PaginationItem = styled.li<PaginationItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 6px;
  border-radius: 4px;
  background-color: ${props => props.active ? '#007bff' : 'transparent'};
  color: ${props => props.active ? 'white' : props.disabled ? '#6c757d' : '#007bff'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
  
  &:hover:not([disabled]) {
    background-color: ${props => props.active ? '#007bff' : '#e9ecef'};
  }
`;

interface PaginationLinkProps {
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const PaginationLink = styled.button<PaginationLinkProps>`
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
  color: inherit;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:focus {
    outline: none;
  }
`;

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <PaginationContainer>
      <PaginationList>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            «
          </PaginationLink>
        </PaginationItem>
        
        {pages.map(page => (
          <PaginationItem key={page} active={page === currentPage}>
            <PaginationLink onClick={() => onPageChange(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            »
          </PaginationLink>
        </PaginationItem>
      </PaginationList>
    </PaginationContainer>
  );
}

export default Pagination; 