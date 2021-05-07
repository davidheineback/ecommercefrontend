import styled from 'styled-components';

 export const StyledBurger = styled.button`
  position: absolute;
  top: 55%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.theme.fontColors.main};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`