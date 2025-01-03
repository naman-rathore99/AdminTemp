'use client'
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";

type Video = {
  title: string;
  url: string;
  hashtags: string[];
}

type Meta = {
  setIsEditingVideo: (id: string, isEditing: boolean) => void;
  isEditingVideo: Record<string, boolean>;
  saveVideo: (row: any) => void;
  setUpdatedRows: (id: string, row: any) => void;
}

export const columns: ColumnDef<Video>[] = [
  {
    accessorKey: "title",
    header: "Filename",
  },
  {
    accessorKey: "hashtags",
    header: "Hashtags",
    cell: ({ column, row, table }) => (
      <div>
        {!(table.options.meta as Meta)?.isEditingVideo[row.id] &&
          (row.getValue(column.id) as string[])?.map((hashtag, index) => (
            <span key={index} className="text-sm text-gray-500 mr-2">{hashtag}</span>
          ))}
        
        {(table.options.meta as Meta)?.isEditingVideo[row.id] && (
          <Input
            type="text"
            onChange={(e) =>
              (table.options.meta as Meta).setUpdatedRows(row.id, {
                ...row.original,
                hashtags: e.target.value.split(' '),
              })
            }
            defaultValue={(row.getValue(column.id) as string[])?.join(' ')}
          />
        )}
      </div>
    ),
  },
  {
    id: "edit",
    cell: ({ row, table }) => (
      <>
        {!(table.options.meta as Meta)?.isEditingVideo[row.id] && (
          <Button
            onClick={() => (table.options.meta as Meta)?.setIsEditingVideo(row.id, true)}
            variant="outline"
            aria-label="Select row"
          >
            Edit
          </Button>
        )}
        {(table.options.meta as Meta)?.isEditingVideo[row.id] && (
          <Button
            onClick={() => (table.options.meta as Meta)?.saveVideo(row.original)}
            variant="default"
            aria-label="Select row"
          >
            Save
          </Button>
        )}
      </>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected()
            ? true
            : table.getIsSomePageRowsSelected()
            ? "indeterminate"
            : false
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
