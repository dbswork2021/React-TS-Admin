import DataTable from "@/components/DataTable";
import { fakeTableData } from "@/data/fakeData";
import { columns } from "./Columns";
import Toolbar from "./ToolBar";

const Member = () => {
  return (
    <div>
      <DataTable data={fakeTableData} columns={columns} Toolbar={Toolbar} />
    </div>
  );
};

export default Member;
