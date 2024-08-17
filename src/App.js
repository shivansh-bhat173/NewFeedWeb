import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Signin from './Signin';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <>
    <div className='App'>
    
      <Routes>
      <Route path={'/'} element={<Signin/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={'/home/profile'} element={<Profile/>}/>
      </Routes>
    
    </div>
    
    </>
  );
}

export default App;
