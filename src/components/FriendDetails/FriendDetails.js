import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId}= useParams();
    const [friend, setFriend]= useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h2> Name : {friend.name} </h2> 
            <h3> e-mail : {friend.email} </h3> 
            <h4> user Name : {friend.username} </h4> 
            <p>City : {friend.address?.city}</p>
            <p>Lat : {friend.address?.geo?.lat}</p>
        </div>
    );
};

export default FriendDetails;