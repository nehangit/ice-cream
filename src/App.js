import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector(state => state.isLogged)
  //if not logged in:
  if(!auth){
    return (
      <LoginPage></LoginPage>
    );
  }
  else{
    return (
      <HomePage></HomePage>
    )
  }
  //if logged in:
}

export default App;
