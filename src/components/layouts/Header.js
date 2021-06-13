import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchItem } from '../../_action/searchAction'

const Header = () => {
    let dispatch = useDispatch();
    const [search, setSearch] = useState("")

    const handlerOnChange = (e) => {
        setSearch(e.target.value)
        dispatch(searchItem({ searchval: e.target.value }))
    }


    return (
        <header className="header-container">
            <div className="container">
                <div className="header-search-wrapper">
                    <form className="header-search-inner" autoComplete="off" >
                        <img src="./assets/img/Back.png" className="backbtn c-pnt" />
                        <div className="search_bar inline">
                            <i className="fa fa-search" />
                            <input type="text" className="form-control" placeholder="Search by name" value={search} name="search" onChange={handlerOnChange} />
                        </div>
                        <img src="./assets/img/search.png" className="search_icon c-pnt" />
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header
