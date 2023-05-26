import styled, { keyframes } from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const fadeIn = keyframes`
  from {
    transform: translateY(-8px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-8px);
    opacity: 0;
  }
`;


export const TooltipContent = styled.div<{ visible: boolean }>`
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

export const TooltipTrigger = styled.span`
  cursor: pointer;
`;
