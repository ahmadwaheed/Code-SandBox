import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        Start editing to see some magic happen! This is pretty cool, I love the
        architecture and the way we can integrate it with GitHub and Editor. I
        like this sync idea.
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
