import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ItemName from 'components/ItemName';
import ItemPrice from 'components/ItemPrice';
import ItemImage from 'components/ItemImage';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const StyledListItem = styled.div`
    background: white;
    border-radius: 3px;
    box-shadow: 0 0 5px #ccc;
    width: 250px;
`;

const Info = styled.div`
    text-align: center;
    padding: 1rem;
`;

export default function ListItem({ id, name, price, image, ...props }) {
    return (
        <StyledLink to={`/item/${id}`}>
            <StyledListItem>
                <ItemImage image={image} height={150} width={250} />
                <Info>
                    <ItemName>{name}</ItemName>
                    <ItemPrice price={price} />
                </Info>
            </StyledListItem>
        </StyledLink>
    );
}

ListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};
