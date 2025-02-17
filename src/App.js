import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
      <nav> 
        <h2>Friends Database</h2>
        <div className='links'>  
          <Link className='link' to="/">Login</Link>
          <Link className='link' to="/friendlist">FriendList</Link>
          <Link className='link' to="/addfriend">AddFriend</Link>
          <Link className='link' to="/logout">LogOut</Link>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/friendlist" element={<FriendsList />} />
        <Route path="/addfriend" element={<AddFriend />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Login />
    </div>
  );
}

export default App;
