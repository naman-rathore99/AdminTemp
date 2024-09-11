'use client';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { deleteVod } from "./actions";

  interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
  }
   
  export function DataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = useState({})
    const [isEditingVideo, setIsEditingVideo] = useState<Record<string,boolean>>({});
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      onRowSelectionChange: setRowSelection,
      getRowId: row => (row as any).id,
      state: {
        rowSelection
      },
      meta: {
        setIsEditingVideo: (id: string, isEditing: boolean) => {
          setIsEditingVideo((prev) => ({ ...prev, [id]: isEditing }));
        },
        isEditingVideo: isEditingVideo,
        saveVideo: (id: string, row: any) => {

        },
      }
    })
    const deleteVideos = async () => {
      const promises = [];
      for(const key in rowSelection) {
          promises.push(deleteVod(key));
    }
    await Promise.all(promises);
}
   
    return (
      <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        
      </div>
      <div>
        {Object.keys(rowSelection).length > 0 && <Button onClick={() => deleteVideos()}>Delete</Button>}
      </div>
      </>
    )
  }