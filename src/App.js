import { useState } from 'react';
import Item from './item';


function App() {

  // console.log(useState(10));

  const [monState, setMonState] = useState(10)
  // console.log(monState);
  // console.log(setMonState);

  const modifyState = () => {
    setMonState(20);
  }

  return (
    <div className="App">
      <h1>HELLO STATE : {monState}</h1>
      {monState}
      <br />
      <br />
      <button onClick={modifyState}>Change State</button>
<br />
      <Item number= {monState}></Item>
      <Item txt= {"Coucou Italie"}></Item>
      <Item txt= {"Coucou Japon"}></Item>
    </div>
  );
}

export default App;
