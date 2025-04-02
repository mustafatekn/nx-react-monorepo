import styled from 'styled-components';

const StyledButton = styled.button<{ variant?: 'primary' | 'secondary'; children: React.ReactNode }>`
  padding: 8px 16px;
  background-color: ${props => props.variant === 'secondary' ? '#6c757d' : '#007bff'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.variant === 'secondary' ? '#5a6268' : '#0056b3'};
  }
`;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return <StyledButton variant={variant} {...props}>{children}</StyledButton>;
}

export default Button; 