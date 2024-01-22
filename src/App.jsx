import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import "./App.css";

function App() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api?nat=en").then((response) => {
      setEmployee(response.data.results[0]);
    });
  }, []);

  return (
    <>
      <div>
        <UserCard employee={employee} />
      </div>
    </>
  );
}

export default App;
