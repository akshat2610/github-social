import React, {useState} from "react";

export default function Follower({followers}){
  return(
    <div className="container">
            <h3>Followers table</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Number of contributions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        followers.map((follower) => (
                            <tr>
                                <td>{follower.name}</td>
                                <td>{follower.contribCount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
  );
}
