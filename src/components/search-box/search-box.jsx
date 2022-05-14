const SearchBox = ({onSearchChange}) => {
    return (
        <div>
            <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange} />
        </div>
    )
}


export default SearchBox;