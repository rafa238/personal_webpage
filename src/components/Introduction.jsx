import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Introduction = () => {
  const { greeting, description } = useContext(DataContext);
  
  return (
    <>
      <div>{ greeting }</div>
      <p>{ description }</p>
    </>
  )
}
