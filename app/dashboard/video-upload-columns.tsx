'use client';

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

type Video = {
    title: string;
    url: string;
    hashtags: string[];
}
type Meta = {
    setIsEditingVideo: (id: string, isEditing: boolean) => void;
    isEditingVideo: Record<string, boolean>;
}
 
export const columns: ColumnDef<Video>[] = [
  {
    accessorKey: "title",
    header: "Filename",
  },
  {
    accessorKey: "hashtags",
    header: "Hashtags",
    cell: ({ column, row, table }) =>  (
      <div>
        {!(table.options.meta as Meta)?.isEditingVideo[row.id] &&
        (row.getValue(column.id) as string[])?.map((hashtag, index) => (
          <span key={index} className="text-sm text-gray-500 mr-2">{hashtag}</span>
        ))}

        {(table.options.meta as Meta)?.isEditingVideo[row.id] &&
          <Input type="text" defaultValue={(row.getValue(column.id) as string[])?.join(' ')} />  
        }
      </div>
    )
  },
  
  {
    id: "edit",
    cell: ({ row, table}) => (
      <>
      {!(table.options.meta as Meta)?.isEditingVideo[row.id] &&   <Button
        onClick={() => (table.options.meta as Meta)?.setIsEditingVideo(row.id, true)}
        // onClick={() => console.log(JSON.stringify(table.options.meta))}
        variant="outline"
        aria-label="Select row"
      >Edit</Button>}
        {(table.options.meta as Meta)?.isEditingVideo[row.id] &&   <Button
        onClick={() => (table.options.meta as Meta)?.setIsEditingVideo(row.id, false)}
        // onClick={() => console.log(JSON.stringify(table.options.meta))}
        variant="default"
        aria-label="Select row"
      >Save</Button>}
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
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
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
]