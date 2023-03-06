import styled from "styled-components";


export const Body = styled.div`

    margin: auto;
    max-width: 350px;
    min-height: 40vh;
    background-color: white;
    display: flex;
    padding: 3rem;
    box-shadow: 5px 5px 15px rgb(98, 60, 180);

    @media (max-width: 375px){
        width: 100%;
        box-shadow: none;
        margin-top: 10px;
    };

    @media (max-height: 600px){
        width: 100%;
        box-shadow: none;
        margin-top: 10px;
        margin-bottom: 10px;
    };
`;

export const Container = styled.div`

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;


  img{
    width: 16rem;
    margin-bottom: 25px;
  };

  span{
    margin-bottom: 25px;
  };

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    
        label{
        font-weight: bold;
        margin-bottom: 0.30rem;
    };

        input{
        margin-bottom: 20px;
        height: 40px;
     
    
    };
        input[type=name], input[type=email], input[type=password]{
        padding: 10px;
        border: 1px solid rgb(98, 79, 210);
        border-radius: 0.2rem;
    };

        input[type=name]:focus, input[type=email]:focus, input[type=password]:focus {
        outline: none;
        border-color: rgb(98, 79, 210);
        border-width: 2px;
 
        
    };


    
  };

`;



export const Footer = styled.div`

display: flex;
width: 100%;
justify-content: space-between;
align-items: center;

div{
  background-color: white;
        font-weight: bold;
        color: rgb(98, 79, 210);
        margin: 2px;
        border: none;
        width: 100px;
        padding: 10px;
        margin-top: 10px;
        cursor: pointer;
        display: flex;
      justify-content: center;

}
button:hover {
    background-color: rgb(98, 79, 210);
        color: white;
        border-radius: 0.2rem;
     };

button{
        background-color: white;
        font-weight: bold;
        color: rgb(98, 79, 210);
        margin: 2px;
        border: none;
        width: 100px;
        padding: 10px;
        margin-top: 10px;
        cursor: pointer;

   };


//seleciona elementos com base em sua posição em relação ao elemento pai,
   button {
        border: 1px solid rgb(98, 79, 210)!important;
        border-radius: 0.2rem;

     };



`