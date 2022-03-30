import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Friend.css';
const Friend = (props) => {
    const {name, email, address, id} = props.friend;
    const navigate = useNavigate(); // বিল্ড ইন ফাংশন
    const showFriendDetail = () =>{
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div className='friend'>
            <h2> Friend Name : {name} </h2>
            <h3> e-Mali :{email} </h3>
            <p> City :{address?.city} </p>
            <button onClick={showFriendDetail} > Friend Details ${id} </button>
        </div>
    );
}; 
export default Friend;