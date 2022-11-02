import React, { CSSProperties, FunctionComponent } from "react";
import { useDrop } from "react-dnd";

const style: CSSProperties = {
  height: "12rem",
  width: "100%",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
};

export type DropAreaProps = {
  accept: string;
  onDrop? : ()=>{}
};

const DropArea: FunctionComponent<DropAreaProps> = ({ accept }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: accept,
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
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
