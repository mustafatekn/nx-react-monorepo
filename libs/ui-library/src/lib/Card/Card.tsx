import styled from 'styled-components';

const StyledCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #eee;
`;

export interface CardProps {
  children: React.ReactNode;
}

export interface CardHeaderProps {
  children: React.ReactNode;
}

export interface CardContentProps {
  children: React.ReactNode;
}

export interface CardFooterProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card; 