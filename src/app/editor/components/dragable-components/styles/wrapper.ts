import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 30%;
  margin-bottom: 12px;
  padding: 5px;
  border-radius: 5px;
  cursor: move;
  user-select: none;
  &:hover {
    background-color: gray;
    color: #f5f5f5;
    transition: background-color ease-in-out 0.2s
  }
`;

export const BoxOne = styled.div`
  width: 100%;
  height: 7vh;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxDescription = styled.p`
  width: 100%;
  font-size: 12px;
  padding-bottom: 12px;
  text-align: center;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
