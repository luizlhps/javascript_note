import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Style } from './styles'

interface ListProps {
  handleList: (handleList: boolean) => void
}




const Hamburguer: React.FC<ListProps> = ({ handleList }) => {


  const [open, setOpen] = useState<boolean>(false)

  function handleClick() {
    setOpen(!open)
    handleList(!open);
  }
  return (
    <Style open={open} onClick={handleClick}>
      <div>
        <FontAwesomeIcon icon={faBars} color="white" />
      </div>
    </Style>
  )
}

export default Hamburguer