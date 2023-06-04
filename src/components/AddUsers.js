import React, { useState } from 'react';

const AddUsers = () => {
  const [user , setUser] = useState({})

  const handleAddUser = event => {
     event.preventDefault();
     console.log(user);
     fetch(`http://localhost:5000/users`, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(user),
     })
     .then(res=>res.json())
     .then(data => {
      console.log(data)
    })
  }

  const handleInputBlur = event => {
    const field = event.target.name;
    const value = event.target.value
    const newUser = {...user}
    newUser[field]=value;
    setUser(newUser)



  }
  return (
    <div>
       <h2>Please add new user</h2>
       <form onSubmit={handleAddUser}>
           <input onClick={handleInputBlur} type="text" name="name" placeholder='Name' id="" /> <br />
           <input onClick={handleInputBlur} type="text" name="Address" placeholder='Address' id="" /> <br />
           <input onClick={handleInputBlur} type="email" name="email" placeholder='Email ' id="" /> <br />
           <button type="submit">Add user</button>
       </form>
    </div>
  );
};

export default AddUsers;