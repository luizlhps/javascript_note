import styled from "styled-components";

interface NavProps  {
  open?: boolean;
}


export const Container = styled.header`
    background: white;
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 60px;
    justify-content: space-between;



`;

export const Nav = styled.nav<NavProps>`
  display: flex;
  
  
  a{
    font-weight: 300;
    margin: 0 5px;
    color: rgb(98, 79, 210);;
    text-decoration: none;
    transition:  0.8 ease;
}
  a:hover{
    color: rgb(89, 70, 280);;
  }


  @media (max-width: 768px) {
  
        display: flex;
        flex-flow: column nowrap;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        background-color: white ;
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