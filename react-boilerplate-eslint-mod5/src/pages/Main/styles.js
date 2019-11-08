import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 45px;
  color: ${props => (props.error ? 'red' : '#FFF')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 22px;
    color: #333;
  }
`;
