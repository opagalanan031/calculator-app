import './App.css';
import { useState } from 'react';
import Keypad from './Components/Keypad';

function App() {
  const [input, setInput] = useState('');
  const handleClick = (value) => {
    setInput(input + value);
  }
  const handleEqual = () => {
    // eslint-disable-next-line
    setInput(eval(input).toString());
  }
  const handleClear = () => {
    setInput('');
  }

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" className="display" 
          value={input} readOnly />
        <Keypad
          handleClear={handleClear}
          handleClick={handleClick}
          handleEqual={handleEqual}
        />
      </div>
    </div>
  );
}

export default App;
