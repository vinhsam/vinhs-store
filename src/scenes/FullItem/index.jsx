import React from 'react';
import styled from 'styled-components';

import { ItemLarge } from 'components/Item';
import ErrorPage from 'scenes/ErrorPage';

import { getProductById } from 'services/StoreData';

const Description = styled.div`
    margin-top: 2rem;
`;

export default function FullItem({ match, ...props }) {
    const productId = parseInt(match.params.id, 10);
    const product = getProductById(productId);

    return (
        product
            ? (
                <div>
                    <ItemLarge {...product} />
                    <Description>{product.description}</Description>
                </div>
            )
            : <ErrorPage>Item not found.</ErrorPage>
    );
}
