import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@mantine/core";

const ControlDraggable = ({
  id = "draggable",
  control,
  data = {},
  children,
}: {
  id?: string;
  control: {
    type: string;
    label: string;
  };
  data?: any;
  children: any;
}) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
    data: {
      children,
      control,
      ...data,
    },
  });
  // const style = transform ? {
  //   // transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  // } : undefined;

  return (
    // <Button ref={setNodeRef} {...listeners} {...attributes}>
    //   {props.children}
    // </Button>
    <div ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

export default ControlDraggable;
