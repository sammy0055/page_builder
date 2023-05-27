import React, { ReactNode, useState } from "react";
import { TooltipContent, TooltipTrigger, TooltipWrapper } from "./style";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
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
      <TooltipContent visible={isVisible}>{content}</TooltipContent>
    </TooltipWrapper>
  );
};

export default Tooltip;
