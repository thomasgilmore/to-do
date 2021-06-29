import { useState } from "react";
import ToDo from "./components/ToDo";
import ToDoFunctional from "./components/ToDoFunctional";
import './App.css';

function App() {
  const [isFunctional, setIsFunctional] = useState(false);

  const changeFuncational = (e) => {
    e.preventDefault();
    isFunctional ? setIsFunctional(false) : setIsFunctional(true);
  }

  return (
    <div className="App">
      <button className="mainButton" onClick={changeFuncational}>{isFunctional ? 'Change to Class Component' : 'Change to Functional Component'}</button>
      {isFunctional ? <ToDoFunctional /> : <ToDo />}
    </div>
  );
}

export default App;
