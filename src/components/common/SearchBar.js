import React from 'react'

const SearchBar = ({ search, setSearch }) => {
    return (
        <div className='py-1.5 px-4 border-[1px] rounded-[4px] border-black/20'>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='text-sm outline-none'
                placeholder='Search here...' />
        </div>
    )
}

export default SearchBar