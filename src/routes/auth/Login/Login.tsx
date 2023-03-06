import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/header'
import * as Style from './style'
import * as Body from '../../Home/style'
import logo from '../../../assets/img/logo.png'
import { useNavigate } from "react-router-dom";
import UserService from '../../../services/users'
import { AuthContext } from '../../../contexts/AuthContext'




const Login:React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [redirectNotes, setredirectNotes] = useState<boolean>(false)
    const [error, serError] = useState<boolean>(false)
    const {getUserProfile} = useContext(AuthContext)
    let navigate = useNavigate();


    useEffect(() => {
        if(redirectNotes){
            navigate('/notes')
        }
        getUserProfile()

    }, [redirectNotes])
    

      
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const user = await UserService.login({
                email:email,
                password:password
            });
            setredirectNotes(true)
        } catch(error){
            serError(true)
        }
      }

    return (
        <>
            <Header />
            <Body.HomeBody>
                <Style.Body>
                    <Style.Container>
                        
                        <img src={logo} alt="" />
                        <span> SALVE CARAIO</span>
                        {error && <div>Password Or Email have problem</div> }
                        <form onSubmit={handleSubmit}>
                            
                            <label> Email </label>
                            <input
                                type='email'
                                required={true}
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label> Password </label>
                            <input
                                type='Password'
                                required={true}
                                name="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        
                        <Style.Footer>
                            <button type='submit' >Login or</button>
                            
                        </Style.Footer>
                        </form>
                    </Style.Container>
                </Style.Body>
            </Body.HomeBody>
        </>
    )
}

export default Login