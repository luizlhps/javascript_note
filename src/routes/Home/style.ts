import styled from 'styled-components'

const headerHeightValue = 60;

export const HomeBody = styled.div`

  background-color: rgb(98, 79, 210);
  width: 100%;
  min-height: calc(100vh - ${headerHeightValue}px);
  display: flex;

`
export const Container = styled.div`

    /* background: red ; */
    
 
    display: flex;
    margin: 0 auto ;
    align-items: center;
    flex-flow: flex wrap;
    min-width: 80%;
    justify-content: center;
    min-height: calc(100vh - ${headerHeightValue}px - 80px);



    img{
        min-width: 424px;
        width: 40%;
    }

    div {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    max-width: 450px;
    margin: 0 80px;
    

    
    


    button{
        background-color: rgb(98, 79, 210);
        font-weight: bold;
        color: white;
        border: 1px solid white;
        border-radius: 0.2rem;
        width: 200px;
        padding: 10px;
        margin-top: 10px;
        cursor: pointer;

    };

    button:hover{
        background-color: white;
        color: rgb(98, 79, 210);
        border: 1px solid white;
        transition:  0.8s ease;

    }

    h1 {
      margin-bottom: 10px;
      color: white;
      font-size: 38px;
    }

    p{
        margin: 10px 0 ;
        color: white;
    }
  }

  @media (max-height: 600px){

margin-top: 40px;
margin-bottom: 40px;
};

  @media (max-width: 1100px) {
    flex-direction: column;

    div {
   
      max-width: 450px;
      text-align: left;
      align-items: center;
      
      button{
        width: 100%;
      }
    }
    
  }

  @media (max-width: 768px) {
    img {
    
      width: 60%;
    }

    h1 {
      color: white;
      font-size: 30px!important;
    }

    div {
      margin: 0 30px;
      align-items: center;

      button{
        width: 100%;
    }
    }


  }

  @media (max-width: 438px) {
    
    img {
    min-width: 200px;
      width: 80%;
    }
    
    h1 {
      color: white;
      font-size: 28px!important;
    }

    div {
    margin: 0 30px;
    max-width: 100%;
    align-items: center;


      button{
        width: 100%;
    }
    }
  }
  @media (max-width: 280px) {
    
    img {
    min-width: 200px;
      width: 80%;
    }
    
    h1 {
        margin-top:22px;
      color: white;
      font-size: 20px!important;
    }

    div {
    margin: 0 30px;
    max-width: 100%;
    align-items: center;


      button{
        width: 100%;
    }
    }
  }
`;








