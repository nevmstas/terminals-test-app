import React from 'react';
import './App.css';
import { Login } from './Components/Login'
import { useSelector } from 'react-redux'
import { RootState } from './redux/rootReducer';
import { Terminals } from './Components/Terminals';
import { Buyers } from './Components/Buyers';

function App() {
  
  const user = useSelector(( state : any ) => state.auth.user)
  const isAuth = useSelector<RootState>(state => state.auth.isAuth)

  return (
    <div>
      {/* <Login /> */}
      {isAuth? <img alt='avatar' src={`${user.avatarUrl}`} />:<Login />}
      <Terminals />
      <Buyers />
    </div>
  );
}

export default App;
