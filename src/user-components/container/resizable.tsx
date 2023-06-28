import { useRef } from "react";
import styles from "./container.module.css";
import { ContainerProps } from ".";

interface ResizableProps {
  setProp: (cb: any, throttleRate?: number | undefined) => void;
}
export const Resizable = ({ setProp }: ResizableProps) => {
  const containerRef = useRef<any>(null);
  const handleMouseDown = (e: any, direction: string) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const handleMouseMove = (e: any) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      let newWidth = containerWidth + deltaX;
      let newHeight = containerHeight + deltaY;

      if (direction.includes("w")) {
        newWidth = containerWidth - deltaX;
      }
      if (direction.includes("n")) {
        newHeight = containerHeight - deltaY;
      }

      setProp((props: ContainerProps) => {
        props!.width = newWidth;
      });
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <div ref={containerRef}>
      <div
        className={`${styles["resize-handle"]} ${styles["top-left"]}`}
        onMouseDown={(e) => handleMouseDown(e, "nw")}
      />
      <div
        className={`${styles["resize-handle"]} ${styles["top-right"]}`}
        onMouseDown={(e) => handleMouseDown(e, "ne")}
      />
      <div
        className={`${styles["resize-handle"]} ${styles["bottom-left"]}`}
        onMouseDown={(e) => handleMouseDown(e, "sw")}
      />
      <div
        className={`${styles["resize-handle"]} ${styles["bottom-right"]}`}
        onMouseDown={(e) => handleMouseDown(e, "se")}
      />
    </div>
  );
};
