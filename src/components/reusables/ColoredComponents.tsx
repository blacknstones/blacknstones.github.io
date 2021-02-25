import styled from "styled-components";
import pointer from "../../assets/cursor1.png";

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
    transition: ease-in-out 0.2s;
  }

  &:active {
    border: 4px solid ${(props) => props.color};
    background-color: ${(props) => props.color};
    transition: ease-in-out 0.2s;
  }
`;
