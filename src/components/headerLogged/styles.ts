
import styled from "styled-components";

interface NavProps {
  open?: boolean;
}


export const Container = styled.header`
    background: rgb(98, 79, 210);
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 60px;
    justify-content: space-between;

  .logoAndMenu{
    display: flex;
    align-items: center;
    cursor: pointer;
  }

`;

export const Nav = styled.nav<NavProps>`
  display: flex;
  
  
  a{

    color: white;
    text-decoration: none;
    transition:  0.8 ease;
}
  a:hover{
    color: rgb(89, 70, 280);;
  }
  


  @media (max-width: 768px) {
  
    ul{
      display: flex;
    }
        display: flex;
        flex-flow: column nowrap;
        transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
        background-color: rgb(98, 79, 210) ;
        position: fixed;
        top: 0px;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;

        a{
            padding: 1rem;
        }

        a:hover{
                color: grey;
            }
    }
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 20px;
`;


export const NavContainer = styled.div<NavProps>`




  ul:first-child{
    display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;  


  }

  ul>li:first-child{
    color: white;
    display: flex;
    border: 1px solid white;
    width: 130px;
    border-radius: 0.2rem;
    height: 35px;
    list-style: none;
    align-content: center;
    justify-content: center;
    align-items: center;
             
    }

  ul ul{
    display: NONE;
    @media (max-width: 768px) {display: flex;}
    
    background-color: rgb(98,79,210);
    list-style: none;
    position: absolute;
    top: 35px;
    width: 100%;
    left: 0;
    flex-direction: column;
    padding: 30px 0;
    align-items: center;
    border-radius: 0.4rem;

a{
    padding: 1rem;
}

    div{
      margin-top:20px;
      border-top: 1px solid white;
      color: white;
      padding-top:20px;
      li{ 
        cursor: pointer;
      }
     
    }
    li{
      margin-top: 20px;
    }

    li:first-child{
      margin-top:0;
    }
  }

  ul:hover{

    ul{
      display: flex;
    }
  }
  
  `

export const Menu = styled.div<NavProps>`
  
  padding: 10px;
  border: solid 1px white;
  border-radius: 0.3rem;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  `


/* element.style {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  width: 100px;
  border-radius: 0.2rem;
  height: 35px;
 */

/*   li
  element.style {
      position: absolute;
  } */


  // filhos

/* element.style {
  position: relative;
  top: 30px; */