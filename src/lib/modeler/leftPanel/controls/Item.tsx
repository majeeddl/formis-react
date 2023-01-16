import { Button } from "@mantine/core";
import React, { FunctionComponent, useContext } from "react";
import { useDrag } from "react-dnd";
import { FormisContext } from "../../../store/context/FormisProvider";

export interface BoxProps {
  name: string;
}

export const ItemTypes = {
  BOX: "box",
};

interface DropResult {
  name: string;
}

const Item: FunctionComponent<BoxProps> = ({ name ,...props}) => {
  const formisContext = useContext(FormisContext);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { name,...props },
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
