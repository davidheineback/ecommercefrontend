import React from 'react'
import { StyledTabSelect, StyledTabSelectWrap } from './TabSelectStyles'

function TabSelect({ tabNames, onClick }) {
  const setActiveTab = onClick

  function handleActiveTab ({ target }) {
    setActiveTab(target.innerText)
  }

  return (
    <StyledTabSelectWrap>
      {tabNames?.map((name, index) => <StyledTabSelect onClick={handleActiveTab} key={index}>{name}</StyledTabSelect>)}
    </StyledTabSelectWrap>
  )
}

export default TabSelect
