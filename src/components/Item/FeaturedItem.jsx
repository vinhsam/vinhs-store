import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ItemName from 'components/ItemName';
import ItemPrice from 'components/ItemPrice';
import ItemImage from 'components/ItemImage';
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
                <ItemImage image={image} height={150} width={250} />
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

FeaturedItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};
