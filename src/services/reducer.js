import { combineReducers } from 'redux';

import items from './Items/reducer';
import filters from './Filters/reducer';

export default combineReducers({
    items,
    filters,
});
