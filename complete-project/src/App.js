import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (username, age) => {
    setUsersList((pervList) => {
      return ([...pervList, {
        username: username,
        age: age,
        id: Math.random().toString()
      }
      ])
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
