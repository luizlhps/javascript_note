import React, { useState } from 'react'
import * as HeaderStyles from './styles'
import logo from "./logo.png"
import Modal from '../modal'
import Hamburguer from './Hamburguer'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {

    const [open, setOpen] = useState<boolean>(false)

    const handleResult = (result: boolean) => {
        setOpen(result)
    }



    return (

        <HeaderStyles.Container>
            <Link to={`/`}><HeaderStyles.Logo src={logo} alt="Logo" /></Link>

            <Hamburguer handleResult={handleResult} />
            <Modal open={open}>
            <HeaderStyles.Nav open={open} >

                <Link to={`/register`}>Register</Link>
                <Link to={`/login`}>Login</Link>

            </HeaderStyles.Nav>
            </Modal>
        </HeaderStyles.Container>

    )
}

export default Header
