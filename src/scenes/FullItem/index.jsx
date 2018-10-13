import React from 'react';
import styled from 'styled-components';
import ItemLarge from 'components/Item/ItemLarge'

const Description = styled.div`
    margin-top: 2rem;
`;

export default function FullItem(props) {
    return (
        <div>
            <ItemLarge {...props} />
            <Description>{props.description}</Description>
        </div>
    );
}
