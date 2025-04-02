import styled, { css } from 'styled-components';

const commonStyles = css<{ error?: boolean }>`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${props => props.error ? '#dc3545' : '#ced4da'};
  border-radius: 8px;
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

const StyledInput = styled.input<{ error?: boolean }>`
  ${commonStyles}
`;

const StyledTextarea = styled.textarea<{ error?: boolean }>`
  ${commonStyles}
  min-height: 100px;
  resize: vertical;
`;

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'as'> {
  error?: boolean;
  as?: React.ElementType;
}

export function Input({ error, as, ...props }: InputProps) {
  const Component = as === 'textarea' ? StyledTextarea : StyledInput;
  return <Component error={error} {...props} />;
}

export default Input; 