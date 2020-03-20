import React from 'react';

const Search = () => {
  return (
    <div className='search-bar ui segment'>
      <form onSubmit={'this.handleSubmit'} className='ui form'>
        <div className='field'>
          <label htmlFor="book-search">Book Search</label>
          <input onChange={'this.handleChange'} name='book-search' type="text" value={'this.state.term'}/>
        </div>
      </form>
    </div>

  );
};

export default Search;
