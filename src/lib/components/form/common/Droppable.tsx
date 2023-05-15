import React, { useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";

const Droppable = (props: any) => {
  const { isOver, setNodeRef, active } = useDroppable({
    id: props.id,
    data: props.data,
  });
  const style = {
    "text-align": "center",
    "-moz-transition": "height .1s linear",
    marginTop: 3,
    height: isOver ? 30 : 5,
    color: isOver ? "green" : undefined,
    border: isOver ? "2px dashed green" : "1px dashed silver",
  };

  useEffect(() => {
    console.log("Droppable isOver", isOver);
    console.log("dropable over", active);
  }, [isOver, active]);

  return (
    <div ref={setNodeRef} style={style}>
      &nbsp; {isOver && "Drag Here"}
      {/* {props.id} : {props.children} */}
    </div>
  );
};

export default Droppable;
