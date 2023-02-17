import React, { useState } from "react";
import { Header, Mynav, Home } from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { Home } from "./pages/home";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <Mynav />
      {/* <Home /> */}
      {/* <div className="container my-5">
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
      </div> */}

      {/* <Switch>
        <Route exact path="/" component={Home} />
      </Switch> */}
    </div>
  );
};
export default App;
