import React, { useContext, useEffect, useState } from 'react'
import * as HeaderStyles from './styles'
import logo from "../../assets/img/logo-white.png"
import Modal from '../modal'
import Hamburguer from './Hamburguer'
import BurguerList from './BurguerList'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


interface HeaderProps {
    handleListMenu: (isOpen: boolean) => void
}


const Header: React.FC<HeaderProps> = ({ handleListMenu }) => {
    const { user, logout, } = useContext(AuthContext)
    const [open, setOpen,] = useState<boolean>(false)
    const [listOpen, setListOpen,] = useState<boolean>(false)


    //parte do nav
    const handleResult = (result: boolean) => {
        setOpen(result)
    }

    //menu lado esquerdo
    const handleList = (result: boolean) => {
        setListOpen(result)
        console.log(listOpen)
        handleListMenu(result)
    }



    let navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }


    return (
        <HeaderStyles.Container>
            <div className="logoAndMenu">
                <Link to={`/notes`}>
                    <HeaderStyles.Logo src={logo} alt="Logo" />
                </Link>
                <BurguerList handleList={handleList} />
            </div>

            <Hamburguer handleResult={handleResult} />
            <Modal open={open}>
                <HeaderStyles.Nav open={open} >
                    <HeaderStyles.NavContainer>
                        <div>
                            <ul>
                                <li className='test'>{user?.name.toUpperCase()}</li>
                                <ul>
                                    <Link to={`/register`}> <li>Perfil</li></Link>
                                    <Link to={`/notes`}><li>Notas</li></Link>
                                    <div onClick={handleLogout}><li>Logout</li></div>
                                </ul>
                            </ul>
                        </div>
                    </HeaderStyles.NavContainer>
                </HeaderStyles.Nav>
            </Modal>
        </HeaderStyles.Container>

    )
}

export default Header
