import React, { useContext, useEffect, useState } from "react";
import Control, { ControlTypeEnum } from "../../components/Control";
import DropArea from "../../components/form/DropArea";
import { useAppSelector } from "../../store/redux/hooks";
import { useItemStore } from "../../store/item.store";

const RightPanel = () => {
  const [items, setItems] = useState([]);

  // const _items = useAppSelector((state) => state.items.items);
  const _items = useItemStore((state: any) => state.items);

  const dropItem = (item: any) => {
    console.log("drop item in right panel");
  };

  // useEffect(() => {
  //   console.log("items changes for right panel");
  //   console.log(items);
  // }, [items]);

  return (
    <>
      <DropArea
        accept="box"
        onDrop={dropItem}
        parent={null}
        index={0}
        data-cy="drag-area"
      ></DropArea>

      {_items.map((item: any, index: number) => (
        <div className="mt-1" key={`${item.id}`}>
          <Control type={ControlTypeEnum.Grid} {...item}></Control>
        </div>
      ))}

      <button onClick={() => console.log(_items)}>button</button>
    </>
  );
};

export default RightPanel;
