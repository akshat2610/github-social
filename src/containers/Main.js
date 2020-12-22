import React, { Component } from "react";
import Form from "../components/form/Form";

export default class Main extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Form />
      </div>
    );
  }
}
