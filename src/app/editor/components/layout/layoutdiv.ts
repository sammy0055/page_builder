import styled from "styled-components";

type BtnWrapperProps = {
  isSelected?: boolean;
};

export const BtnWrapper = styled.button<BtnWrapperProps>`
  padding: 7px;
  border: none;
  background-color: ${({ isSelected }) => (isSelected ? "gray" : "lightgray")};
  &:focus {
    background-color: gray;
  }
  width:100%;
`;

export const DisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const IconBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  background-color: lightgray;
  padding: 2px;
`;
