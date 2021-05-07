import styled from 'styled-components'

export const StyledCart = styled.img`
position: absolute;
top: 55%;
right: 90px;
width: 40px;
height: 40px;
cursor: pointer;
`

export const StyledCounter = styled.div`
appearance: none;
border: 0;
border-radius: 50%;
box-shadow: none;
cursor: pointer;
font-weight: 700;
padding: 7px;
font-size: 15px;
background: ${props => props.theme.colors.borderGradient};
color: ${props => props.theme.fontColors.main};
width: 15px;
height: 15px;
display: table-cell;
vertical-align: middle;
position: absolute;
top: 45%;
z-index: 10;
right: 115px;
`