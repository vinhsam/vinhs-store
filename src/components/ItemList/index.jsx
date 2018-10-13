import React from 'react';
import styled from 'styled-components';

import ListItem from 'components/Item/ListItem';

const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;

    & > * {
        margin: 10px;
    }
`;

export default function ItemList(props) {
    const Items = props.items.map(item => <ListItem {...item} />);
    return <StyledList>{Items}</StyledList>
}