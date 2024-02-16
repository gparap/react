// © 2024 gparap
import React from 'react'

// Search input for recipes & ingredients
function Search({ searchTerm, updateSearchTerm, handleSearchClick }) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="input-group mt-2">
                    <input onChange={updateSearchTerm} value={searchTerm} type="text" className="form-control" placeholder="Search Recipe or Ingredient" id="search-recipe" name="search-recipe" />
                    <button onClick={handleSearchClick} className="btn btn-outline-secondary" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                            viewBox="0 0 16 16" className="bi bi-search">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search