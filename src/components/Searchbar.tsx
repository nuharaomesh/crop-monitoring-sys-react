import {BsSearch} from "react-icons/bs";

export default function Searchbar(props) {
    return (
        <>
            <form action="" className="custom-searchbar">
                <input type="search" placeholder="Search" className="search-input focus:outline-none" onChange={(e) => props.searchValue(e.target.value)}/>
                <button type="button" className="search-btn"><BsSearch color="gray"/></button>
            </form>
        </>
    )
}