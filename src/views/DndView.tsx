import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./dnd/Draggable";
import Droppable from "./dnd/Droppable";

const DndView = () => {
  const containers = ["A", "B", "C"];
  const [isDropped, setIsDropped] = useState(false);
  //   const draggableMarkup = <Draggable>Drag me</Draggable>;

  const [parent, setParent] = useState(null);
  const draggableMarkup = <Draggable id="unique-id'">Drag me</Draggable>;

  const handleDragEnd = (event: any) => {
    console.log(event);
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  };

  return (
    <div>
      DndView
      <div>
        <DndContext onDragEnd={handleDragEnd}>
          {parent === null ? draggableMarkup : null}

          {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable`
            <Droppable key={id} id={id} data={"data_test"}>
              {id} :{parent === id ? draggableMarkup : "Drop here"}
            </Droppable>
          ))}

          <Droppable id={"unique-id"}>DROP</Droppable>
        </DndContext>
      </div>
    </div>
  );
};

export default DndView;
