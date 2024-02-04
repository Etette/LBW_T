// components/Table.js

import React, {useMemo} from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

export const Table = ({data: tableData, columns: tableColumns, title}) => {
  const data = useMemo(() => tableData, [tableData]);
  const columns = useMemo(() => tableColumns, [tableColumns]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="relative overflow-x-auto lg:p-20 p-6 text-white mt-[100px] flex flex-col table-auto md:table-auto sm:table-auto">
      <div className="text-[30px] font-bold">{title && <h3>{title}</h3>}</div>{" "}
      <table className="mt-6 border border-[#FFFCE1] rounded-md p-3">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className="font-bold text-center"
                    colSpan={header.colSpan}
                    scope="col"
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        <span className="flex justify-between border-b border-[#414141] p-3 sm:text-sm ">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </span>
                      </div>
                    )}
                  </th>
                );
              })}
              {/* <hr></hr> */}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className="text-left sm:text-sm border-b border-[#414141] lg:pl-4 p-3"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
