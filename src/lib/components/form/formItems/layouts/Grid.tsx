import React, { FC } from "react";
import { GridColProps, Grid as MantineGrid } from "@mantine/core";
import Col from "./grid/Col";
import FormItem, { TFormItemProps, TFormItemType, TFormState } from "../../FormItem";

import { useItemStore } from "../../../../store/item.store";
import { ConditionalWrapper } from "../../../../../components/utils/ConditionalWrapper";
import { ItemDragTargetTypeEnums } from "../../../../modeler/toolbox/controls/Item.control";
import Droppable from "../../common/Droppable";

export type TGridColProps = GridColProps & {
  id?: string | null;
};

export type TGridProps = {
  id?: string | null;
  state?: TFormState;
  columns?: number;
  spans?: number[];
  cols?: TGridColProps[];
  // items: TFormItemType[];
};

const Grid = ({
  id,
  columns = 24,
  useFormis,
  setActivatorNodeRef,
  listeners,
  ...props
}: Omit<TFormItemProps, "type">) => {
  // const _items = useItemStore((state: any) => state.items.filter((item: any) => item.parent == id));

  const cols = useFormis.items.filter((item: any) => item.parent == id);

  return (
    <>
      <MantineGrid columns={columns} className="border m-1">
        {cols.map((item, index) => (
          <Col span={item?.span || 12} key={`s_${index}`} p={2}>
            <div className="border p-2 pb-3" style={{ minHeight: 80 }}>
              {
                <>
                  <Droppable id={`${item.id}_${item.id}`}>{/* {`${item.id}_${item.id}`} */}</Droppable>
                  {useFormis.items
                    .filter((_item: any) => _item.parent == item.id)
                    .map((_item: any, _index: number) => (
                      <React.Fragment key={`${_item.id}_${index}`}>
                        <FormItem useFormis={useFormis} {..._item}></FormItem>
                        <Droppable id={`${_item.id}_${item.id}`}>{/* {`${_item.id}_${item.id}`} */}</Droppable>
                      </React.Fragment>
                    ))}
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
