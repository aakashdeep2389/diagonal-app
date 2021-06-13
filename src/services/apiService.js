/**
 * @about this file contains api
 */
//  import CONTENTLISTINGPAGE1 from "../api/CONTENTLISTINGPAGE-PAGE1.json"


export const usersService = {
    getContentListing
};

function getContentListing(params) {
    console.log(params, 'paramsparamsparams')
    let listing = require(`../api/CONTENTLISTINGPAGE-PAGE${params.page}.json`).page;
    return listing;
}
