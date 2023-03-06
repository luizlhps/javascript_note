import React, { useState } from 'react'
import { Style } from './styles'

interface HamburguerProps {
  handleResult: (isOpen: boolean) => void
}




const Hamburguer: React.FC<HamburguerProps> = ({ handleResult }) => {


  const [open, setOpen] = useState<boolean>(false)

  function handleClick() {
    setOpen(!open)
    handleResult(!open);
  }
  return (
    <Style open={open} onClick={handleClick}>
      <div />
      <div />
      <div />
    </Style>
  )
}

export default Hamburguer