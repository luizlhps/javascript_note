import React, { useEffect, useState } from 'react'
import Header from '../../../components/header'
import * as Style from './style'
import * as Body from '../../Home/style'
import logo from '../../../assets/img/logo.png'
import { useNavigate } from "react-router-dom";
import UserService from '../../../services/users'



const Register:React.FC = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [redirectLogin, setRedirectLogin] = useState<boolean>(false)
    const [error, serError] = useState<boolean>(false)

    let navigate = useNavigate();

    async function handleClick () {
        setRedirectLogin(true);
    }

      useEffect(() => {
        if (redirectLogin) {
          navigate('/login');
        }
      }, [redirectLogin, navigate]);

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const user = await UserService.register({
                name:name,
                email:email,
                password:password
            });
            setRedirectLogin(true)
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
                        <span> Your notes on the cloud</span>
                        {error && <div>Password Or Email have problem</div> }
                        <form onSubmit={handleSubmit}>
                            <label> Name </label>
                            <input
                                type='name'
                                required={true}
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
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
                            <div onClick={handleClick}>Login or</div>
                            <button type='submit'>Register</button>
                            
                        </Style.Footer>
                        </form>
                    </Style.Container>
                </Style.Body>
            </Body.HomeBody>
        </>
    )
}

export default Register