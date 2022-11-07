import React, { CSSProperties, FunctionComponent } from "react";
import { useDrop } from "react-dnd";

const style: CSSProperties = {
  height: "1rem",
  width: "100%",
  // marginRight: "1.5rem",
  // marginBottom: "1.5rem",
  color: "silver",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "middle",
  border : '1px silver dashed'
};

export type DropAreaProps = {
  accept: string;
  onDrop : (item:any)=> void
};

const DropArea: FunctionComponent<DropAreaProps> = ({ accept ,onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "whitesmoke";
  if (isActive) {
    // backgroundColor = "darkgreen";
  } else if (canDrop) {
    // backgroundColor = "darkkhaki";
  }

  return (
    <>
      <div
        ref={drop}
        style={{ ...style, backgroundColor }}
        data-testid="dustbin"
      >
        {isActive ? "Release to drop" : "Drag a box here"}
      </div>
    </>
  );
};

export default DropArea;
