import styled from 'styled-components';

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const BreadcrumbList = styled.ol`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BreadcrumbItem = styled.li<{ children?: React.ReactNode }>`
  display: flex;
  align-items: center;
  
  &:not(:last-child)::after {
    content: '/';
    margin: 0 8px;
    color: #6c757d;
  }
`;

const BreadcrumbLink = styled.a<{ href: string; children?: React.ReactNode }>`
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BreadcrumbText = styled.span<{ children?: React.ReactNode }>`
  color: #6c757d;
`;

export interface BreadcrumbItemInterface {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItemInterface[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.href ? (
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            ) : (
              <BreadcrumbText>{item.label}</BreadcrumbText>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
}

export default Breadcrumb; 