import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Messenger from "./pages/Messenger/Messenger"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import {useContext} from 'react'

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        
        <Route  path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />
        <Route path = "/register" element={user ? <Navigate to="/" replace /> :  <Register />} />
        <Route path="/messenger" element={ !user ? <Navigate to="/"  /> :  <Messenger /> }  />
        <Route path="profile" element={<Profile />}>
          <Route path=":username" element={<Profile />} />
        </Route>
       
        
        
        
      </Routes>
    </Router>
  );
  
}

export default App;
