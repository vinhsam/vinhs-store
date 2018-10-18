import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItemPrice = styled.div`
    color: cadetblue;
`;

export default function ItemPrice({ price, className, ...props }) {
    const dollars = parseInt(price, 10);
    const cents = parseInt((price - dollars) * 100, 10);
    const centsDisplay = cents < 10 ? `0${cents}` : cents;
    const priceDisplay = `$${dollars.toLocaleString()}.${centsDisplay}`;

    return <StyledItemPrice className={className}>{priceDisplay}</StyledItemPrice>;
}

ItemPrice.propTypes = {
    price: PropTypes.number.isRequired,
};
