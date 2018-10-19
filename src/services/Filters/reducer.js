import { matchPath } from 'react-router';

import { SET_FILTER } from './actions';

const initialState = {
    active: null,
};

export default function reducer(state = initialState, action) {
    let active = null;

    switch (action.type) {
        case SET_FILTER:
            active = action.payload;
            return { ...state, active };
        case '@@router/LOCATION_CHANGE':
            const match = matchPath(window.location.pathname, {
                path: '/filter/:type/:id',
            });

            active = match
                ? { type: match.params.type, id: match.params.id }
                : null;

            return { ...state, active };
        default:
            return state;
    }
}
