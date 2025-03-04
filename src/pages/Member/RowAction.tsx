import { CellContext, Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { labels } from "./data/Utils";
// import { taskSchema } from "./data/Schema";
import { JSX } from "react";

// interface DataTableRowActionsProps<TData> {
//   row: Row<TData>;
//   // handleEdit: () => void;
//   // handleDisabled: () => void;
//   // handleDel: () => void;
//   // handleChange: (type: string, value: string | number) => void;
// }

type RowActionsFn = <TData, TValue>(
  props: CellContext<TData, TValue>,
) => JSX.Element;

const RowActions: RowActionsFn = ({ row, table }) => {
  // const task = taskSchema.parse(row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>修改</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenu>
              {labels.map((label) => (
                <DropdownMenuItem
                  key={label.value}
                  // onClick={() => handleChange(label.value, row.id)}
                >
                  {label.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenu>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => table.options.meta?.handleEdit()}>
          编辑
        </DropdownMenuItem>
        <DropdownMenuItem
        // onClick={() => handleDisabled() }
        >
          禁用
        </DropdownMenuItem>
        <DropdownMenuItem
        // onClick={() => handleDel()}
        >
          删除
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RowActions;
