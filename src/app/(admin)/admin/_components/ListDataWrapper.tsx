"use client";
import Link from "next/link";
import { Table } from "@mantine/core";

import DeleteTd from "./DeleteTd";

interface IListDataWrapperProps<T> {
  title: string;
  createUrl: string;
  createText: string;
  cols: string[];
  hasActions: boolean;
  editUrl: string;
  deleteAction: (
    prevState: IActionState,
    paylaod: FormData
  ) => Promise<IActionState>;
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
    deleteAction,
    data,
  } = props;

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
                <Table.Td key={index}>
                  {item[col.toLowerCase()] as string}
                </Table.Td>
              ))}
              {hasActions && (
                <Table.Td className="flex items-center justify-center gap-4 py-4">
                  <Link
                    href={`${editUrl}/${item.id}`}
                    className="font-semibold text-primary_blue"
                  >
                    Edit
                  </Link>
                  <DeleteTd
                    id={item.id as string}
                    deleteAction={deleteAction}
                  />
                </Table.Td>
              )}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}
