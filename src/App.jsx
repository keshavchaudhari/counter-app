import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="container">
      <h1 className="title">🚀 Counter App</h1>

      <div className="counter">{num}</div>

      <div className="buttons">
        <button className="add" onClick={() => setNum(num + 1)}>
          Add
        </button>

        <button className="remove" onClick={() => setNum(num - 1)}>
          Remove
        </button>

        <button className="add5" onClick={() => setNum(num + 5)}>
          +5
        </button>
      </div>
    </div>
  );
};

export default App;