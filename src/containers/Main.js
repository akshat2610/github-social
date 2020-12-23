import React, { Component } from "react";
import Form from "../components/form/Form";
import Counter from "../components/counter/Counter";

export default class Main extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Form />
        <Counter />
      </div>
    );
  }
}
