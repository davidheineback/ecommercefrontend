import React from 'react'
import { StyledCustomerInfo } from './CustomerInfoStyles'
import { GlobalStateContext } from '../GlobalState/GlobalState'

function CustomerInfo() {
  const { customerInfo, setCustomerInfo } = React.useContext(GlobalStateContext)  

  function handleInput({ target }) {
    const type = target.attributes.filter.value
    setCustomerInfo(prev => ({...prev, [type]: target.value }))
  }

  return (
    <>
    <StyledCustomerInfo onChange={handleInput} filter='name' value={customerInfo?.name} placeholder='Name'/>
    <StyledCustomerInfo onChange={handleInput} filter='street' value={customerInfo?.street} placeholder='Street Address'/>
    <StyledCustomerInfo onChange={handleInput} filter='streetNr' value={customerInfo?.streetNr} placeholder='Street Number'/>
    <StyledCustomerInfo onChange={handleInput} filter='city' value={customerInfo?.city} placeholder='City'/>
    <StyledCustomerInfo onChange={handleInput} filter='phone' value={customerInfo?.phone} placeholder='Phone number'/>
    <StyledCustomerInfo onChange={handleInput} filter='email' value={customerInfo?.email} placeholder='Email'/>
    </>
  )
}

export default CustomerInfo
