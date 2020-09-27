import React, {useState} from 'react';
import './App.css';
import counterContext from './counterContext';
import Parent from './parent';



function App() {
  let count = useState(0)
  return (
    <counterContext.Provider value={count}>
      <div>
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;
