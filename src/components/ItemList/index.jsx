import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import { ListItem } from 'components/Item';

const Title = styled.div`
    font-weight: bold;
    margin-bottom: 1rem;
`;

const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -10px;

    & > * {
        margin: 10px;
    }
`;

const NoItems = styled.div`
    background: lightyellow;
    border-radius: 3px;
    padding: 1rem;
`;

export default function ItemList({ title, items, ...props }) {
    const Items = items.map(item => <ListItem key={item.id} {...item} />);
    return (
        <div>
            {title &&
                <Title>
                    <FontAwesome name="angle-double-right" />
                    &nbsp;&nbsp;
                    {title}
                </Title>
            }
            {!!Items.length
                ? <StyledList>{Items}</StyledList>
                : <NoItems><FontAwesome name="kiwi-bird" />&nbsp;&nbsp;No Products Found</NoItems>
            }
        </div>
    );
}

ItemList.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ItemList.defaultProps = {
    title: '',
};
