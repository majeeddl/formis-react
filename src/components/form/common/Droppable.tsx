import React, { useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";

const Droppable = (props: any) => {
  const { isOver, setNodeRef, active } = useDroppable({
    id: props.id,
    data: props.data,
  });
  const style = {
    color: isOver ? "green" : undefined,
    border: isOver ? "2px solid green" : "1px solid silver",
  };

  useEffect(() => {
    console.log("Droppable isOver", isOver);
    console.log("dropable over", active);
  }, [isOver, active]);

  return (
    <div ref={setNodeRef} style={style}>
      I : {isOver && "this is over"}
      {/* {props.id} : {props.children} */}
    </div>
  );
};

export default Droppable;
