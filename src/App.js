
import { useRef, useState } from 'react';
import styles from './App.css';

export const App = () => {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  
  const incrementRefCount = () => {
    refCount.current += 1;
    console.log('refCount = ' + refCount.current);
  };
  
  const incrementStateCount = () => {
    setStateCount(stateCount + 1);
		console.log('stateCount = ' + stateCount);
  };

  return(
    <div>
      <p>refCount: {refCount.current}</p>
      <button onClick={incrementRefCount}>Прибавить к refCount</button>
      <p>stateCount: {stateCount}</p>
      <button onClick={incrementStateCount}>Прибавить к stateCount</button>
    </div>
  );
}

export default App;
