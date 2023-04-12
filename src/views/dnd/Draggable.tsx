import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import { Button } from '@mantine/core';

const Draggable = (props:any) =>{
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data : props.data
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <Button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </Button>
  );
}

export default Draggable;