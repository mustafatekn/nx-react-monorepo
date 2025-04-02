import styled from 'styled-components';

const StyledInput = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${props => props.error ? '#dc3545' : '#ced4da'};
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.15s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#dc3545' : '#80bdff'};
    box-shadow: 0 0 0 0.2rem ${props => props.error ? 'rgba(220, 53, 69, 0.25)' : 'rgba(0, 123, 255, 0.25)'};
  }
  
  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
`;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error, ...props }: InputProps) {
  return <StyledInput error={error} {...props} />;
}

export default Input; 