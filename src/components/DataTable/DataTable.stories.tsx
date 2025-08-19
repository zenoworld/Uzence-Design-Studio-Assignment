import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

type Person = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const meta: Meta<typeof DataTable<Person>> = {
  title: "Components/DataTable",
  component: DataTable<Person>,
};
export default meta;

type Story = StoryObj<typeof DataTable<Person>>;

const sampleData: Person[] = [
  { id: 1, name: "Alice", email: "alice@mail.com", age: 24 },
  { id: 2, name: "Bob", email: "bob@mail.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@mail.com", age: 28 },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: "id", title: "ID", dataIndex: "id", sortable: true },
      { key: "name", title: "Name", dataIndex: "name", sortable: true },
      { key: "email", title: "Email", dataIndex: "email" },
      { key: "age", title: "Age", dataIndex: "age", sortable: true },
    ],
    selectable: true,
  },
};
export const EmptyState: Story = {
  args: {
    data: [],
    columns: [
      { key: "id", title: "ID", dataIndex: "id" },
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "email", title: "Email", dataIndex: "email" },
      { key: "age", title: "Age", dataIndex: "age" },
    ],
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: [
      { key: "id", title: "ID", dataIndex: "id" },
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "email", title: "Email", dataIndex: "email" },
      { key: "age", title: "Age", dataIndex: "age" },
    ],
    loading: true,
  },
};
