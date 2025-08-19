import { DataTable } from "../components/DataTable/DataTable"

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
export interface DataTableColumn<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

const userColumns: DataTableColumn<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: false },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const userData: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com", age: 24 },
  { id: 2, name: "Bob", email: "bob@mail.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@mail.com", age: 28 },
];


const DataTablePage = () => {
  return (
     <div className="p-6">
      <DataTable<User>
        data={userData}
        columns={userColumns}
        selectable
        onRowSelect={(rows) => console.log("Selected rows:", rows)}
      />
    </div>
  )
}

export default DataTablePage