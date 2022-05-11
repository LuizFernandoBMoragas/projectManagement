import "./App.css";
import react, { useState } from "react";
// import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [date, setdate] = useState(0);

  return (
    <div className="App">
      <label>Project Name: </label>
      <imput className="name" />
      <label>Start date: </label>
      <imput className="initial-date" />
      <label>End project: </label>
      <imput className="end-date" />
      <label>Name: </label>
      <imput className="name" />
      <label>Name: </label>
      <imput className="name" />
      <label>Name: </label>
      <imput className="name" />
      <label>Name: </label>
      <imput className="name" />
      <button>Add To Project List</button>
    </div>
  );
}

export default App;
