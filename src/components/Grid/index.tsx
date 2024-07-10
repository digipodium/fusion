import React, { ReactNode } from 'react';

interface GridProps {
    children: ReactNode;
    columns?: number;
    gap?: number;
}

const Grid: React.FC<GridProps> = ({ children, columns = 2, gap = 16 }) => {
    const gridTemplateColumns = `repeat(${columns}, 1fr)`;
    const gridGap = `${gap}px`;

    return (
        <div style={{ display: 'grid', gridTemplateColumns, gridGap }}>
            {children}
        </div>
    );
};

export default Grid;