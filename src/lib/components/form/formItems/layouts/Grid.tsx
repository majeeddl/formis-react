import React, { FC } from "react";
import { Grid as MantineGrid } from "@mantine/core";
import Col from "./grid/Col";
import FormItem, { FormItemStateEnum, FormItemTypeEnum } from "../../FormItem";

import { useItemStore } from "../../../../store/item.store";
import { ConditionalWrapper } from "../../../../../components/utils/ConditionalWrapper";
import { ItemDragTargetTypeEnums } from "../../../../modeler/toolbox/controls/Item.control";
import Droppable from "../../common/Droppable";

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
      <MantineGrid columns={columns} className="border m-1">
        {spans.map((span, index) => (
          <Col span={span} key={`s_${span}_${index}`} p={2}>
            <div className="border" style={{ minHeight: 40 }}>
              {
                <>
                  {items
                    .filter((item: any) => item.index == index)
                    .map((item: any) => (
                      <>
                        <FormItem {...item}></FormItem>
                      </>
                    ))}
                  <Droppable id={`${id}_${index}`}></Droppable>
                </>
                // <ConditionalWrapper
                //   condition={true}
                //   wrapper={(children) => (
                //     <div
                //     // accept={ItemDragTargetTypeEnums.Item}
                //     // index={index}
                //     // parent={id}
                //     >
                //       {children}
                //     </div>
                //   )}
                // >

                //   {items
                //     .filter((item: any) => item.index == index)
                //     .map((item: any) => (
                //       <>
                //         <FormItem {...item}></FormItem>
                //       </>
                //     ))}
                // </ConditionalWrapper>
              }
            </div>
          </Col>
        ))}
      </MantineGrid>
    </>
  );
};

export default Grid;
