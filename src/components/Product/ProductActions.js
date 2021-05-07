import React, { useState, useEffect } from 'react'
import { Dot, Button } from '../Utilities/UtilitiesExporter'
import { GlobalStateContext } from '../GlobalState/GlobalState'
import { StyledProductAction, StyledSelect, StyledOption, StyledActionCounter, StyledNumber } from './ProductStyles'

function ProductActions({ children }) {
  const { itemsInCart, setItemsInCart, setProductAddedToCart, productAddedToCart } = React.useContext(GlobalStateContext)
  const [arrowDirection, setArrowDirection] = useState('down')
  const [arrowToggle, setArrowToggle] = useState(false)
  const [option, setOption] = useState('Choose type')
  const [numberOfItems, setNumberOfItems] = useState(1)

  function handleItemsInCart() {
    setProductAddedToCart(true)
    const currentIndex  = itemsInCart.findIndex(product => product.product.itemNr === children.itemNr)
      if (currentIndex >= 0) {
        const newArray = [...itemsInCart]
        newArray[currentIndex].numberInCart += numberOfItems
        setItemsInCart(newArray)
      } else {
        const newProduct = {product: children, numberInCart: numberOfItems}
        setItemsInCart(prev => [...prev, newProduct])
      }
  }

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
      {children.inStock ? 
      <>
      <StyledActionCounter>
      <Dot
      onClick={() => setNumberOfItems(numberOfItems - 1)}
      btnType={'counterBtn'}>-</Dot>
      <StyledNumber>{numberOfItems}</StyledNumber>
      <Dot
      onClick={() => setNumberOfItems(numberOfItems + 1)}
      btnType={'counterBtn'}>+</Dot>
      </StyledActionCounter>
      <Button onClick={() => {
        handleItemsInCart()
      }} btnType={productAddedToCart ? 'addedProduct' : 'primary'}>{productAddedToCart ? 'Product added!' : 'Add to cart'}</Button></>
      : <Button btnType={'disabled'}>Sold out!</Button>
      }
    </StyledProductAction>
  )
}

export default ProductActions
