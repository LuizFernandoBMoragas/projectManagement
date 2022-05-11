import "./App.css";
import react, { useState } from "react";
// import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const [date, setdate] = useState(0);
  const [manager, setManager] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembersAmount] = useState(0);
  const [client, setClient] = useState("");

  return (
    <div className="App">
      <label>Project Name: </label>
      <imput className="name" />
      <label>Start date: </label>
      <imput className="initial-date" />
      <label>End project: </label>
      <imput className="end-date" />
      <label>Manager: </label>
      <imput className="name" />
      <label>Descrição: </label>
      <imput className="name" />
      <label>Members Amount: </label>
      <imput className="name" />
      <label>Client: </label>
      <imput className="name" />
      <button>Add To Project List</button>
    </div>
  );
}

export default App;
