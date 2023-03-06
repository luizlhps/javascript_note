import styled from "styled-components";


interface StyleProps {
  open: boolean;
}

export const Style = styled.div<StyleProps>`

display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    padding: 5px;
    width: 40px;
    border-radius: 4px;
  
  

@media (max-width: 768px) {
      display: flex;
  
    }
`;





