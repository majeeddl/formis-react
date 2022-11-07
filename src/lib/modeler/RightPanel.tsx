import { Col, Grid } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import Control, { ControlTypeEnum } from "../../components/Control";
import DropArea from "../../components/form/DropArea";
import { FormisContext } from "../../store/FormisProvider";

const RightPanel = () => {
  const { items, setItems } = useContext(FormisContext);
  // const [items, setItems] = useState<any>([]);

  const dropItem = (item: any) => {
    console.log("drop item in right panel");
    console.log(item);

    setItems([...items, item]);
  };

  useEffect(() => {
    console.log("items");
    console.log(items);
  }, []);

  return (
    <>
      <DropArea accept="box" onDrop={dropItem}></DropArea>

      {items.map((item: any, index: number) => (
        <>
          <div className="mt-1">
            {/* salam */}
            <Control type={ControlTypeEnum.Grid}></Control>
            <DropArea accept="box" onDrop={dropItem}></DropArea>
          </div>
        </>
      ))}
    </>
  );
};

export default RightPanel;
