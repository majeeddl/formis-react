import { Button } from "@mantine/core";
import React, { FunctionComponent, useContext } from "react";
import { useDrag } from "react-dnd";


export enum ItemDragTargetTypeEnums {
  Wrapper = "wrapper",
  Item = "item",
};

interface DropResult {
  name: string;
}

const Item = ({ dragTargetType = ItemDragTargetTypeEnums.Item  ,name,  ...props } : {
  dragTargetType ?: ItemDragTargetTypeEnums;
  name: string;
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dragTargetType,
    item: { name, ...props },
    end: (item, monitor) => {
      console.log("drop ...");
      // const dropResult = monitor.getDropResult<DropResult>();
      // if (item && dropResult) {
      //   console.log(`You dropped ${item.name} into ${dropResult.name}!`);
      // }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <>
      <Button
        ref={drag}
        fullWidth
        variant="default"
        color="dark"
        size="xs"
        data-testid={`box`}
        {...props}
      >
        {name}
      </Button>
    </>
  );
};

export default Item;
