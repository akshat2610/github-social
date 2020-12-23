import React, { useState, useEffect } from "react";
import './App.css';
import Main from "./containers/Main";
import Form from "./components/form/Form";
import Counter from "./components/counter/Counter";
import Follower from "./components/follower/Follower";
import Graph from "./components/graph/Graph";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [followers, setFollowers] = useState([]);
  const [isLoading, setLoading] = useState(false);



    return (
      <div>
        <Header />
        <Form setCount={setCount} setFollowers={setFollowers} setLoading={setLoading}/>
        <Counter count={count} />
        <Graph followers={followers} />
        <Footer />
      </div>
    );
}



export default App;
