import React from 'react';

import ItemList from 'components/ItemList';

import { getProducts } from 'services/StoreData';

export default function AllItems(props) {
    return <ItemList items={getProducts()} />
}