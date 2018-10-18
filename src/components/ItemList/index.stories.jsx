import React from 'react';
import styled from 'styled-components';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItemList from 'components/ItemList';

import { getProducts } from 'services/StoreData';

const Item = styled.div`
    background: #ccc;
    height: 100px;
    width: 100px;
`;

storiesOf('ItemList', module)
    .addDecorator(StoryRouter())
    .add('default', () => <ItemList items={getProducts()} />)
    .add('with title', () => <ItemList title="All Products" items={getProducts()} />)
    .add('with no items', () => <ItemList items={[]} />);
