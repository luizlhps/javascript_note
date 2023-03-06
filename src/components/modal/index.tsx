import React, { ReactNode } from 'react';
import * as ModalStyles from './styles';


interface Modalprops{
    children:ReactNode;
    open: boolean;
  }

const Modal: React.FC<Modalprops> = ({ children, open }) => {
    return (
        <ModalStyles.Container open={open} >
        {children}
      </ModalStyles.Container>
    )
}


export default Modal