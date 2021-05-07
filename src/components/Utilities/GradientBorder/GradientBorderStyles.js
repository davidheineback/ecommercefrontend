import styled from 'styled-components'

export const StyledGradientBorder = styled.div`
  height: 5px;
  width: 100%;
  background: ${props => props.theme.colors.borderGradient};

  ${props => props.fit !== undefined && {
    height: "fit-content",
    color: props.theme.fontColors.main,
    marginBottom: "0",
    textShadow: "2px 2px 2px black",
    boxShadow: "2px 2px 2px grey"
  }}
`

