import React from 'react';
import './App.css';
import { Login } from './Components/Login'
import { useSelector } from 'react-redux'
import { RootState } from './redux/rootReducer';
import { Terminals } from './Components/Terminals';

function App() {
  
  const user = useSelector(( state : any ) => state.auth.user)
  const isAuth = useSelector<RootState>(state => state.auth.isAuth)

  console.log(user)

  return (
    <div>
      {/* <Login /> */}
      {isAuth? <img alt='avatar' src={`${user.avatarUrl}`} />:<Login />}
      <Terminals />
    </div>
  );
}

export default App;
