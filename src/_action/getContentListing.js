import { usersService } from "../services/apiService";
import { ResponseFilter } from '../_helper/ResponseHandler';
import promise from 'bluebird';

export const list = {
    SAVE_CONTENT_LIST: 'SAVE_CONTENT_LIST',
}

//create asker post
export function getContentListing() {
    return function (dispatch) {
        return new promise(function (resolve, reject) {
            dispatch({
                type: list.SAVE_CONTENT_LIST,
                payload: usersService.getContentListing(),
            });

            // .then(response => {
            //     let { serverResponseData } = ResponseFilter(response);
            //     resolve(serverResponseData);
            //     dispatch(success(serverResponseData));
            // })
            // .catch((err) => {
            //     reject(err);
            //     dispatch(failure(err));
            // })
        })
    };
    // function request(payload) {
    //     return { type: list.CONTENT_LISTING_REQUEST, payload }
    // }

    // function success(payload) {
    //     return { type: list.CONTENT_LISTING_SUCCESS, payload }
    // }

    // function failure(payload) {
    //     return { type: list.CONTENT_LISTING_ERROR, payload }
    // }
}

// export const listinAction = () => (dispatch) => {
//     dispatch({
//         type: list.CONTENT_LISTING,
//         payload: ''
//     })
// }

