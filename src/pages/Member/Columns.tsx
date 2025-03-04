import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { statuses } from "./data/Utils";
import { TMember } from "./data/Schema";
import ColumnHeader from "./ColumnHeader";
import RowActions from "./RowAction";

export const columns: ColumnDef<TMember>[] = [
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
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => <ColumnHeader column={column} title="ID" />,
    cell: ({ row }) => row.getValue("id"),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "username",
    header: ({ column }) => <ColumnHeader column={column} title="用户名" />,
    cell: ({ row }) => row.getValue("username"),
  },
  {
    accessorKey: "balance",
    header: ({ column }) => <ColumnHeader column={column} title="钱包余额" />,
    cell: ({ row }) => row.getValue("balance"),
  },
  {
    accessorKey: "withdrawPassword",
    header: ({ column }) => <ColumnHeader column={column} title="提现密码" />,
    cell: ({ row }) => row.getValue("withdrawPassword"),
  },
  {
    accessorKey: "status",
    header: ({ column }) => <ColumnHeader column={column} title="状态" />,
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status"),
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    accessorKey: "create_at",
    header: ({ column }) => <ColumnHeader column={column} title="注册时间" />,
    cell: ({ row }) => row.getValue("create_at"),
  },
  {
    accessorKey: "ip",
    header: ({ column }) => <ColumnHeader column={column} title="注册IP" />,
    cell: ({ row }) => row.getValue("ip"),
  },
  {
    accessorKey: "area",
    header: ({ column }) => <ColumnHeader column={column} title="注册地区" />,
    cell: ({ row }) => row.getValue("area"),
  },
  {
    id: "actions",
    cell: RowActions,
  },
];
