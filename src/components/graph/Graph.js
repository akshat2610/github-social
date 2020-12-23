import React, {useState} from "react";
import {Bar} from "react-chartjs-2";
import "./Graph.css";
import Zoom from 'react-reveal/Zoom';

export default function Graph({followers}){
  const names = []
  const contributions = []

  for (let i = 0; i < followers.length; i++){
    names.push(followers[i].name);
    contributions.push(followers[i].contribCount);
  }

  const state = {
    labels: names,
    datasets: [
      {
        label: 'Number of contributions',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: contributions
      }
    ]
}

  return(
    <Zoom>
      <div id="graph">
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Number of contributions this year',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      </Zoom>
  );
}
