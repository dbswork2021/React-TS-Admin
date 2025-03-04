import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ViewOptions from "./ViewOptions.tsx";

import { statuses } from "@/pages/Member/data/Utils";

import FacetedFilter from "./FacetedFilter";
import { JSX } from "react";

interface ToolbarProps<TData> {
  table: Table<TData>;
}

type ToolbarFn = <TData>(props: ToolbarProps<TData>) => JSX.Element;

const Toolbar: ToolbarFn = ({ table }) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="关键词过滤..."
          value={
            (table.getColumn("username")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("username")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <FacetedFilter
            column={table.getColumn("status")}
            title="状态"
            options={statuses}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            重置
            <X />
          </Button>
        )}
      </div>
      <ViewOptions table={table} />
    </div>
  );
};

export default Toolbar;
