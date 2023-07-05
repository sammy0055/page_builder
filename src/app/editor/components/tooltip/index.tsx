import React, { ReactNode, useState } from "react";
import { TooltipContent, TooltipTrigger, TooltipWrapper } from "./style";

interface TooltipProps {
  content: string;
  children: ReactNode;
  placement?:"bottom"| "top"
}

export const Tooltip: React.FC<TooltipProps> = ({ content,placement, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <TooltipWrapper>
      <TooltipTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent placement={placement} visible={isVisible}>{content}</TooltipContent>
    </TooltipWrapper>
  );
};

export default Tooltip;
