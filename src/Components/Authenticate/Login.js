import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword } from "../firebase";
import { getAuth } from "firebase/auth";
import './First.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const auth1 = getAuth;
  const user = auth1.currentUser;
  return (
    <div className='body mx-auto'>
    <div className='RegLog'>
        <h3>Welcome</h3>
        <div className='form'>
            <label>Email:</label><br></br>
            <input placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
            <label>Password:</label><br></br>
            <input placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>
        <button className='btn' onClick={() => Login()}>Login</button>
        <Link className='btn' to='/resetPassword'> Forgot Password? </Link>
        <Link to="/register" className='a'>Register Now</Link>
    </div>
    </div>
  )
  function Login(){
  try{
    logInWithEmailAndPassword(email, password)
    navigate('/dashboard')
  } catch(err){
    console.log(err)
  }
}
}
