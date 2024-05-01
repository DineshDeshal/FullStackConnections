import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
   const[username,setUsername]= useState("");
   const[userpass,setUserpass]= useState("");
   const[error,setError] = useState("");
   const handleClick = async ()=>{
   try{
     const response =await axios.get("http://localhost:8000/")
     console.log(response.data)
     alert("executed")
  
 }catch(err){
    console.log(err);
 }
}
const handleChange =(e)=>{
   e.preventDefault();
   const check = e.target.name;
   if(check === 'user'){
   setUsername(e.target.value);
   }else if(check === 'password'){
    setUserpass(e.target.value);
   }
}
const handleSubmit = async (e) =>{
  e.preventDefault();
  if(!username){
    setError("Please Enter your name");
    return;
  }if(!userpass){
    setError("Please Enter your Password")
    return;
  }
  try{
    const response = await axios.post("http://localhost:8000/createuser",{username,userpass},{headers:{"Content-Type":"application/json"}})
    console.log(response.data);

  }catch(err){
    console.log(err)
  }

}
  return (
    <div>
       <button onSubmit={handleClick}>get data</button>
       {error && <p style={{color:"red"}}>{error}</p>}
       <form onSubmit={handleSubmit}>
        <input type='text' value={username} name='user' placeholder='enter ur name' onChange={handleChange}></input>
       
       
        <input type='password' value={userpass} name='password' placeholder='enter ur password' onChange={handleChange}></input>
       <button>submit</button>
       </form>
    </div>
  )
}
