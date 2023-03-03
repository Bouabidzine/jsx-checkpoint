// import logo from './logo.svg';
import React from 'react';
import './App.css';
import  ProfilePhoto from './Compnent/Profile/ProfilePhoto.js';
import  FullName from './Compnent/Profile/FullName.js';
import  Address from './Compnent/Profile/Address.js';

export function App() {
  return( 
    <div id='App'>
      
        <Address />
        <ProfilePhoto />
        <FullName />
       
      </div>
  );
     
} 
export default App;


