import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContentListing } from '../../_action/getContentListing'
import LazyLoad from 'react-lazyload';


const ContentListing = () => {
    let dispatch = useDispatch();
    const contentlisting = useSelector(state => state.listingReducer);
    const [listing, setlisting] = useState(contentlisting['content-items'].content)

    useEffect(() => {
        getImageGrid()
    }, [])

    useEffect(() => {
        setlisting(contentlisting['content-items'].content)
    }, [contentlisting])

    const getImageGrid = () => {
        dispatch(getContentListing())
    }

    console.log(contentlisting, 'contentlistingcontentlisting');


    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {

        }, 1500);
    };

    // ==================================== 
    // const imgReducer = (state, action) => {
    //     switch (action.type) {
    //       case 'STACK_IMAGES':
    //         return { ...state, images: state.images.concat(action.images) }
    //       case 'FETCHING_IMAGES':
    //         return { ...state, fetching: action.fetching }
    //       default:
    //         return state;
    //     }
    //   }

    //   const pageReducer = (state, action) => {
    //     switch (action.type) {
    //       case 'ADVANCE_PAGE':
    //         return { ...state, page: state.page + 1 }
    //       default:
    //         return state;
    //     }
    //   }

    //   const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
    //   const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true, })

    //   let bottomBoundaryRef = useRef(null);
    //   useFetch(pager, imgDispatch);
    //   useLazyLoading('.card-img-top', imgData.images)
    //   useInfiniteScroll(bottomBoundaryRef, pagerDispatch);


    return (
        <main className="body-container">
            <div className="listing-wrapper">
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {
                        listing.map((item, i) => {

                            return <>
                                <div className="cm_card">
                                    <div className="imgwrapper">
                                        <img src={item["poster-image"]} />
                                    </div>
                                    <div className="content">
                                        {item.name}
                                    </div>
                                </div>

                            </>

                        })
                    }
                </InfiniteScroll>


            </div>
        </main>
    )
}

export default ContentListing
