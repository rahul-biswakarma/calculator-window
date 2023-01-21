import React from "react";

type WindowPosition = {
  x: number;
  y: number;
};

const Window: React.FC<{
  windowPosition: WindowPosition;
  setWindowPosition: React.Dispatch<React.SetStateAction<WindowPosition>>;
}> = ({ windowPosition, setWindowPosition }) => {
  return (
    <div
      className={`absolute top-[${windowPosition.x}px] left-[${windowPosition.y}px]`}
    >
      Window
    </div>
  );
};

export default Window;
