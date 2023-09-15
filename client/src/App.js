import {useState} from 'react';
import './App.css';

import axios from 'axios';

function App() {
  const[password,setPassword] = useState('');
  const[title,setTitle] = useState('');

  
const submitPassword = ()=>{
  axios.post("http://localhost:3000/addpassword",{
    password : password,
    title : title
  });
}
  return (
    <div className="App">
      <div className='Addingpassword'>
      <input type='text' placeholder='Ex. password'
        onChange={(e)=>{setPassword(e.target.value)}}
      />
      <input type='text' placeholder='Ex. title'
        onChange={(e)=>{setTitle(e.target.value)}}
      />
      <button onClick={submitPassword}>Add Password</button>
      </div>
    </div>
  );
}

export default App;
