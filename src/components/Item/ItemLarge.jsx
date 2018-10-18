import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import ItemName from 'components/ItemName';
import ItemPrice from 'components/ItemPrice';
import ItemImage from 'components/ItemImage';
import Button from 'components/Button';

const StyledItemLarge = styled.div`
    background: white;
    border-radius: 3px;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    align-items: center;
    padding: 2rem;
`;

const StyledItemImage = styled(ItemImage)`
    && {
        background: transparent;
        padding: 0;
    }
`;

const Info = styled.div`
    flex: 1 1 auto;
    padding-left: 2rem;
    text-align: center;
`;

const StyledItemName = styled(ItemName)`
    font-size: 2rem;
`;

const StyledItemPrice = styled(ItemPrice)`
    font-size: 1.5rem;
    padding: 1rem;
`;

export default function ItemLarge({ id, name, price, image, ...props }) {
    return (
        <StyledItemLarge>
            <StyledItemImage image={image} height={300} width={300} />
            <Info>
                <StyledItemName>{name}</StyledItemName>
                <StyledItemPrice price={price} />
                <Button>
                    <FontAwesome name="shopping-cart" />
                    &nbsp;&nbsp;Add to Cart
                </Button>
            </Info>
        </StyledItemLarge>
    );
}

ItemLarge.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};
