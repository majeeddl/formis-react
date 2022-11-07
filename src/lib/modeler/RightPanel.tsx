import { Col, Grid } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import Control, { ControlTypeEnum } from "../../components/Control";
import DropArea from "../../components/form/DropArea";
import { FormisContext } from "../../store/FormisProvider";
import { useAppSelector } from "../../store/hooks";

const RightPanel = () => {
  // const { items, setItems } = useContext(FormisContext);
  const [items, setItems] = useState([]);

  const _items = useAppSelector((state) => state.items.items);

  const dropItem = (item: any) => {
    console.log("drop item in right panel");
    // console.log(item);
    // console.log(items);
    item.id = v4();

    const newItems: any = [...items];
    newItems.push(item);
    // console.log("newItems");
    // console.log(newItems);
    // console.log([...items, item]);

    setItems((prev) => newItems);
  };

  // useEffect(() => {
  //   console.log("items changes for right panel");
  //   console.log(items);
  // }, [items]);

  return (
    <>
      <DropArea accept="box" onDrop={dropItem}></DropArea>

      {_items.map((item: any, index: number) => (
        <div className="mt-1" key={`${item.id}`}>
          {/* salam */}
          <Control type={ControlTypeEnum.Grid}></Control>
          {/* <DropArea accept="box" onDrop={dropItem}></DropArea> */}
        </div>
      ))}

      <button onClick={() => console.log(_items)}>button</button>
    </>
  );
};

export default RightPanel;
