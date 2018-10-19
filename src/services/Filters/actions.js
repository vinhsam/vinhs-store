export const SET_FILTER = 'SET_FILTER';

export function setFilter(type, id) {
    return {
        type: SET_FILTER,
        payload: { type, id },
    };
}
