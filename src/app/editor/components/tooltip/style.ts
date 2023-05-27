import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
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
  transition: opacity 0.2s ease-in-out;
`;

export const TooltipTrigger = styled.span`
  cursor: pointer;
`;
