import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const minus = () => { if (counter > 0) setCounter(counter - 1) };
  const plus = () => { setCounter(counter + 1) };
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={ () => minus() }>- - -</button> <span>{ counter }</span> <button onClick={ () => plus() }>+ + +</button>
      </header>
    </div>
  );

}

export default Counter;
