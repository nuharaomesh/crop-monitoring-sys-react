export default function Searchbar(props) {
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className="custom-searchbar">
                <input type="search" placeholder="Search" className="search-input focus:outline-none" onChange={(e) => props.searchValue(e.target.value)}/>
            </form>
        </>
    )
}