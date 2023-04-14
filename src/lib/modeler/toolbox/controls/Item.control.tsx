import { useDraggable } from "@dnd-kit/core";
import { Button } from "@mantine/core";

export enum ItemDragTargetTypeEnums {
  Wrapper = "wrapper",
  Item = "item",
}

interface DropResult {
  name: string;
}

const ControlItem = ({
  dragTargetType = ItemDragTargetTypeEnums.Item,
  name,
  ...props
}: {
  dragTargetType?: ItemDragTargetTypeEnums;
  name: string;
}) => {
  // const { attributes, listeners, setNodeRef, transform } = useDraggable({
  //   id: name,
  //   // data : props.data
  // });

  // const style = transform
  //   ? {
  //       transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  //     }
  //   : undefined;

  return (
    <>
      <Button
        // ref={setNodeRef}
        // style={style}
        // {...listeners}
        // {...attributes}
        fullWidth
        variant="default"
        color="dark"
        size="xs"
        {...props}
      >
        {name}
      </Button>
    </>
  );
};

export default ControlItem;
