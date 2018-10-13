import React from 'react';
import styled from 'styled-components';

import ItemName from 'components/ItemName';
import ItemPrice from 'components/ItemPrice';
import Button from 'components/Button';

const StyledFeaturedItem = styled.div`
    display: flex;
    flex-direction: row;
    border-raidus: 3px;
    box-shadow: 0 0 5px #ccc;
    box-sizing: border-box;
    width: 100%;
`;

const ItemContainer = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const ImageContainer = styled.div`
    background: #f6f6f6;
    height: 150px;
    width: 250px;

    & .featured-title {
        background: #eee;
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    }
`;

const Image = styled.img`
    max-height: 134px;
    max-width: 234px;
    padding: 0.5rem;
`;

const StyledItemName = styled(ItemName)`
    font-size: 2rem;
`;

const StyledItemPrice = styled(ItemPrice)`
    font-size: 1.5rem;
`;

export default function FeaturedItem({ name, price, image, ...props }) {
    return (
        <StyledFeaturedItem>
                <ImageContainer>
                <div className="featured-title">Featured Item</div>
                    <Image src={`/images/${image}`} />
                </ImageContainer>
            <ItemContainer>
                <div>
                    <StyledItemName>{name}</StyledItemName>
                    <StyledItemPrice price={price} />
                </div>
                <div>
                        <Button>View Item</Button>
                </div>
            </ItemContainer>
        </StyledFeaturedItem>
    );
}
