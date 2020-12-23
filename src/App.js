import React, { useState, useEffect } from "react";
import './App.css';
import Main from "./containers/Main";
import Form from "./components/form/Form";
import Counter from "./components/counter/Counter";
import Follower from "./components/follower/Follower";

function App() {
  const [count, setCount] = useState(0);
  const [followers, setFollowers] = useState([]);

  function comparator(a, b){
    if (a.contribCount < b.contribCount){
      return 1;
    }
    else if (a.contribCount > b.contribCount){
      return -1;
    }
    else return 0;
  }

  useEffect(() => {
    followers.sort(comparator)
  }, [followers]);


    return (
      <div>
        <Form setCount={setCount} setFollowers={setFollowers}/>
        <Counter count={count}/>
        <Follower followers={followers}/>
      </div>
    );
}

export default App;
