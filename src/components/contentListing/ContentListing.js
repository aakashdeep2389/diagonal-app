import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContentListing } from '../../_action/getContentListing'
import InfiniteScroll from 'react-infinite-scroll-component';

const ContentListing = () => {
    let dispatch = useDispatch();
    const contentlisting = useSelector(state => state.listingReducer);
    const searchval = useSelector(state => state.searchReducer.searchval);
    const [listing, setlisting] = useState(contentlisting['content-items'].content)
    const [page, setPage] = useState(1);

    useEffect(() => {
        getImageGrid()
        console.log(page, 'sdfd5f4f5e4f45e4f5d4 useeffect')
    }, [page])

    useEffect(() => {
        setlisting(contentlisting['content-items'].content)
    }, [contentlisting])

    const getImageGrid = () => {
        dispatch(getContentListing({ page }))
    }

    console.log(contentlisting, 'contentlistingcontentlisting');


    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        console.log(page, 'sdfd5f4f5e4f45e4f5d4 fetchMoreData')
        setPage(page + 1)
    };




    return (
        <main className="body-container">
            <div className="listing-wrapper">
                <InfiniteScroll
                    dataLength={contentlisting["total-content-items"]}
                    next={fetchMoreData}
                    hasMore={contentlisting["page-num-requested"] * contentlisting["page-size-requested"] < contentlisting["total-content-items"]}
                    loader={<h4 className="text-light">Loading...</h4>}>
                    {
                        listing.filter(item => {
                            if (searchval) {
                                console.log(searchval, 'asdfdsasdffdsdf44343')
                                return item.name == searchval
                            } else {
                                return true
                            }

                        }).map((item, i) => {
                            return <div key={i} className="cm_card">
                                <div className="imgwrapper">
                                    <img src={item["poster-image"]} />
                                </div>
                                <div className="content">
                                    {item.name}
                                </div>
                            </div>

                        })
                    }
                </InfiniteScroll>

            </div>
        </main>
    )
}

export default ContentListing
