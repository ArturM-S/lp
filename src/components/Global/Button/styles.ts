import styled from '@emotion/styled';

interface ContainerProps {
  variant?: 'default' | 'filled';
}

export const Container = styled.button<ContainerProps>`
  width: 157px;
  height: 52px;
  background: ${props =>
    props.variant === 'filled' ? '#00613c' : 'transparent'};
    color: ${props =>
      props.variant === 'filled' ? 'white' : '#00613c'};

  border: 2px solid #00613c;
  border-radius: 20px;

  transition: 0.2s;

  &:hover {
    box-shadow: 5px 10px 10px 10px rgba(0, 0, 51, 0.08);
    color: ${props =>
      props.variant === 'filled' ? '#00613c' : 'white'};
    background: ${props =>
      props.variant === 'filled' ? 'transparent' : '#00613c'};
  }
`;
