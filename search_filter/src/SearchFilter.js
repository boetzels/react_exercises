import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function SearchFilter() {
  const fruits = [
    'Banana',
    'Apple',
    'Watermelon',
    'Pinapple',
    'Strawberry',
    'Cranberry',
    'Orange',
    'Mango',
  ];

  const [filterFruits, setFilterFruits] = useState(fruits);

  const handleChange = (e) => {
    const searchValue = e.target.value;

    const searchedFruits = fruits.filter((fruit) => fruit.indexOf(searchValue) !== -1 );

    //console.log('searchedFruits',searchedFruits);

    setFilterFruits(searchedFruits);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Search: <input onChange={(e) => handleChange(e)} />
        </p>
          { filterFruits && filterFruits.map((fruit,i) => <div key={ i } >{ fruit }</div> ) }
      </header>
      <p>
        
      </p>
    </div>
  );

}

export default SearchFilter;
