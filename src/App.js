import React, { useState } from "react";
import { Header, NavBar } from "./Components/Main";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <NavBar />
      <div className="container my-5">
        <div className="card text-center my-5">
          <div className="card-body">
            <h1>Hello Oaks!</h1>
          </div>
          <div className="my-3">
            <h1 className="my-5">{count}</h1>
            <button
              className="btn btn-success mx-3"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button
              className="btn btn-danger mx-3"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              Decrement
            </button>
            <button
              className="btn btn-primary mx-3"
              onClick={() => setCount(0)}
              disabled={count === 0}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
