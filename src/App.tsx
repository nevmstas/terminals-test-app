// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Global } from '@emotion/core'

import React from 'react';
import './App.css';
import { Login } from './Components/Login/Login'
import { useSelector } from 'react-redux'
import { RootState } from './redux/rootReducer';
import { Terminals } from './Components/Terminals/Terminals';
import { Buyers } from './Components/Buyers/Buyers';
import { Sidebar } from './Components/Sidebar/Sidebar'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Buyer } from './Components/Buyers/Buyer';
import { NotFoundPage } from './Components/NotFoundPage';
import { Welcome } from './Components/Welcome';
import { global, page } from "./globalStyles";
function App() { 
  const user = useSelector(( state : any ) => state.auth.user)
  const isAuth = useSelector<RootState>(state => state.auth.isAuth)

  return (
    <Router>
      <Global styles={global} />
        {isAuth? 
          <div>
              <Sidebar img = {user.avatarUrl}/>
              <div css={page}>
              <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/terminals" component={ Terminals } />
                <Route path="/buyers" exact component={ Buyers } />
                <Route path="/buyers/:id" exact component={ Buyer }/>
                <Route path="*" component={ NotFoundPage } />
              </Switch>
              </div>
          </div>
      :<Login />}
    </Router>
  );
}

export default App;
