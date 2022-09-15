import './App.css';
import Login from './Components/Authenticate/Login';
import Register from './Components/Register/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Components/dashboard/dashboard';
import Forgot from './Components/Authenticate/Forgot';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} ></Route>
        <Route exact path="/register" element={<Register></Register>}></Route>
        <Route exact path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route exact path="/resetPassword" element={<Forgot></Forgot>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
