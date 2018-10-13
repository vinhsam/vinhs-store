import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ItemName from 'components/ItemName';
import ItemPrice from 'components/ItemPrice';
import Button from 'components/Button';

const StyledFeaturedItem = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 3px;
    box-shadow: 0 0 5px #ccc;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
`;

const Info = styled.div`
    background: white;
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`;

const FeaturedTitle = styled.div`
    background: #89aeff;
    color: white;
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f6f6f6;
    height: 150px;
    width: 250px;
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

export default function FeaturedItem({ id, name, price, image, ...props }) {
    return (
        <StyledFeaturedItem>
            <div>
                <FeaturedTitle className="featured-title">Featured Item</FeaturedTitle>
                <ImageContainer>
                    <Image src={`/images/${image}`} />
                </ImageContainer>
            </div>
            <Info>
                <div>
                    <StyledItemName>{name}</StyledItemName>
                    <StyledItemPrice price={price} />
                </div>
                <div>
                    <Link to={`/item/${id}`}>
                        <Button>View Item</Button>
                    </Link>
                </div>
            </Info>
        </StyledFeaturedItem>
    );
}
