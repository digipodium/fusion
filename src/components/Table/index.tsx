import React from 'react';

interface TableProps {
    data: any[];
    columns: string[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td
                                key={column}
                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                            >
                                {row[column]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;