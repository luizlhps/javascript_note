import styled from "styled-components";


interface StyleProps {
  open: boolean;
}

export const Style = styled.div<StyleProps>`

  width: 2rem;
  height: 2rem;
  position: fixed;
  top:15px;
  right: 20px;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  z-index: 5;

  display: none;

  div{
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open}) => open ? 'white' : 'white'};
   border-radius: 10px;
   transform-origin: 0px;
   transition: 0.1s ease-out;

   &:nth-child(1){
    transform: ${({open})=> open ? 'rotate(45deg)' : 'rotate(0)' };
   }
   &:nth-child(2){
    transform: ${({open})=> open ? 'translateX(10%)' : 'translateX(0)' };
    opacity:${({open})=> open ? '0' : '1' };
   }
   &:nth-child(3){
    transform: ${({open})=> open ? 'rotate(-45deg)' : 'rotate(0)' };
   }
  }

@media (max-width: 768px) {
      display: flex;
  
    }
`;





