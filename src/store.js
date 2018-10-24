import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { matchPath } from 'react-router';
import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducer from 'services/reducer';
import { setFilter } from 'services/Filters/actions';
import { getAllItems } from 'services/Items/actions';

export const history = createBrowserHistory();

const initialState = {
    items: {
        byId: {},
    },
    filters: {
        active: null,
    },
};

const middleWare = [
    routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}


const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(applyMiddleware(...middleWare))
);

initState();

function initState() {
    if (isRouteFilter()) {
        setActiveFilter();
    }
    else {
        setAllItems();
    }
}

function isRouteFilter() {
    const match = matchPath(window.location.pathname, {
        path: '/filter/:type/:id',
    });

    return !!match;
}

function setActiveFilter() {
    const match = matchPath(window.location.pathname, {
        path: '/filter/:type/:id',
    });

    if (!match) return null;
    const { type, id } = match.params;

    store.dispatch(setFilter(type, id));
}

function setAllItems() {
    store.dispatch(getAllItems());
}

export default store;
