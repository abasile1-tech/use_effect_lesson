import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  console.log("I'm updating");

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("The counter has updated");
  }, [counter]);

  return (
    <>
      <h1>Use Effect Lesson</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <input onChange={(e) => setName(e.target.value)} value={name} />
    </>
  );
}

export default App;
