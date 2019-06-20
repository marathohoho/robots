import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <input 
            className='pa3 ba ba--green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            onChange = {searchChange} //same as in HTML saying onChange
            />
    );
}
export default SearchBox;