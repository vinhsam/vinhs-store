import React from 'react';
import styled from 'styled-components';

const StyledItemPrice = styled.div`
    color: cadetblue;
`;

export default function ItemPrice({ price, className, ...props }) {
    const priceInUSD = (price / 100).toFixed(2);

    return <StyledItemPrice className={className}>${priceInUSD}</StyledItemPrice>;
}