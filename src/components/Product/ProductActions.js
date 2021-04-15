import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Dot, Button } from '../Utilities/UtilitiesExporter'

const StyledProductAction = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 250px;
text-align: center;
justify-content: center;

${props => props.selectbox && {
  position: "relative",
  border: "1px solid lightgrey",
  boxShadow: "2px 2px 2px teal",
  cursor: "pointer",
  fontWeight: "700",
  marginBottom: "20px",
  fontSize: "14px",
  textTransform: "uppercase"
  }}
`

const StyledSelect = styled.div`
position: absolute;
border: 1px solid lightgray;
cursor: pointer;
font-weight: 700;
width: 38%;
margin-left: 0.8%;
margin-top: 10px;
`
const StyledOption = styled.div`
border: 0;
background: linear-gradient(90deg, rgba(180,180,180,0.60) 0%, rgba(172,172,172,0.53) 43%, rgba(167,165,165,0.57) 61%);
backdrop-filter: brightness(150%) saturate(150%) blur(5px);
background-clip: padding-box;
cursor: pointer;
font-weight: 700;
padding: 0.5rem 0.5rem;
text-shadow: 2px 2px 2px white;
z-index: 10000;
&:hover {
background: ${props => props.theme.colors.main};
opacity: 0.8;
color: ${props => props.theme.fontColors.mainHover};
text-shadow: none;
}
`

const StyledCounter = styled.div`
  justify-content: left;
  align-items: left;
  padding: 10px;
  width: 120px;
  margin-bottom: 10px;
`
const StyledNumber = styled.div`
display: inline-flex;
position: relative;
z-index: -1;
margin-left: 8px;
width: 30px;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
background: linear-gradient(90deg, rgba(180,180,180,0.60) 0%, rgba(172,172,172,0.53) 43%, rgba(167,165,165,0.57) 61%);
backdrop-filter: brightness(150%) saturate(150%) blur(5px);
background-clip: padding-box;
color: rgba(0, 0, 0, 0.7);
`


function ProductActions({ children }) {
  const [arrowDirection, setArrowDirection] = useState('down')
  const [arrowToggle, setArrowToggle] = useState(false)
  const [option, setOption] = useState('Choose type')
  const [numberOfItems, setNumberOfItems] = useState(1)

  useEffect(() => {
    arrowToggle ? setArrowDirection('up') : setArrowDirection('down')
  }, [arrowToggle])

  useEffect(() => {
    numberOfItems < 1 && setNumberOfItems(1)
  }, [numberOfItems])

  return (
    <StyledProductAction>
      {children.options && children.options.length > 0 && 
      <>
      <StyledProductAction onClick={() => setArrowToggle(!arrowToggle)} selectbox>
        {option}
      <Dot arrowDirection={arrowDirection}>{`<`}</Dot></StyledProductAction>
      {arrowToggle &&
      <StyledSelect>{children.options.map((child, index) =>
        <StyledOption
          key={index}
          onClick={() => {
            setArrowToggle(false)
            setOption(child)
          }} 
          val={index}>
            {child}
        </StyledOption>)}
        {option !== 'Choose type' &&
        <StyledOption
        onClick={() => {
          setArrowToggle(false)
          setOption('Choose type')
        }}>
        unselect
      </StyledOption>
        }
      </StyledSelect>}
      </>
      }
      <StyledCounter>
      <Dot
      onClick={() => setNumberOfItems(numberOfItems - 1)}
      btnType={'counterBtn'}>-</Dot>
      <StyledNumber>{numberOfItems}</StyledNumber>
      <Dot
      onClick={() => setNumberOfItems(numberOfItems + 1)}
      btnType={'counterBtn'}>+</Dot>
      </StyledCounter>
      {children.inStock ? <Button btnType={'primary'}>Add to cart</Button> :
      <Button btnType={'disabled'}>Sold out!</Button>
      }
    </StyledProductAction>
  )
}

export default ProductActions
