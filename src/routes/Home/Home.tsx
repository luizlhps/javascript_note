import React from 'react'
import * as Styled from './style'
import img from '../../assets/img/presentation.png'
import { Link } from 'react-router-dom'
import Header from '../../components/header'


const Home = () => {
  return (
    <>
    <Header/>
    <Styled.HomeBody>
      <Styled.Container>
        <div>
           <h1>Create notes easily and acess when you wants on the cloud</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum libero mollitia ea ab nobis recusandae expedita dolorem unde. 
            Natus repellendus laboriosam dolorum totam fugit quia hic, quae autem sunt!</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum libero mollitia ea ab nobis recusandae expedita dolorem unde. 
            Natus repellendus laboriosam dolorum totam fugit quia hic, quae autem sunt!</p>
           <Link to={`/register`}> <button>Register for free Now</button></Link>
           </div>

           <img src={img} alt="" />
      </Styled.Container>
    </Styled.HomeBody>
    </>
  )
}

export default Home