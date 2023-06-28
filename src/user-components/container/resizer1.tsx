import React from "react";
import { Resizable, ResizableBox } from "react-resizable";

const MyDiv = () => {
  const handleResize = (event: any, { size }: any) => {
    console.log("New size:", size);
  };

  return (
    <Resizable
      className="my-div"
      width={200}
      height={200}
      onResize={handleResize}
    >
      <div>Resize me</div>
    </Resizable>
  );
};

export default MyDiv;
