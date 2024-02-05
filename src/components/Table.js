// components/Table.js

import React, {useMemo} from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import cx from "classnames";

export const Table = ({
  data: tableData,
  columns: tableColumns,
  title,
  className,
  tableClassName,
  rowClassName,
  headerClassName,
}) => {
  const data = useMemo(() => tableData, [tableData]);
  const columns = useMemo(() => tableColumns, [tableColumns]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      className={cx(
        `relative overflow-x-auto lg:p-20 p-6 text-white mt-[100px] sm:mt-4 flex flex-col table-auto md:table-auto sm:table-auto`,
        tableClassName
      )}
    >
      <div
        className="text-[30px] font-bold sm:text-2xl"
        data-aos="fade-up"
        data-aos-delay="40"
        data-aos-once="true"
        data-aos-duration="700"
      >
        {title && <h3>{title}</h3>}
      </div>{" "}
      <table
        className={cx(
          `mt-6 w-full border border-[#FFFCE1] rounded-md p-3`,
          className
        )}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className="font-bold text-center "
                    colSpan={header.colSpan}
                    scope="col"
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        <span
                          className={cx(
                            `flex justify-between border-b border-[#414141] p-5 sm:text-sm `,
                            headerClassName
                          )}
                        >
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
                      className={cx(
                        `text-left sm:text-sm border-b border-[#414141] lg:pl-4 p-5`,
                        rowClassName
                      )}
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
