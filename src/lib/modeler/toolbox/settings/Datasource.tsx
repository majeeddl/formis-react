import { ActionIcon, Button, Input, Table } from "@mantine/core";
import { IconCirclePlus, IconLink, IconLinkOff, IconTrash } from "@tabler/icons-react";
import { useFormisContext, useFormisDispatchContext } from "../../../context/formis.context";
import { useEffect, useState } from "react";

export type TDatasource = {
  type: "client" | "server";
  data: {
    key: string;
    value: string;
    linked: boolean;
  }[];
};

const Datasource = () => {
  const [datasource, setDatasource] = useState<TDatasource>({
    type: "client",
    data: [],
  });
  const { selectedItem } = useFormisContext();
  const { dispatchItems } = useFormisDispatchContext();

  const addNewItem = () => {
    setDatasource({
      ...datasource,
      data: [...datasource.data, { key: "", value: "", linked: true }],
    });
  };

  const updateItem = (index: number, data: any) => {
    let newData = [...datasource.data];
    newData[index] = { ...data };
    setDatasource({
      ...datasource,
      data: newData,
    });
  };

  const deleteItem = (index: number) => {
    let newData = [...datasource.data];
    newData.splice(index, 1);
    setDatasource({
      ...datasource,
      data: newData,
    });
  };

  useEffect(() => {
    dispatchItems({
      type: "update",
      payload: {
        id: selectedItem?.id,
        datasource,
      },
    });
  }, [datasource]);

  useEffect(() => {
    if (selectedItem?.datasource) setDatasource(selectedItem.datasource);
  }, [selectedItem?.id]);

  return (
    <div>
      <Table withTableBorder withColumnBorders bg={"white"} className="border">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th fz={"0.8em"}>Key</Table.Th>
            <Table.Th></Table.Th>
            <Table.Th fz={"0.8em"}>Value</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {datasource?.data.length == 0 && (
            <Table.Tr>
              <Table.Td colSpan={4} align="center">
                No Data Found
              </Table.Td>
            </Table.Tr>
          )}
          {datasource?.data.map((item, index) => (
            <Table.Tr key={`ds-row-${index}`}>
              <Table.Td>{index + 1}</Table.Td>
              <Table.Td>
                <Input
                  variant="filled"
                  placeholder="key"
                  size="xs"
                  value={item.key}
                  onChange={(e) => {
                    updateItem(index, {
                      ...item,
                      key: e.target.value,
                      value: item.linked ? e.target.value : item.value,
                    });
                  }}
                />
              </Table.Td>
              <Table.Td p={2}>
                <ActionIcon
                  variant="subtle"
                  c={item.linked ? "green" : "red"}
                  onClick={(e) => {
                    e.preventDefault();

                    const value = item.linked ? "" : item.key;

                    updateItem(index, {
                      ...item,
                      value: value,
                      linked: !item.linked,
                    });
                  }}
                >
                  {item.linked ? (
                    <IconLink size={"1.3em"} className="cursor-pointer"></IconLink>
                  ) : (
                    <IconLinkOff size={"1.3em"} color="red" className="cursor-pointer"></IconLinkOff>
                  )}
                </ActionIcon>
              </Table.Td>
              <Table.Td>
                <Input
                  variant="filled"
                  placeholder="value"
                  disabled={item.linked}
                  size="xs"
                  value={item.value}
                  onChange={(e) =>
                    updateItem(index, {
                      ...item,
                      value: e.target.value,
                    })
                  }
                />
              </Table.Td>
              <Table.Td align="center" p="2">
                <ActionIcon variant="subtle" c="red" onClick={() => deleteItem(index)}>
                  <IconTrash size={"1.2em"}></IconTrash>
                </ActionIcon>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
        <Table.Tfoot className="border">
          <Table.Tr>
            <Table.Td colSpan={5} align="right">
              <Button
                variant="default"
                size="xs"
                leftSection={<IconCirclePlus size={"1.5em"}></IconCirclePlus>}
                onClick={addNewItem}
              >
                Add New
              </Button>
            </Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </div>
  );
};

export default Datasource;
