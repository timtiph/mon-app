import { useState } from 'react';
// import Item from './Components/Item/item';


function App() {


  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle);
  };




  return (
    <div className="App">
       <div className={toggle ? "box animated" : "box"}></div>
      <button onClick={changeState}>Change state</button>
    </div>
  );




}

export default App;