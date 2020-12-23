import React, {useState} from "react";

export default function Follower({followers}){
  return(
    <div>
      <p> Followers are </p>
      <ul>
          {followers.map((follower) => {
            return (
              <li>
                {follower.name} has {follower.contribCount} contributions this year
              </li>
            );
          })}
      </ul>
    </div>
  );
}
