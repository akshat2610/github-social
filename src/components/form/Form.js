import React, { useState } from "react";

export default function Form(){
  const [username, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting username ${username}`);
    console.log(username);

    let data = getProfile();
    console.log(data);
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
