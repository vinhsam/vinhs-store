import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ItemName from 'components/ItemName';
import ItemPrice from 'components/ItemPrice';

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

const ImageContainer = styled.div`
    background: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
    min-height: 150px;
    min-width: 250px;
`;

const Image = styled.img`
    max-height: 134px;
    max-width: 234px;
    padding: 0.5rem;
`;

const Info = styled.div`
    text-align: center;
    padding: 1rem;
`;

export default function ListItem({ id, name, price, image, ...props }) {
    return (
        <StyledLink to={`/item/${id}`}>
            <StyledListItem>
                <ImageContainer>
                    <Image src={`/images/${image}`} />
                </ImageContainer>
                <Info>
                    <ItemName>{name}</ItemName>
                    <ItemPrice price={price} />
                </Info>
            </StyledListItem>
        </StyledLink>
    );
}
