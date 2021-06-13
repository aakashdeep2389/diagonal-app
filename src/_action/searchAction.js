
export const list = {
    SEARCH_ITEM: 'SEARCH_ITEM',
}

export function searchItem(params) {
    return function (dispatch) {
        dispatch({
            type: list.SEARCH_ITEM,
            payload: params,
        });
    };
}