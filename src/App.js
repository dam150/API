import React from 'react';
import UserList from './Components/UserList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



const App = () => {

  const [users, setUsers] = useState([])

useEffect(() => {
    fetchData();
},[])


const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
        console.log(err);  
    }) 
}


const onAdd = async (name, email) => {
  await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
      name:name
    }),
    headers: {
      "Content-type": "application/json; charset-UTF-8",
    }
  })
  .then((res) => {
    if(res.status !== 201){
      return
  }else{
    return res.json();
    }
  })
  .then((data) => {
    setUsers((users) => [...users],data);
  })
  .catch((err) => {
    console.log(err);
  })
}


const onDelete = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.status !== 200) {
        return;
      } else {
        setUsers(
          users.filter((user) => {
            return user.id !== id;
          })
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
};


return (
  <div className='container'>
  <div className='App'>
    <h3 className='title'>List of users</h3>

    <hr/>
    <br/>
    <div>
      {
        users.map((user) => (
          <UserList 
          id={user.id} 
          key={user.id} 
          name={user.name}
          onDelete={onDelete}
          />
        ))
      }
    </div>
  </div>
  </div>
 )
}

export default App; 