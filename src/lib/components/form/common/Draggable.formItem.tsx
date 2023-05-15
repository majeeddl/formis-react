import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@mantine/core";

const FormItemDraggable = ({
  id,
  // control,
  formItem,
  data = {},
  children,
}: {
  id: string;
  formItem: any;
  data?: any;
  children: any;
}) => {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef } =
    useDraggable({
      id: id,
      data: {
        children,
        formItem,
        ...data,
      },
    });

  return (
    <div ref={setNodeRef} {...attributes}>
      {/* <button ref={setActivatorNodeRef} {...listeners}>
        Drag handle
      </button> */}
      {React.cloneElement(children, { setActivatorNodeRef, listeners })}
    </div>
  );
  e;
};

export default FormItemDraggable;
