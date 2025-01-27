import React, { useState } from "react";
import "./Form.css";

export default function Form({setCount, setFollowers, setLoading}){
  const [username, setName] = useState("");

  const  handleSubmit = (evt) => {
    evt.preventDefault();
    const followers = [];

    console.log(username);

    getContributions("cb028a1b37c57790ea3793b479882d873578a590", username)
      .then(res => {
      const user = {name: "***YOU***", contribCount: res.data.user.contributionsCollection.contributionCalendar.totalContributions};
      followers.push(user);
      setCount(res.data.user.contributionsCollection.contributionCalendar.totalContributions)})
      .catch(err => {
        alert('Could not find username ' + username);
      });

    setFollowers([]);

    getFollowers(username)
    .then(res => {
      for (let i = 0; i < res.length; i++){
        const follower = {name: '', contribCount: 0};
        follower.name = res[i].login;

        getContributions("cb028a1b37c57790ea3793b479882d873578a590", follower.name)
        .then(res => {
          follower.contribCount = res.data.user.contributionsCollection.contributionCalendar.totalContributions;
          console.log("Adding " + follower.name + " to followers");
          followers.push(follower);
        });

      }
    });

    const timer = setTimeout(() => {
      followers.sort(comparator);
      setFollowers(followers);
    }, 2000);

  }


async function getContributions(token, username) {
  const headers = {
      'Authorization': `bearer ${token}`,
  }
  const body = {
      "query": `query {
                  user(login:"${username}"){
                    contributionsCollection{
                      contributionCalendar{
                        totalContributions
                      }
                    }
                  }
                }`
  }
  const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    const data = await response.json();

    return data;
}

async function getFollowers(username) {
    const response = await fetch('https://api.github.com/users/' + username + '/following');
    const data = await response.json();

    return data;
}

function comparator(a, b){
  if (a.contribCount < b.contribCount){
    return 1;
  }
  else if (a.contribCount > b.contribCount){
    return -1;
  }
  else return 0;
}

return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={e => setName(e.target.value)}
        />
      <input type="submit" value="Go" />
    </form>
  );
}
