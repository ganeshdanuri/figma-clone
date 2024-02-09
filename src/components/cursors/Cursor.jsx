import React from "react";
import CursorSVG from "../../../public/assets/CursorSVG.JSX";

const Cursor = ({ color, x, y, message }) => {
  return (
    <div
      className="pointer-events-none obsolute top-0 left-0"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={color} />
    </div>
  );
};

export default Cursor;
