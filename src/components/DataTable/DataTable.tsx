import React, { useState } from "react";
import { Loader2 } from "lucide-react";

export interface Column<T> {
    key: string;
    title: string;
    dataIndex: keyof T;
    sortable?: boolean;
}

export interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    loading?: boolean;
    selectable?: boolean;
    onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
    data,
    columns,
    loading = false,
    selectable = false,
    onRowSelect,
}: DataTableProps<T>) {
    const [sortKey, setSortKey] = useState<keyof T | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());

    const handleSort = (key: keyof T) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortOrder("asc");
        }
    };

    const sortedData = React.useMemo(() => {
        if (!sortKey) return data;
        return [...data].sort((a, b) => {
            const aVal = a[sortKey];
            const bVal = b[sortKey];
            if (aVal === bVal) return 0;
            if (aVal! > bVal!) return sortOrder === "asc" ? 1 : -1;
            return sortOrder === "asc" ? -1 : 1;
        });
    }, [data, sortKey, sortOrder]);

    const toggleRow = (id: string | number) => {
        const updated = new Set(selectedRows);
        if (updated.has(id)) {
            updated.delete(id);
        } else {
            updated.add(id);
        }
        setSelectedRows(updated);
        onRowSelect?.(data.filter((row) => updated.has(row.id)));
    };

    return (
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-lg ">
            {
                loading ?
                    (
                        <div className="flex items-center justify-center p-6">
                            <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
                        </div>
                    )
                    : data.length === 0 ?
                        (
                            <div className="text-center text-gray-500 dark:text-gray-400 p-6">
                                No data available
                            </div>
                        )
                        :
                        (
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-100 dark:bg-gray-800">
                                    <tr>
                                        {
                                            selectable &&
                                            <th className="p-3 w-6  sm:w-15"></th>
                                        }
                                        {
                                            columns.map((col) => (
                                                <th
                                                    key={col.key}
                                                    onClick={() => col.sortable && handleSort(col.dataIndex)}
                                                    className={`p-3 font-semibold text-gray-700 dark:text-gray-300 ${col.sortable ? "cursor-pointer select-none" : ""
                                                        }`}
                                                >
                                                    {col.title}
                                                    {col.sortable && (
                                                        <span className="ml-1">
                                                            {sortKey === col.dataIndex
                                                                ? sortOrder === "asc"
                                                                    ? "▲"
                                                                    : "▼"
                                                                : "⇅"}
                                                        </span>
                                                    )}
                                                </th>

                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        sortedData.map((row) => (
                                            <tr
                                                key={row.id}
                                                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer relative"
                                            >
                                                {
                                                    selectable && (
                                                        <td className="p-2 sm:p-6">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedRows.has(row.id)}
                                                                onChange={() => toggleRow(row.id)}
                                                                aria-label={`Select row ${row.id}`}
                                                                className="form-checkbox w-3 h-3 sm:h-4 sm:w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                                                            />
                                                        </td>
                                                    )
                                                }
                                                {
                                                    columns.map((col) => (
                                                        <td
                                                            key={col.key}
                                                            className={`px-2 py-4 sm:py-3 sm:px-3 text-gray-800 dark:text-gray-200 ${col.key === "age" ? "text-center" : ""}`}
                                                        >
                                                            {String(row[col.dataIndex])}
                                                        </td>
                                                    ))
                                                    
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )}
        </div>
    );
}
