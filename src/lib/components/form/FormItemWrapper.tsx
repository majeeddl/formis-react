import React from "react";
import { TFormState } from "./FormItem";
import { useFormis } from "../../hooks/formis.hook";
import { modals } from "@mantine/modals";
import { ActionIcon, Group, Text } from "@mantine/core";
import { IconArrowsMove, IconTrash } from "@tabler/icons-react";
import { useFormisItemsDispatch } from "../../context/formis.items.context";

type TFormItemWrapperProps = {
  id: string;
  selected: boolean;
  index?: number;
  listeners?: any;
  setActivatorNodeRef?: any;
  useFormis: ReturnType<typeof useFormis>;
  children: any;
};

const FormItemWrapper = ({
  id,
  index,
  listeners,
  selected = false,
  setActivatorNodeRef,
  // useFormis,
  mode = "edit",
  children,
  ...props
}: TFormItemWrapperProps) => {
  // const { deleteItem, selectItem, mode } = useFormis;

  const dispatch = useFormisItemsDispatch();

  const openModal = () =>
    modals.openConfirmModal({
      title: "Delete Confirmation",
      centered: true,
      children: (
        <Text size="sm" color="red" fw={700}>
          Are you sure you want to delete this item? This action is irreversible
        </Text>
      ),
      labels: { confirm: "Yes I am sure", cancel: "No don't" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () =>
        dispatch({
          type: "delete",
          payload: {
            id,
          },
        }),
    });

  if (mode == "view") {
    return <>{children}</>;
  }

  return (
    <div
      className={`form-item-box`}
      style={{
        border: ` ${selected ? "1px solid #228be6" : "1px solid silver"}`,
        borderLeft: ` ${selected ? "3px solid #228be6" : "3px solid silver"}`,
        padding: 5,
      }}
      onClick={(e) => {
        e.stopPropagation();
        dispatch({
          type: "select",
          payload: {
            id,
          },
        });
      }}
    >
      <Group justify="space-between">
        <Group>
          <Text size="xs">
            {id} - index: {index}
            {/* - x : {props.x} - y : {props.y} */}
          </Text>
        </Group>
        <Group gap="xs">
          <ActionIcon variant="transparent" color="red.8" size={"xs"}>
            <IconTrash
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            ></IconTrash>
          </ActionIcon>
          {listeners && (
            <ActionIcon variant="transparent" color="dark" size={"xs"} {...setActivatorNodeRef} {...listeners}>
              <IconArrowsMove size={20} className="cursor-move"></IconArrowsMove>
            </ActionIcon>
          )}
        </Group>
      </Group>
      {children}
    </div>
  );
};

export default FormItemWrapper;
