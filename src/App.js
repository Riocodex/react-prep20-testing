import './App.css';
import { useState } from 'react';
import { Counter } from './Counter';

function App() {
  const [count, setCount ] = useState(0)
  return (
    <div className="App">
        <Counter initialValue={0}/>
    </div>
  );
}

export default App;
