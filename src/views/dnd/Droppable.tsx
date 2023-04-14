import React, { useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";

const Droppable = (props: any) => {
  const { isOver, setNodeRef, active } = useDroppable({
    id: props.id,
    data: props.data,
  });
  const style = {
    color: isOver ? "green" : undefined,
    border: "1px solid silver",
  };

  useEffect(() => {
    console.log("isOver", isOver);
    console.log("over", active);
  }, [isOver, active]);

  return (
    <div ref={setNodeRef} style={style}>
      {props.id} : {props.children}
    </div>
  );
};

export default Droppable;
