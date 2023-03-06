import styled from "styled-components";


interface Containerprops{
  open: boolean;
}


export const Container = styled.header<Containerprops>`
    z-index: 3;

display: flex;
  
  
  a{
    margin: 0 5px;
    color: black;
    text-decoration: none;
}

  
  @media (max-width: 768px) {
    display: ${({open})=> open ? 'flex' : 'none'};
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    left: 0;


    }
`;


export default Container