import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <nav> 
        <h2>Friends Database</h2>
        <div className='links'>  
          <Link className='link' to="/login">Login</Link>
          <Link className='link' to="/friendlist">FriendList</Link>
          <Link className='link' to="/addfriend">AddFriend</Link>
          <Link className='link' to="/login">LogOut</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/login">Login</Route>
        <Route path="/friendlist">FriendList</Route>
        <Route path="/addfriend">AddFriend</Route>
        <Route path="/login">LogOut</Route>
      </Routes>
      <Login />
    </div>
  );
}

export default App;
