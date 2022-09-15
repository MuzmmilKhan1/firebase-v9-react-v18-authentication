import  { React , useState, useEffect} from 'react'
import '../Register/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../firebase";
export default function Register() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    try{
    registerWithEmailAndPassword(name, email, password);
    navigate('/dashboard')
    }catch(err){
      console.log(err)
    }
  };
  
  return (
    <>
    <div className='body mx-auto'>
    <div className='RegLog'>
        <h3>Welcome</h3>
        <div className='form'>
            <label>Name:</label><br></br>
            <input placeholder='Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} ></input><br></br>
            <label>Email:</label><br></br>
            <input placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
            <label>Password:</label><br></br>
            <input placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>
        <button className='btn' onClick={register}>Register</button>
        <Link to="/" className='a'>Already Registered?</Link>
    </div>
    </div>
    </>
  )
}
