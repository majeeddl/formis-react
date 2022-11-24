import React, { CSSProperties, FunctionComponent, useContext } from "react";
import { useDrop } from "react-dnd";
import { FormisContext } from "../../store/FormisProvider";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addItem } from "../../store/slices/items.slice";

const style: CSSProperties = {
  height: "1rem",
  width: "100%",
  // marginRight: "1.5rem",
  // marginBottom: "1.5rem",
  color: "silver",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "middle",
  border: "1px silver dashed",
};

export type DropAreaProps = {
  accept: string;
  parent : any;
  index? : number;
  onDrop?: (item: any) => void;
};

const DropArea: FunctionComponent<DropAreaProps> = ({
  accept,
  parent = null,
  index =0,
  onDrop = () => {},
}) => {


  // const items = useAppSelector((state) => state.items.items);
  const dispatch = useAppDispatch();

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: accept,
      // drop: (item,monitor)=>{
      //   console.log(item)
      //   console.log(monitor)
      // },
      drop: (item:any, monitor) => {
        dispatch(addItem({ ...item, parent,index }));
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    })
  );

  const isActive = canDrop && isOver;
  let backgroundColor = "whitesmoke";
  if (isActive) {
    // backgroundColor = "darkgreen";
  } else if (canDrop) {
    // backgroundColor = "darkkhaki";
  }

  return (
    <>
      <div
        ref={drop}
        style={{ ...style, backgroundColor }}
        data-testid="dustbin"
      >
        {isActive ? "Release to drop" : "Drag a box here"}
      </div>
    </>
  );
};

export default DropArea;
