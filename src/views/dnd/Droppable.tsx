import React from "react";
import { useDroppable } from "@dnd-kit/core";

const Droppable = (props: any) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
    data: props.data,
  });
  const style = {
    color: isOver ? "green" : undefined,
    border : "1px solid silver",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.id} : {props.children}
    </div>
  );
};

export default Droppable;
