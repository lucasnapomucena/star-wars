import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import GlobalStyle from './styles/global';

import Home from './pages/home';
import Master from './pages/master';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/master" exact component={Master} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
