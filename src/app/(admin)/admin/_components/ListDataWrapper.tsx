"use client";
import Link from "next/link";
import { Button, Flex, Modal, Table, Text } from "@mantine/core";

import { apiCaller } from "@/helpers/apiCaller";
import { getFromLocalStorage } from "@/helpers/localstorage";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

interface IListDataWrapperProps<T> {
  title: string;
  createUrl: string;
  createText: string;
  cols: string[];
  hasActions: boolean;
  editUrl: string;
  deleteUrl: string;
  data: T;
}

export function ListDataWrapper(props: IListDataWrapperProps<dynamicObject[]>) {
  const {
    title,
    createText,
    cols,
    createUrl,
    hasActions = true,
    editUrl,
    deleteUrl,
    data,
  } = props;
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    const res = await apiCaller(deleteUrl + id, "DELETE", 200, undefined, {
      Authorization: `User ${getFromLocalStorage("thanka_email")}`,
    });
    if (res.isGood) {
      window.location.reload();
    } else {
      console.log(res);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3>{title}</h3>
        <Link
          href={createUrl}
          className="px-4 py-2 text-white rounded-md bg-primary_red"
        >
          {createText}
        </Link>
      </div>
      <Table className="w-full">
        <Table.Thead>
          <Table.Tr>
            {cols.map((col, index) => (
              <Table.Th key={index}>{col}</Table.Th>
            ))}
            {hasActions && <th>ACTIONS</th>}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((item: dynamicObject, index: number) => (
            <Table.Tr key={index}>
              {cols.map((col, index) => (
                <Table.Td key={index}>{item[col.toLowerCase()]}</Table.Td>
              ))}
              {hasActions && (
                <Table.Td className="flex items-center justify-center gap-4 py-4">
                  <Link
                    href={`${editUrl}/${item.id}`}
                    className="font-semibold text-primary_blue"
                  >
                    Edit
                  </Link>
                  <Button
                    variant="transparent"
                    color="red"
                    onClick={() => {
                      setDeleteId(item.id as string);
                      open();
                    }}
                  >
                    Delete
                  </Button>
                </Table.Td>
              )}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Modal
        opened={opened}
        onClose={close}
        size="auto"
        title="Delete"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Text>Are you sure you want to delete this item?</Text>

        <Flex mt="xl" align="center" justify="end">
          <Button variant="transparent" onClick={close}>
            Cancel
          </Button>
          <Button
            variant="filled"
            bg="red"
            onClick={() => handleDelete(deleteId!)}
          >
            Yes Delete
          </Button>
        </Flex>
      </Modal>
    </>
  );
}
