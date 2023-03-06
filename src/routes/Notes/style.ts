import styled from 'styled-components'

const headerHeightValue = 60;

interface StyleProps {
  menuOpen?: boolean;
  active?: boolean;
}

export const NotesBody = styled.div<StyleProps>`

  background-color: white;
  width: 100%;
  min-height: calc(100vh - ${headerHeightValue}px);
  display: flex;
  h1{
    color:black;
  }

`
export const Container = styled.div<StyleProps>`
  margin-left: ${({ menuOpen }) => (menuOpen ? "300px" : "0")};
  transition: ease 0.4s ;



  @media (max-height: 600px){

  }
  @media (max-width: 1100px) {
    flex-direction: column;

  }

  @media (max-width: 768px) {

  }

  @media (max-width: 438px) {
    
    }
  
  @media (max-width: 280px) {
    

  }
`;



export const LeftMenu = styled.div<StyleProps>`
    display: flex;
    flex-flow: column nowrap;
    transform: ${({ menuOpen }) => menuOpen ? 'translatex(0)' : 'translatex(-100%)'};
    background-color: rgb(98, 79, 210) ;
    position: fixed;
    left: 0;
    height: 100%;
    width: 300px;
    transition: ease 0.4s ;

    .leftMenuContainer{
    overflow: auto;
    height: 90%;
}
    a{
    padding: 1rem;
    }

    a:hover{
      color: grey;
    }

    .top{
    background-color: rgb(98,79,210);

}


`


export const Search = styled.div`
width: 90%;
height: 100px;
display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom:20px;
    border-bottom: solid 3px white;

div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
}

button{
 color: rgb(98,79,210);
  margin-top: 3px;
  width: 60px;
  height: 20px;
  background-color: white;
  border-radius: 0.2em;
  border: none;
  align-self: flex-end;
}

button:hover{
  background-color:rgb(98,79,210);
  border: 1px solid white;
  color: white;
}

h3{
  color: white;
}

input{
      width: 93%;
    height: 42px;
    border: none;
    background-color: transparent;
    color: white;
    
}

input::placeholder {
  color: white;
}
input:focus{
  outline: 0;
}


`

export const LeftMenuContainer = styled.div`
margin-left:20px;


`


export const Card = styled.div<StyleProps>`
 
 background-color: ${({ active }) => active ? '#4f3e9f' : 'rgb(98,79,210)'};
      padding: 20px;

      h3{
        margin-bottom:2px;
        color: white;
      }

      p{
        color: #c7ceff;
      }

      .footer{
        margin-top: 15px;
        background-color: white;
        border-radius: 2px;
        width: 45px;
        display: flex;
        justify-content: center;
      }

      .trash{
        margin-top: 10px;
        width: 10px;
        color: white;
        cursor: pointer;
      }

      span{
        font-weight: bolder;
        color: rgb(98,79,210);
      }
    
    :hover{
      background-color: #4f3e9f;
    }

`
