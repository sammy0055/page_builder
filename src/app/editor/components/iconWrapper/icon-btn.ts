import styled from "styled-components";

type IconBtnProps = {
  isSelected?: boolean;
};
export const IconBtn = styled.button<IconBtnProps>`
  width: 35px;
  height: 25px;
  border: none;
  background-color: ${({ isSelected }) => (isSelected ? "gray" : "lightgray")};
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    background-color: gray;
  }
`;
