import React from 'react';
import styled from 'styled-components';

import ItemName from 'components/ItemName';
import ItemPrice from 'components/ItemPrice';
import Button from 'components/Button';

const StyledItemLarge = styled.div`
    background: white;
    border-radius: 3px;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    align-items: center;
    padding: 2rem;
`;

const Image = styled.img`
    max-height: 300px;
    max-width: 300px;
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

export default function ItemLarge({name, price, image, ...props }) {
    return (
        <StyledItemLarge>
            <div>
                <Image src={`/images/${image}`} />
            </div>
            <Info>
                <StyledItemName>{name}</StyledItemName>
                <StyledItemPrice price={price} />
                <Button>Add to Cart</Button>
            </Info>
        </StyledItemLarge>
    );
}
