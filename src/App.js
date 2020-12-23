import React, { useState, useEffect } from "react";
import './App.css';
import Main from "./containers/Main";
import Form from "./components/form/Form";
import Counter from "./components/counter/Counter";
import Follower from "./components/follower/Follower";

function App() {
  const [count, setCount] = useState(0);
  const [followers, setFollowers] = useState([]);
  const [isLoading, setLoading] = useState(false);



    return (
      <div>
        <Form setCount={setCount} setFollowers={setFollowers} setLoading={setLoading}/>
        <Counter count={count}/>
        <Follower followers={followers}/>
      </div>
    );
}



export default App;
