import React, { useRef, useState, useEffect } from "react";
import './App.css';
import Main from "./containers/Main";
import Form from "./components/form/Form";
import Counter from "./components/counter/Counter";

function App() {
  const [count, setCount] = useState(0);

    return (
      <div>
        <Form setCount={setCount}/>
        <Counter count={count}/>
      </div>
    );
}

export default App;
