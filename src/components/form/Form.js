import React, { useState } from "react";

export default function Form({setCount}){
  const [username, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting username ${username}`);
    console.log(username);

    const {result, error} = getContributions("58c5a09b27ac1eea40d75f849ae9e7cf548741ec", username)
      .then(res => {
      return res.data.user.contributionsCollection.contributionCalendar.totalContributions});

    console.log("Received from getContributions...: " + result );

  }

async function getProfile() {
    let url = 'https://api.github.com/users/'+username;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getContributions(token, username) {
  const headers = {
      'Authorization': `bearer ${token}`,
  }
  console.log(typeof(username));
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
    const data = await response.json()
    console.log(data);
    console.log("New function")
    console.log(data.data.user.contributionsCollection.contributionCalendar.totalContributions);
    setCount(data.data.user.contributionsCollection.contributionCalendar.totalContributions);
    return data;
}

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
