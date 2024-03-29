import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@mantine/core";

const Draggable = (props: any) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
    // data : props.data
  });
  // const style = transform ? {
  //   // transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  // } : undefined;

  return (
    // <Button ref={setNodeRef} {...listeners} {...attributes}>
    //   {props.children}
    // </Button>
    <div ref={setNodeRef} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
};

export default Draggable;
