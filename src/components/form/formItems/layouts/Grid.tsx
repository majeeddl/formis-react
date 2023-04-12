import React, { FC } from "react";
import { Grid as MantineGrid } from "@mantine/core";
import Col from "./grid/Col";
import FormItem, { FormItemStateEnum, FormItemTypeEnum } from "../../FormItem";
import DropArea from "../../DropArea";
import { ItemDragTargetTypeEnums } from "../../../../lib/modeler/toolbox/controls/Item.control";
import { useItemStore } from "../../../../store/item.store";
import { ConditionalWrapper } from "../../../utils/ConditionalWrapper";

type GridPropsType = {
  id?: string;
  state?: FormItemStateEnum;
  columns?: number;
  spans?: number[];
};

const Grid: FC<GridPropsType> = ({
  id = null,
  state = FormItemStateEnum.View,
  columns = 24,
  spans = [12, 12],
}) => {
  const items = useItemStore((state: any) =>
    state.items.filter((item: any) => item.parent == id)
  );

  return (
    <>
      GRID : {id}
      <MantineGrid columns={columns} className="border m-1">
        {spans.map((span, index) => (
          <Col span={span} key={`s_${span}_${index}`}>
            <div className="border">
              {
                <ConditionalWrapper
                  condition={true}
                  wrapper={(children) => (
                    <DropArea
                      accept={ItemDragTargetTypeEnums.Item}
                      index={index}
                      parent={id}
                    >
                      {children}
                    </DropArea>
                  )}
                >
                  {items
                    .filter((item: any) => item.index == index)
                    .map((item: any) => (
                      <>
                        <FormItem {...item}></FormItem>
                      </>
                    ))}
                </ConditionalWrapper>
              }
            </div>
          </Col>
        ))}
      </MantineGrid>
    </>
  );
};

export default Grid;
