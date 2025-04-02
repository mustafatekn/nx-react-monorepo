import React from 'react';
import styled from 'styled-components';

interface StyledContainerProps {
  fluid?: boolean;
  children?: React.ReactNode;
  className?: string;
}

interface ContainerContentProps {
  fluid?: boolean;
  children?: React.ReactNode;
}

const StyledContainer = styled.div<StyledContainerProps>`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const ContainerContent = styled.div<ContainerContentProps>`
  max-width: ${props => props.fluid ? 'none' : '1200px'};
  margin: 0 auto;
  width: 100%;
  padding: ${props => props.fluid ? '0' : 'inherit'};
`;

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  fluid = false 
}) => {
  return (
    <StyledContainer className={className} fluid={fluid}>
      <ContainerContent fluid={fluid}>
        {children}
      </ContainerContent>
    </StyledContainer>
  );
}; 