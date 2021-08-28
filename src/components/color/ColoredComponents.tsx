import styled from "styled-components";

interface IStyled {
  color: string;
}

// styled-component
export const ColorBox = styled.div<IStyled>`
  border: 4px solid white;
  box-shadow: 10px 10px 0px 0px ${(props) => props.color};

  &:hover {
    transition: ease-in-out 0.2s;
    border: 4px solid transparent;
    box-shadow: none;
    background-color: ${(props) => props.color};
  }
`;

export const ColorButton = styled.button<IStyled>`
  color: ${(props) => props.color};
  border: 4px solid transparent;
  &:hover {
    border: 4px solid ${(props) => props.color};
    transition: ease-in-out;
  }
`;

export const ColorTab = styled.div<IStyled>`
  color: ${(props) => props.color};
  border: 4px solid transparent;
  &:hover {
    border: 4px solid ${(props) => props.color};
    transition: ease-in-out 0.1s;
    transform: scale(1.05);
  }

  &:active {
    border: 4px solid white;
    transform: scale(0.95);
    transition: ease-in-out 0.1s;
  }
`;

export const ColorFilterButton = styled.button<IStyled>`
  border: 2px solid transparent;
  &:hover {
    border: 2px solid ${(props) => props.color};
    transition: ease-in-out 0.1s;
    transform: scale(1.05);
  }

  &:active {
    color: white;
    border-color: white;
    transform: scale(0.95);

  }
`;
 
export const ColorPrompt = styled.p<IStyled>`
  background-color: ${(props) => props.color};
`;

export const ColorCard = styled.div<IStyled>`
border: 3px solid ${(props) => props.color};

&:hover {
    background-color: ${(props) => props.color};
    transition: ease-in-out 0.1s;
    transform: scale(1.03);
}
`;

export const ColorText = styled.p<IStyled>`
color: ${(props) => props.color};
`;

export const ColorPopup = styled.div<IStyled>`
background-color: ${(props) => props.color};
`;
