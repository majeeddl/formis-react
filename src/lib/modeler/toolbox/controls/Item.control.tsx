import { useDraggable } from "@dnd-kit/core";
import { Button } from "@mantine/core";

export enum ItemDragTargetTypeEnums {
  Wrapper = "wrapper",
  Item = "item",
}

interface DropResult {
  name: string;
}

const Item = ({
  dragTargetType = ItemDragTargetTypeEnums.Item,
  name,
  ...props
}: {
  dragTargetType?: ItemDragTargetTypeEnums;
  name: string;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: name,
    // data : props.data
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <>
      {/* <Button
        ref={setNodeRef}
        fullWidth
        variant="default"
        color="dark"
        size="xs"
        {...listeners}
        {...attributes}
      >
        {name}
      </Button> */}

      <Button
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        fullWidth
        variant="default"
        color="dark"
        size="xs"
      >
        {name}
      </Button>
    </>
  );
};

export default Item;
