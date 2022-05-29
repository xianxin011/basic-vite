import { useState } from 'react';
import { Header } from './components/Header';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div>
      {number}
      <Header />
      <button onClick={() => setNumber(number + 1)}>按钮</button>
    </div>
  );
}

export default App;
