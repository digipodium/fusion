export interface TableColumn {
    header: string;
    accessor: string; // This should match the key in your data object
    render?: (value: any) => React.ReactNode; // Optional custom render function
}

export interface TableRow {
    [key: string]: any;
}

export interface TableProps {
    header: TableColumn[];
    data: TableRow[];
    className?: string;
}
