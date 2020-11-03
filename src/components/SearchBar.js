import React from 'react';

const SearchBar = (props) => {
  return (
    <div id="header">

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sort" value="Alphabetically" checked={null} onChange={(event) => props.sortStocks(event.target.value)} />
        Alphabetically
      </label>
      <label>
        <input type="radio"  name="sort" value="Price" checked={null} onChange={(event) => props.sortStocks(event.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.filterStocks(event.target.value)}>
        <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;


// * allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.
// * allow a user to filter stocks based on the type of the stock.