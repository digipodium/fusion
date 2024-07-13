import React from 'react';
import '../Table/Table.css'; // Optional: If you want to include CSS for styling
import { TableProps } from '../Table/TableData';

const Table: React.FC<TableProps> = ({ header, data, className }) => {
    return (
        <table className={`table ${className}`}>
            <thead>
                <tr>
                    {header.map((column, index) => (
                        <th key={index}>{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {header.map((column, colIndex) => (
                            <td key={colIndex}>
                                {column.render ? column.render(row[column.accessor]) : row[column.accessor]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
