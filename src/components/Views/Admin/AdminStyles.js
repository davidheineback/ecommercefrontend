import styled from 'styled-components'

export const StyledLogInContainer = styled.div`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 6.0px );
    -webkit-backdrop-filter: blur( 6.0px );
  width: 100%;
  min-height: inherit;
`

export const StyledInput = styled.input`
  width: 250px;
  padding: 0.3rem;
  border-radius: 50px;
  caret-color: rgba(0,0,0,0);
  text-align: center;
  appearance: none;
  background: inherit;
  border: transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 5px;
  &:focus {
    outline: none;
    background: white;
  } 
`