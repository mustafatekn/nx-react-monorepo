import React from 'react';
import styled from 'styled-components';

interface StyledCardProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  role?: string;
}

const StyledCard = styled.div<StyledCardProps>`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
`;

const StyledCardHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const StyledCardContent = styled.div`
  padding: 16px;
`;

const StyledCardFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #eee;
`;

export interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
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

export function CardHeader({ children }: CardHeaderProps) {
  return <StyledCardHeader>{children}</StyledCardHeader>;
}

export function CardContent({ children }: CardContentProps) {
  return <StyledCardContent>{children}</StyledCardContent>;
}

export function CardFooter({ children }: CardFooterProps) {
  return <StyledCardFooter>{children}</StyledCardFooter>;
}

export function Card({ children, onClick, className }: CardProps) {
  return (
    <StyledCard 
      onClick={onClick}
      className={className}
      role={onClick ? 'button' : undefined}
    >
      {children}
    </StyledCard>
  );
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card; 