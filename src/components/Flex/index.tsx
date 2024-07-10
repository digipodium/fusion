import React, { CSSProperties, ReactNode } from 'react';

interface FlexProps {
    children: ReactNode;
    direction?: 'row' | 'column';
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    flexWrap?: CSSProperties['flexWrap'];
    gap?: CSSProperties['gap']; // New prop
    style?: CSSProperties;
}

const Flex: React.FC<FlexProps> = ({
    children,
    direction = 'row',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    flexWrap = 'nowrap',
    gap, // New prop
    style = {},
}) => {
    const flexContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: direction,
        justifyContent,
        alignItems,
        flexWrap,
        gap, // New prop
        ...style,
    };

    return <div style={flexContainerStyle}>{children}</div>;
};

export default Flex;