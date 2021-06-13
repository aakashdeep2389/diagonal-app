/**
 * @about this file contains api
 */

import CONTENTLISTINGPAGE1 from "../api/CONTENTLISTINGPAGE-PAGE1.json"

export const usersService = {
    getContentListing
};

function getContentListing() {
    return CONTENTLISTINGPAGE1.page;
}
