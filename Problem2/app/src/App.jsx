import "./App.css";
import { useState } from "react";
import Axios from "axios";

export default function App() {
  const [UserList, setUserList] = useState([]);

  const handleClick = async () => {
    const randomNum = Math.floor(Math.random() * 10) + 1; // random number 1 to 10
    const newUser = await Axios.get(
      `https://swapi.dev/api/people/${randomNum}`
    ).then((res) => res.data);
    //Add the user to the list
    if (UserList.some((user) => user.name === newUser.name)) {
      //Don't add if user already exists in the list.
      console.log(newUser.name, "already exists in the list");
    } else {
      setUserList([...UserList, newUser]);
    }
  };

  const handleDelete = (toBeDeleted) => {
    setUserList(UserList.filter(item => item.name !== toBeDeleted));  //delete user
  }

  return (
    <div className='App'>

      <button id='addRecord' onClick={handleClick}>
        Add Record
      </button>

      <div className='card-container'>
        {UserList.map((user) => {
          return (
              <div className='card' key={user.name}>
                <h1>{user.name}</h1>
                <button id='Delete' onClick={() => handleDelete(user.name)}>Delete</button>
              </div>
          );
        })}
      </div>
    </div>
  );
}
