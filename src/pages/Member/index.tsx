import DataTable from "@/components/DataTable";
import { memberData } from "@/data/fakeData";
import { columns } from "@/pages/Member/Columns";
import Toolbar from "@/pages/Member/ToolBar";

const Member = () => {
  const meta = {
    handleEdit: () => {
      console.log("test");
    },
  };
  return (
    <DataTable
      data={memberData}
      columns={columns}
      Toolbar={Toolbar}
      meta={meta}
    />
  );
};

export default Member;
