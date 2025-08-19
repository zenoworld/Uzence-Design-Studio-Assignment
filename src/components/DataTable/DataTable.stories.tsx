import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

const meta: Meta<typeof DataTable> = {
    title: "Components/DataTable",
    component: DataTable,
};
export default meta;

type Story = StoryObj<typeof DataTable>;

const sampleData = [
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
            { key: "email", title: "Email", dataIndex: "email", sortable: false },
            { key: "age", title: "Age", dataIndex: "age", sortable: true },
        ],
        selectable: true,
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
