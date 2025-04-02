import styled from 'styled-components';

interface ProgressProps {
  value: number;
  max?: number;
  color?: string;
}

const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ value: number; max: number; color: string }>`
  width: ${props => (props.value / props.max) * 100}%;
  height: 100%;
  background-color: ${props => props.color};
  transition: width 0.3s ease;
`;

export const Progress: React.FC<ProgressProps> = ({ 
  value, 
  max = 100, 
  color = '#1976d2' 
}) => {
  return (
    <ProgressContainer>
      <ProgressBar value={value} max={max} color={color} />
    </ProgressContainer>
  );
}; 