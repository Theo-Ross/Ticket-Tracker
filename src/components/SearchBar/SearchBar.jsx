import "./SearchBar.scss"

const SearchBar = (props) => {

    const {handleInput, searchTerm} = props
 
    return (
        
        <div className="searchBar">
            <header className="searchBar__header">Search by employee name </header>
          <input
          className="searchBar"
            type="text"
            value={searchTerm}
            onChange={handleInput}
          />
        </div>
    )
}

export default SearchBar;