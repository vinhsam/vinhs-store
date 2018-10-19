import { GET_ALL_ITEMS } from './actions';
import { SET_FILTER } from 'services/Filters/actions';
import { matchPath } from 'react-router';

import { getProducts } from 'services/StoreData';
import { getProductsFiltered } from 'services/Filters';

const initialState = {
    byId: {},
};

export default function reducer(state = initialState, action) {
    let products = null;
    let byId = null;

    switch (action.type) {
        case GET_ALL_ITEMS:
            products = getProducts();
            byId = {};
            products.forEach(product => byId[product.id] = product);
            return { ...state, byId };
        case SET_FILTER:
            const { type, id } = action.payload;

            products = getProductsFiltered(type, id);
            byId = {};
            products.forEach(product => byId[product.id] = product);
            return { ...state, byId };
        case '@@router/LOCATION_CHANGE':
            const match = matchPath(window.location.pathname, {
                path: '/filter/:type/:id',
            });

            if (!match) {
                products = getProducts();
            }
            else {
                const { type, id } = match.params;
                products = getProductsFiltered(type, id);
            }

            byId = {};
            products.forEach(product => byId[product.id] = product);

            return { ...state, byId };
        default:
            return state;
    }
}
