import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Initial render");
    const response = fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
    setLoading(false);
  }, []);

  return (
    <>
      <h1>Use Effect Lesson</h1>
      {loading ? <h1>Loading</h1> : <p>{users.length}</p>}
    </>
  );
}

export default App;
