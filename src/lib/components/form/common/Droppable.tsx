import React, { useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";

const Droppable = (props: any) => {
  const { isOver, setNodeRef, active } = useDroppable({
    id: props.id,
    data: {
      // x: props.x,
      // y: props.y,
      ...props.data,
    },
  });
  const style: any = {
    textAlign: "center",
    MozTransition: "height .1s linear",
    marginTop: 3,
    height: isOver ? 30 : 5,
    color: isOver ? "green" : "",
    border: isOver ? "2px dashed green" : "1px dashed silver",
  };

  useEffect(() => {
    // console.log("Droppable isOver", isOver);
    // console.log("dropable over", active);
  }, [isOver, active]);

  return (
    <div ref={setNodeRef} style={style}>
      &nbsp; {isOver && "Drag Here"}
      {props.children}
      {/* {props.id} : {props.children} */}
    </div>
  );
};

export default Droppable;
