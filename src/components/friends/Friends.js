import React, { useEffect, useState } from "react";
import Friend from "../friend/Friend";
import './Friends.css';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="friend-container">
      <h2> Friends </h2>
      <p> Tui ki koros</p>
      <p> Age polao khaoa pore komu</p>
      <p> Friends : {friends.length}</p>
      <div className="friends">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};
export default Friends;
