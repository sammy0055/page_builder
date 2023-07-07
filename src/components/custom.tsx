import React, { useState } from "react";

export const ResizableDiv = () => {
  const [width, setWidth] = useState(200); // initial width
  const [height, setHeight] = useState(200); // initial height
  const [resizing, setResizing] = useState(false);

  const handleResizeStart = () => {
    setResizing(true);
  };

  const handleResize = (event: any) => {
    if (resizing) {
      const newWidth = event.clientX;
      const newHeight = event.clientY;
      setWidth(newWidth);
      setHeight(newHeight);
    }
  };

  const handleResizeEnd = () => {
    setResizing(false);
  };

  return (
    <>
 <div
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        border: '1px solid #ccc',
      }}
      onMouseMove={handleResize}
    >
      <div
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          top: '-10px',
          left: '-10px',
          cursor: 'nwse-resize',
          zIndex: 1,
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderTop: 'none',
          borderLeft: 'none',
        }}
        onMouseDown={handleResizeStart}
      />
      <div
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          top: '-10px',
          right: '-10px',
          cursor: 'nesw-resize',
          zIndex: 1,
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderTop: 'none',
          borderRight: 'none',
        }}
        onMouseDown={handleResizeStart}
      />
      <div
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          bottom: '-10px',
          left: '-10px',
          cursor: 'nesw-resize',
          zIndex: 1,
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderBottom: 'none',
          borderLeft: 'none',
        }}
        onMouseDown={handleResizeStart}
      />
      <div
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          bottom: '-10px',
          right: '-10px',
          cursor: 'nwse-resize',
          zIndex: 1,
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderBottom: 'none',
          borderRight: 'none',
        }}
        onMouseDown={handleResizeStart}
      />
      Resizable Div
    </div>
    </>
  );
};

export default ResizableDiv;
