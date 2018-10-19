import React from 'react';

import ItemList from 'components/ItemList';

import { getProductsFiltered, getFilterNameFromId } from 'services/Filters';

export default function FilteredItems({ match, ...props }) {
    const type = match.params.type;
    const filterId = match.params.filterId;

    return (
        <ItemList
            title={getFilterNameFromId(filterId)}
            items={getProductsFiltered(type, filterId)}
        />
    );
}
