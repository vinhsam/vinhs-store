import React from 'react';
import styled from 'styled-components';

import { ListItem } from 'components/Item';

const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -10px;

    & > * {
        margin: 10px;
    }
`;

export default function ItemList(props) {
    const Items = props.items.map(item => <ListItem key={item.id} {...item} />);
    return <StyledList>{Items}</StyledList>
}
