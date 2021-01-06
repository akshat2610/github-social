import React, {useState} from "react";
import "./Counter.css";
import Flash from 'react-reveal/Flash';

export default function Counter({count}){
  const lastDay = new Date("12/31/2021");
  const currentDay = new Date();

  const ms = lastDay.getTime() - currentDay.getTime();
  const numDays = Math.floor(ms/(1000 * 3600 * 24));

  return (
    <Flash>
      <div id="counter">
        <p> Your contributions {count} </p>
        <p> Number of days left in this year {numDays} </p>
      </div>
    </Flash>
  );
}
