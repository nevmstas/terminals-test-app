import React from 'react';
import './App.css';
import { Login } from './Components/Login/Login'
import { useSelector } from 'react-redux'
import { RootState } from './redux/rootReducer';
import { Terminals } from './Components/Terminals';
import { Buyers } from './Components/Buyers';
import { Sidebar } from './Components/Sidebar'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Buyer } from './Components/Buyer';
import { NotFoundPage } from './Components/NotFoundPage';
import { Welcome } from './Components/Welcome';

function App() { 
  const user = useSelector(( state : any ) => state.auth.user)
  const isAuth = useSelector<RootState>(state => state.auth.isAuth)

  return (
    <Router>
      <div>
        {isAuth? 
          <div>
            <Sidebar img = {user.avatarUrl}/>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/terminals" component={ Terminals } />
              <Route path="/buyers" component={ Buyers } />
              <Route path="/buyers/:id" component={ Buyer }/>
              <Route path="*" component={ NotFoundPage } />
            </Switch>
          </div>
      :<Login />}
      </div>
    </Router>
  );
}

export default App;
