import { useState } from 'react';
// import Item from './Components/Item/item';


function App() {


  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle);
  };



  // let toggleContenu;

  // if (toggle) {
  //   toggleContenu = <h1>Le state est True</h1>;
  // } else {
  //   toggleContenu = <h1>Le state est False</h1>;
  // }



  return (
    <div className="App">
      {toggle ? <h1>Le state est TRUE</h1> : <h1>Le state est FALSE</h1> } 
      <button onClick={changeState}>Change state</button>
    </div>
  );




}

export default App;