import React from 'react'
import './searchBar.css'

export default function SearchBar() {
    return (
        <div className="search-bar">
            <input name='Search for songs'></input>
            <button>Search</button>
        </div>
    )
}