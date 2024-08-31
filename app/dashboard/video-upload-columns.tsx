import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

type Video = {
    title: string;
    url: string;
}
 
export const columns: ColumnDef<Video>[] = [
  {
    accessorKey: "title",
    header: "Filename",
  },
  {
    accessorKey: "url",
    header: "URL",
  },
  {
    accessorKey: "isProcessed",
    header: "Processed",
  },
]