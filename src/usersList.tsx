import './App.css'
import {useEffect, useState} from "react";
// import * as React from 'react';
// import Button from '@mui/material/Button';

function AppUsers() {
    const [userList, setUserList] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUserList(data));
    }, []);

    return (
        <div>
    <h1>User list</h1>
    <ul>
    {userList.map(user => (
            <li key={user.id}>
                <p>
                    {user.username}<br/>
                    Name:
                    {user.name}<br/>
                    eMail: {user.email}<br/>
                    Phone: {user.phone}
    </p>
    </li>
))}
    </ul>
    </div>
);
}


export default AppUsers
